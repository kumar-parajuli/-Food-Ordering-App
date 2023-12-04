"use client";
import { useState } from "react";
import Image from "next/image";
import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn("Credentials", {
      email: user.email,
      password: user.password,
      callbackUrl: "/",
    }); //from credentialof google

    console.log(response);
    if (response.ok) {
    } else {
    }
    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form onSubmit={handleFormSubmit} className="block max-w-xs mx-auto">
        <input
          type="email"
          placeholder="email"
          value={user.email}
          disabled={loginInProgress}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          disabled={loginInProgress}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-gray-500 text-center">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={"login"} width={24} height={32} />
          Login with google
        </button>
      </form>
    </section>
  );
}
