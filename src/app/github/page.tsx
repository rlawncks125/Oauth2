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
            email={user.email}
            imageURL={user.avatar_url}
            name={user.name}
            id={user.id}
          />
        )}
      </main>
    </>
  );
}
