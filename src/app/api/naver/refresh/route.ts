import { convterObjectToArray } from "@/utils/convter";

export async function POST(request: Request) {
  const { refresh_token } = await request.json();

  const reqUrl = "https://nid.naver.com/oauth2.0/token";

  const config = {
    client_id: process.env.NAVER_CLIENT_ID,
    client_secret: process.env.NAVER_CLIENT_SECRETS,
    refresh_token,
    grant_type: "refresh_token",
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
