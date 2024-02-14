// 참고 https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=ko#handlingresponse
// scope 주소 https://developers.google.com/identity/protocols/oauth2/scopes?hl=ko

import { convterObjectToArray } from "@/utils/convter";

export async function GET(request: Request) {
  const config = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: "http://localhost:3000/google/callback",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    // state: "pass-through value",
  };

  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  convterObjectToArray(config).forEach((key) => {
    url.searchParams.append(key, config[key]!);
  });

  return Response.json({
    url,
  });
}
