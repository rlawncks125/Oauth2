import { convterObjectToArray } from "@/utils/convter";
import { URLSearchParams } from "url";

export async function GET(request: Request) {
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    scoper: "read:user user:email",
  };

  const url = new URL("https://github.com/login/oauth/authorize");

  convterObjectToArray(config).forEach((key) => {
    url.searchParams.append(key, config[key]!);
  });

  return Response.json({
    url,
  });
}
