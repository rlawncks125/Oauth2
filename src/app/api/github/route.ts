// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

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
