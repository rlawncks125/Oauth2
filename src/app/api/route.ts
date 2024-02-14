export async function GET(request: Request) {
  return new Response("hi Get api", {
    status: 200,
  });
}

export async function POST(request: Request) {
  console.log(request.body);

  return Response.json(
    {
      msg: "hi post pai",
    },
    {
      status: 200,
    }
  );
}

export async function PUT(request: Request) {
  console.log(request.body);

  return Response.json({
    msg: "hi put pai",
  });
}
export async function PATCH(request: Request, response: Response) {
  console.log(request.body);

  return Response.json({
    msg: "hi patch pai",
  });
}
export async function DELETE(request: Request) {
  console.log(request.body);

  return Response.json({
    msg: "hi delete pai",
  });
}
