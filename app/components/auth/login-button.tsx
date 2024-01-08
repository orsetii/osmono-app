import React from "react";
import { Button } from "../ui/button";
import { Link } from "@remix-run/react";
export function LoginButton() {
  return (
    <Link to="/login">
      <Button variant="default" size="default" className="mx-2">Login</Button>
    </Link>
  );
}

export default LoginButton;
