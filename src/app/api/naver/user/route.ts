import { convterObjectToArray } from "@/utils/convter";

export async function POST(request: Request) {
  const { access_token } = await request.json();
  console.log(access_token);

  const url = "https://openapi.naver.com/v1/nid/me";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());

  console.log(res);

  return Response.json(res);
}
