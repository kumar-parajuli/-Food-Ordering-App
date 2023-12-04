import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userSchema";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log({ credentials });

        return null;
      },
    }),
  ],
});
export { handler as GET, handler as POST };
// const { email, password } = credentials;

// //connect db
// connectDB();
// const user = await User.findOne({ email });
// const passwordOk = user && bcrypt.compareSync(password, user.password);

// if (passwordOk) {
//   return user;
