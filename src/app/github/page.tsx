"use client";

import UserCard from "@/components/design/card/UserCard";
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
        {user && (
          <UserCard
            className="bg-gray-400"
            email={user.email}
            imageURL={user.avatar_url}
            name={user.login}
            id={user.id}
          />
        )}
      </main>
    </>
  );
}
