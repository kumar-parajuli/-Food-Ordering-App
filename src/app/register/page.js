"use client";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email: user.email, password: user.password }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

      <form onSubmit={handleSubmit} className="block max-w-xs mx-auto">
        <input
          type="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={"login"} width={24} height={32} />
          Login with google
        </button>
      </form>
    </section>
  );
}
