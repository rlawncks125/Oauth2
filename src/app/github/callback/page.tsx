"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const searchParms = useSearchParams();

  const [token, setToken] = useState();
  const [user, setUser] = useState<GitHub_User>();

  useEffect(() => {
    console.log(searchParms.get("code"));
  }, []);

  const getAcessToken = async () => {
    const res = await fetch("/api/github/access", {
      method: "post",
      body: JSON.stringify({
        code: searchParms.get("code"),
      }),
    }).then((res) => res.json());

    console.log(res);

    setToken(res.access_token);
  };

  const getUserData = async () => {
    const res = await fetch("/api/github/user", {
      method: "post",
      body: JSON.stringify({
        access_token: token,
      }),
    }).then((res) => res.json());
    setUser(res);
  };

  return (
    <div>
      <button onClick={getUserData}>유저 데이터 얻기</button>
      <br />
      <button onClick={getAcessToken}>acess_token get</button>
      <div>
        <p>{token}</p>
      </div>
      <br />
      <br />

      <p>유저</p>
      {user && (
        <>
          <p>{user.login}</p>
          <p>{user.id}</p>
        </>
      )}
    </div>
  );
}
