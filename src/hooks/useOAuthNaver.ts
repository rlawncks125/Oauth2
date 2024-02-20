// naver OAuth Docs

import { useEffect, useState } from "react";

const msgType = "auth-naver";

export const useOAuthNaver = () => {
  const [user, setUser] = useState<NAVER_USER>();

  // 권한 동의
  const authorize = () => {
    fetch("/api/naver/auth", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => window.open(res.url, "_black", "popup"));
  };

  // access_token 획득
  const accessToken = async (code: String): Promise<String> => {
    const res = (await fetch("/api/naver/access", {
      method: "post",
      body: JSON.stringify({
        code,
      }),
    }).then((res) => res.json())) as {
      access_token: "엑세스 토큰";
      refresh_token: "새로고침 토큰";
      token_type: "토큰 타입";
      expires_in: "유효 기간";
    };

    return res.access_token;
  };

  // 내정보 조회
  const getMe = async (
    access_token?: String
  ): Promise<NAVER_USER | undefined> => {
    const user = (await fetch("/api/naver/user", {
      method: "post",
      body: JSON.stringify({
        access_token: access_token,
      }),
    }).then((res) => res.json())) as {
      resultcode: "상태 코드";
      message: "상태 메시지";
      response?: NAVER_USER;
    };

    return user.response;
  };

  // 완료 됬을시 팝업창을 열었던 페이지에 message를 보냄
  const doneOpner = (userDate: NAVER_USER) => {
    window.opener.postMessage({
      msgType,
      userDate,
    });

    window.close();
  };

  const handlerDone = (msg: MessageEvent) => {
    if (msg.data.msgType !== msgType) return;

    setUser(msg.data.userDate);
  };

  useEffect(() => {
    window.addEventListener("message", handlerDone);

    return () => window.removeEventListener("message", handlerDone);
  }, []);

  const refresh = (refresh_token: String) => {
    fetch("/api/naver/refresh", {
      method: "post",
      body: JSON.stringify({
        refresh_token,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return {
    doneOpner,
    authorize,
    accessToken,
    getMe,
    user,
    refresh,
  };
};
