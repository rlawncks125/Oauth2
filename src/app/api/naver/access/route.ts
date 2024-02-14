import { convterObjectToArray } from "@/utils/convter";

export async function POST(request: Request) {
  const { code } = await request.json();

  const reqUrl = "https://nid.naver.com/oauth2.0/token";

  const config = {
    client_id: process.env.NAVER_CLIENT_ID,
    client_secret: process.env.NAVER_CLIENT_SECRETS,
    redirect_uri: "http://localhost:3000/naver/callback",
    grant_type: "authorization_code",
    code,
  };

  const url = new URL(reqUrl);
  url.searchParams.append;

  convterObjectToArray(config).forEach((key) => {
    url.searchParams.append(key, config[key]!);
  });

  const res = await fetch(url, {
    method: "get",
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRETS,
    },
  }).then((res) => res.json());

  console.log(res);

  return Response.json(res);
}
