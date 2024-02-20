// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

// 토큰 철회
// https://docs.github.com/ko/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation

// 토큰 폐기 api 주소
// https://docs.github.com/ko/rest/apps/oauth-applications?apiVersion=2022-11-28#delete-an-app-token

import { convterObjectToArray } from "@/utils/convter";

export async function GET(request: Request) {
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    scope: "user:email",
  };

  const url = new URL("https://github.com/login/oauth/authorize");

  convterObjectToArray(config).forEach((key) => {
    url.searchParams.append(key, config[key]!);
  });

  return Response.json({
    url,
  });
}
