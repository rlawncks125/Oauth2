"use client";

import UserCard from "@/components/design/card/UserCard";
import { useOAuthGoogle } from "@/hooks/useOAuthGoogle";
import { useEffect } from "react";

export default function page() {
  const { authorize, user } = useOAuthGoogle();
  useEffect(() => {
    // fetch("/api/naver", {
    //   method: "GET",
    // })
    //   .then((res) => res.text())
    //   .then(console.log);
    // github_authorize();
  }, []);

  const openGoogle = () => {
    // fetch("/api/google", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((res) => window.open(res.url, "_black", "noopener , noreferrer"));

    authorize();
  };

  return (
    <>
      <main>
        <button onClick={openGoogle}>open google</button>
        <p>hi main</p>
        <p>asdasd</p>
        {user && (
          <UserCard
            className="bg-[#3B82F6]"
            imageURL={user.picture}
            name={user.name}
            id={user.id}
          />
        )}
      </main>
    </>
  );
}
