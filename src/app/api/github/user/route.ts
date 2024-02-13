import { convterObjectToArray } from "@/utils/convter";
import { URLSearchParams } from "url";

export async function POST(request: Request) {
  const { access_token } = await request.json();
  console.log(access_token);

  const url = "https://api.github.com/user";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());

  console.log(res);

  return Response.json(res);
}
