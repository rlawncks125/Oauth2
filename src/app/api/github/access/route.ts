import { convterObjectToArray } from "@/utils/convter";
import { URLSearchParams } from "url";

export async function POST(request: Request) {
  const { code } = await request.json();
  const url = "https://github.com/login/oauth/access_token";

  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRETS,
    code,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(config),
  }).then((res) => res.json());

  console.log(res);

  return Response.json({
    access_token: res.access_token,
  });
}
