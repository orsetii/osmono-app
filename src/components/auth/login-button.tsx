import { Button } from "../ui/button";
import { Link } from "react-router-dom";
export function LoginButton() {
  return (
    <Link to="/api/auth/login">
      <Button variant="default" size="default" className="mx-2">Login</Button>
    </Link>
  );
}

export default LoginButton;
