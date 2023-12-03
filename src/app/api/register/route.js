import { NextResponse } from "next/server";
import { connectDb } from "../../../dbConfig/dbConfig";
import { User, UserSchema } from "../../../models/userSchema";
import bcrypt from "bcrypt";

connectDb();

export async function POST(req) {
  const body = await req.json();
  // const { email, password } = body;

  // // //find al user email exist on db or not
  // const user = await User.findOne({ email });

  // // //check user already exist or not
  // if (user) {
  //   return NextResponse.json(
  //     { error: "User already exist" },
  //     {
  //       status: 400,
  //     }
  //   );
  // }

  // //hash the password
  // const salt = bcrypt.genSaltSync(10);
  // user.password = bcrypt.hashSync(user.password, salt);
  // next();

  //create user in database
  const createUser = await User.create(body);

  return Response.json(createUser);
}
