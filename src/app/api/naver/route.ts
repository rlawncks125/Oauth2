export async function GET(request: Request) {
  return new Response("hi naver Get api", {
    status: 200,
  });
}

export async function POST(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi naver post pai",
  });
}

export async function PUT(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi naver put pai",
  });
}
export async function PATCH(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi naver patch pai",
  });
}
export async function DELETE(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi naver delete pai",
  });
}
