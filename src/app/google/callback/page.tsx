"use client";
import { useOAuthGitHub } from "@/hooks/useOAuthGitHub";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  // const searchParms = useSearchParams();

  // const { doneOpner, accessToken, getMe } = useOAuthGitHub();

  const [userInfo, setUser] = useState<GOOGLE_USER>();

  const [token, setToken] = useState<string>();

  useEffect(() => {
    console.log(
      new URLSearchParams(window.location.hash.substr(1)).get("access_token")
    );
  }, []);

  const getAcessToken = async () => {
    const access_token = new URLSearchParams(
      window.location.hash.substr(1)
    ).get("access_token");

    console.log(access_token);
    setToken(access_token!);

    // const access_token = await accessToken(searchParms.get("code")!);
    // setToken(access_token);
  };

  const getUserData = async () => {
    const user = (await fetch("/api/google/user", {
      method: "post",
      body: JSON.stringify({
        access_token: token,
      }),
    }).then((res) => res.json())) as GOOGLE_USER;
    setUser(user);

    // const user = await getMe(token);
    // setUser(user);
  };

  const close = () => {
    // if (userInfo) doneOpner(userInfo);
  };

  return (
    <div>
      <div>
        <h1>1.</h1>
        {/* <p>code : {searchParms.get("code")}</p> */}
      </div>
      <div>
        <h1>2.</h1>
        <button onClick={getAcessToken}>acess_token get</button>
        <p>acess_token : </p>
        <p>{token}</p>
      </div>
      <br />
      <button onClick={close}>닫기</button>
      <br />
      <div></div>

      <br />

      <button onClick={getUserData}>유저 데이터 얻기</button>
      <p>유저</p>
      {userInfo &&
        Object.keys(userInfo).map((key) => (
          <p key={key}>
            {/* @ts-ignore */}
            {key} : {userInfo[key]}
          </p>
        ))}
    </div>
  );
}
