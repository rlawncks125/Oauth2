export async function GET(request: Request) {
  return new Response("hi Get api", {
    status: 200,
  });
}

export async function POST(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi post pai",
  });
}

export async function PUT(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi put pai",
  });
}
export async function PATCH(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi patch pai",
  });
}
export async function DELETE(request: Request) {
  console.log(request.body);

  return Response.json({
    ok: true,
    msg: "hi delete pai",
  });
}
