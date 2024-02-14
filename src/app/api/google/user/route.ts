// https://developers.google.com/oauthplayground/
// 에서 앞에서 header에 담은 scope 주소 를 찾고 step3까지 가서 주소 알아내야 함

import { convterObjectToArray } from "@/utils/convter";

export async function POST(request: Request) {
  const { access_token } = await request.json();
  console.log(access_token);

  const url = "https://www.googleapis.com/oauth2/v2/userinfo";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());

  console.log(res);

  return Response.json(res);
}
