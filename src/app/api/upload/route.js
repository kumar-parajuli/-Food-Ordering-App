import { uploadOnCloudinary } from "../../utils/cloudinary"; // Update the path accordingly

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("files");

  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const cloudinaryResponse = await uploadOnCloudinary(buffer);

    // Use cloudinaryResponse as needed

    return new Response(JSON.stringify(true), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
