"use client";

import { useOAuthGitHub } from "@/hooks/useOAuthGitHub";
import { useEffect } from "react";

export default function page() {
  const { authorize, user } = useOAuthGitHub();

  const openGithub = () => {
    authorize();
  };

  return (
    <>
      <main>
        <button onClick={openGithub}>open github</button>

        <p>hi main</p>
        <p>asdasd</p>
        {user &&
          Object.keys(user).map((key) => (
            <p key={key}>
              {/* @ts-ignore */}
              {key} : {user[key]}
            </p>
          ))}
      </main>
    </>
  );
}
