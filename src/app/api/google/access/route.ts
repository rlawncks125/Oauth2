import { convterObjectToArray } from "@/utils/convter";
import { URLSearchParams } from "url";

export async function POST(request: Request) {
  const { code } = await request.json();
  const url = "https://oauth2.googleapis.com/token";

  const config = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRETS,
    code,
    grant_type: "authorization_code",
    redirect_uri: "https://oauth2-ten.vercel.app/google/callback",
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
