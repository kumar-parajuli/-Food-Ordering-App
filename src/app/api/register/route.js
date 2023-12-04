import { NextResponse } from "next/server";
import { connectDB } from "../../../dbConfig/dbConfig";
import { User, UserSchema } from "../../../models/userSchema";
import bcrypt from "bcrypt";

connectDB();

export async function POST(req) {
  const body = await req.json();

  //create user in database
  const createUser = await User.create(body);

  return Response.json(createUser);
}
