"use client";
import { useOAuthGitHub } from "@/hooks/useOAuthGitHub";
import { useOAuthGoogle } from "@/hooks/useOAuthGoogle";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const searchParms = useSearchParams();

  const [userInfo, setUser] = useState<GOOGLE_USER>();

  const [token, setToken] = useState<string>();

  const { doneOpner, accessToken, getMe } = useOAuthGoogle();

  useEffect(() => {
    console.log(searchParms.get("code"));
  }, []);

  const getAcessToken = async () => {
    const access_token = await accessToken(searchParms.get("code")!);

    setToken(access_token);
  };

  const getUserData = async () => {
    const user = await getMe(token);
    setUser(user);
  };

  const close = () => {
    if (userInfo) doneOpner(userInfo);
  };

  return (
    <div>
      <div className="border my-2">
        <h1>1.</h1>
        <p>code : {searchParms.get("code")}</p>
      </div>
      <div className="border my-2">
        <h1>2.</h1>
        <button
          className="border-2 mx-2 my-4 focus:outline-none   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          onClick={getAcessToken}
        >
          acess_token get
        </button>
        <div className="felx flex justify-start gap-2">
          <p>acess_token : </p>
          <p>{token}</p>
        </div>
      </div>
      <div className="border my-2">
        <button
          className="border-2 mx-2 my-4 focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          onClick={getUserData}
        >
          유저 데이터 얻기
        </button>
        <p>유저 데이터</p>
        {userInfo && (
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">속성</th>
                  <th className="px-6 py-3">값</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(userInfo).map((key) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-3" key={key}>
                      {key}
                    </td>
                    <td className="px-6 py-3">
                      {/* @ts-ignore */}
                      {userInfo[key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <button
        className="my-4 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        onClick={close}
      >
        닫기
      </button>
    </div>
  );
}
