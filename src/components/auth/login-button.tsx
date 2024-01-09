import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const {
    loginWithRedirect,
  } = useAuth0();

  return (
    <Button
      variant="default"
      size="default"
      className="mx-2"
      onClick={loginWithRedirect}
    >
      Login
    </Button>
  );
}