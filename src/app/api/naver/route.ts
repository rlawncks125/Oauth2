import { convterObjectToArray } from "@/utils/convter";

export async function GET(request: Request) {
  const config = {
    client_id: process.env.NAVER_CLIENT_ID,
    redirect_uri: "http://localhost:3000/naver/callback",
    response_type: "code",

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
