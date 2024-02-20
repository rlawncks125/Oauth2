// https://developers.naver.com/docs/login/devguide/devguide.md#4-1-1-database%EC%9D%98-%EA%B5%AC%EC%84%B1

import { convterObjectToArray } from "@/utils/convter";

export async function GET(request: Request) {
  const config = {
    client_id: process.env.NAVER_CLIENT_ID,
    redirect_uri: "http://localhost:3000/naver/callback",
    response_type: "code",
    auth_type: "reprompt", // "reprompt" 재동의 요청 "reauthenticate" 재인증 요청

    // redirect_uri: encodeURI("http://localhost:3000/naver/callback"),
  };

  const url = new URL("https://nid.naver.com/oauth2.0/authorize");

  convterObjectToArray(config).forEach((key) => {
    url.searchParams.append(key, config[key]!);
  });

  return Response.json({
    url,
  });
}
