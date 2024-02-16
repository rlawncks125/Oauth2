"use client";

import UserCard from "@/components/design/card/UserCard";
import { useOAuthNaver } from "@/hooks/useOAuthNaver";
import { useEffect, useState } from "react";

export default function page() {
  const { authorize, user, refresh } = useOAuthNaver();
  const [refreshToken, setRefreshToken] = useState<String>();

  const authorizeNaver = () => {
    authorize();
  };

  const onRefreshToken = () => {
    console.log(refreshToken);

    if (refreshToken) {
      refresh(refreshToken);
    }
  };

  return (
    <>
      <main>
        <button onClick={authorizeNaver}>open naver</button>
        <p>hi main</p>
        <p>asdasd</p>
        <div>
          <label htmlFor="refresh">refreshToken</label>
          <input
            className="border ml-2"
            type="text"
            name="refresh"
            onChange={(e) => setRefreshToken(e.target.value)}
          />
        </div>
        <button onClick={onRefreshToken}>refresh</button>
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
      </main>
    </>
  );
}
