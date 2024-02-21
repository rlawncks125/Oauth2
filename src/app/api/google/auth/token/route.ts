import { convterObjectToArray } from "@/utils/convter";

export async function GET(request: Request) {
  const config = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: "https://oauth2-ten.vercel.app/google/callback",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    prompt: "select_account",
  };

  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  convterObjectToArray(config).forEach((key) => {
    url.searchParams.append(key, config[key]!);
  });

  return Response.json({
    url,
  });
}
