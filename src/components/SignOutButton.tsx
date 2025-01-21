import { SignOut } from "@/actions/authActions";
import { Button } from "@/components/ui/button";

const SignOutButtuon = () => {
  return <Button onClick={async () => SignOut()}>Sign-out</Button>;
};

export default SignOutButtuon;
