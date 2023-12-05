import { getServerSession } from "next-auth";
import { connectDB } from "../../../dbConfig/dbConfig";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "../../../models/userSchema";
export async function PUT(req) {
  connectDB();
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  if ("name" in data) {
    //update the user name
    await User.updateOne({ email }, { name: data.name });
  }
  return Response.json(true);
}
