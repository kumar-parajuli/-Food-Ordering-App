"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    console.log(user);
    setUserCreated(false);
    setError(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email: user.email, password: user.password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.
          <br />
          Please try again later
        </div>
      )}

      <form onSubmit={handleFormSubmit} className="block max-w-xs mx-auto">
        <input
          type="email"
          placeholder="email"
          value={user.email}
          dissabled={creatingUser}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          dissabled={creatingUser}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" dissabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={"login"} width={24} height={32} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
