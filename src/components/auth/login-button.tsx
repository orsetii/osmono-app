"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export function LoginButton() {
  return (
    <Link href="/api/auth/login">
      <Button variant="default" size="default" className="mx-2">Login</Button>
    </Link>
  );
}

export default LoginButton;
