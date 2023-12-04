"use client";
import React from "react";
import SessionProvider from "next-auth";
export default function AppContext({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
