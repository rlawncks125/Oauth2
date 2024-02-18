// github OAuth Docs
// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

import { useEffect, useState } from "react";

const msgType = "auth-github";

export const useOAuthGitHub = () => {
  const [user, setUser] = useState<GitHub_User>();

  // 권한 동의
  const authorize = () => {
    fetch("/api/github/auth", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => window.open(res.url, "_black", "popup"));
    // .then((res) => window.open(res.url, "_black", "noopener , noreferrer"));
  };

  // access_token 획득
  const accessToken = async (code: String): Promise<string> => {
    const res = (await fetch("/api/github/access", {
      method: "post",
      body: JSON.stringify({
        code,
      }),
    }).then((res) => res.json())) as {
      access_token: "엑세스 토큰";
      token_type: "토큰 타입";
      scope: String;
    };

    return res.access_token;
  };

  // 내정보 조회
  const getMe = async (access_token?: string): Promise<GitHub_User> => {
    const user = (await fetch("/api/github/user", {
      method: "post",
      body: JSON.stringify({
        access_token: access_token,
      }),
    }).then((res) => res.json())) as GitHub_User;

    return user;
  };

  // 완료 됬을시 팝업창을 열었던 페이지에 message를 보냄
  const doneOpner = (userDate: GitHub_User) => {
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
