"use client";
import { useOAuthNaver } from "@/hooks/useOAuthNaver";
import { convterObjectToArray } from "@/utils/convter";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const searchParms = useSearchParams();

  const [token, setToken] = useState<String>();

  const { accessToken, doneOpner, getMe } = useOAuthNaver();

  useEffect(() => {
    console.log(searchParms.get("code"));
  }, []);

  const getAcessToken = async () => {
    const access_token = await accessToken(searchParms.get("code")!);
    setToken(access_token);
  };

  const getUserData = async () => {
    const user = await getMe(token);

    doneOpner(user!);
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
    </div>
  );
}
