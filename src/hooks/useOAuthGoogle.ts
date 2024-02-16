// google OAuth Docs

import { useEffect, useState } from "react";

const msgType = "auth-google";

export const useOAuthGoogle = () => {
  const [user, setUser] = useState<GOOGLE_USER>();

  // 권한 동의
  const authorize = () => {
    fetch("/api/google", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => window.open(res.url, "_black", "popup"));
  };

  // access_token 획득
  const accessToken = async (code: String): Promise<string> => {
    const res = (await fetch("/api/google/access", {
      method: "post",
      body: JSON.stringify({
        code,
      }),
    }).then((res) => res.json())) as {
      access_token: string;
      expires_in: number;
      refresh_token: string;
      scope: string;
      token_type: string;
      id_token: string;
    };

    return res.access_token;
  };

  // 내정보 조회
  const getMe = async (access_token?: string): Promise<GOOGLE_USER> => {
    return (await fetch("/api/google/user", {
      method: "post",
      body: JSON.stringify({
        access_token,
      }),
    }).then((res) => res.json())) as GOOGLE_USER;
  };

  // 완료 됬을시 팝업창을 열었던 페이지에 message를 보냄
  const doneOpner = (userDate: GOOGLE_USER) => {
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

  return {
    doneOpner,
    authorize,
    accessToken,
    getMe,
    user,
  };
};
