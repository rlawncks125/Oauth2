"use client";

import OAuthGitHoubButton from "@/components/design/button/OAuthGitHoubButton";
import OAuthGoogleButton from "@/components/design/button/OAuthGoogleButton";
import OAuthNaverButton from "@/components/design/button/OAuthNaverButton";
import UserCard from "@/components/design/card/UserCard";
import { useOAuthGitHub } from "@/hooks/useOAuthGitHub";
import { useOAuthGoogle } from "@/hooks/useOAuthGoogle";
import { useOAuthNaver } from "@/hooks/useOAuthNaver";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { user: googleUser, authorize: googleAuthorize } = useOAuthGoogle();
  const { user: githubUser, authorize: githubAuthorize } = useOAuthGitHub();
  const { user: naveruser, authorize: naverAuthorize } = useOAuthNaver();

  return (
    <>
      <main>Hoe</main>
      <div className="flex justify-start p-4">
        <UserCard className="bg-green-400" />
      </div>
      <div className="flex justify-start p-2">
        <OAuthGoogleButton onClick={() => googleAuthorize()} />
        {googleUser && (
          <UserCard
            className="bg-[#3B82F6]"
            imageURL={googleUser.picture}
            name={googleUser.name}
            id={googleUser.id}
          />
        )}
      </div>
      <div className="flex flex-col items-start p-2">
        <OAuthGitHoubButton onClick={() => githubAuthorize()} />
        {githubUser && (
          <UserCard
            className="bg-gray-400"
            email={githubUser.email}
            imageURL={githubUser.avatar_url}
            name={githubUser.name}
            id={githubUser.id}
          />
        )}
      </div>

      <div className="flex flex-col items-start p-2">
        <OAuthNaverButton onClick={() => naverAuthorize()} />
        {naveruser && (
          <UserCard
            className="bg-[#03C75A]"
            email={naveruser.email}
            imageURL={naveruser.profile_image}
            name={naveruser.name}
            id={naveruser.id}
          />
        )}
      </div>
    </>
  );
}
