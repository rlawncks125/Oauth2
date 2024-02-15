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
        {user && (
          <UserCard
            email={user.email}
            imageURL={user.profile_image}
            name={user.name}
            id={user.id}
          />
        )}
      </main>
    </>
  );
}
