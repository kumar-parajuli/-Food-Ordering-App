export async function POST(req) {
  const data = await req.formData();
  //   console.log(data);
  if (data.get("file")) {
    console.log("we have afile", data.get("file"));
  }
  return Response.json(true);
}
