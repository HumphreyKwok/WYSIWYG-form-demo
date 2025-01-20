"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButtuon = () => {
  return <Button onClick={() => signOut()}>Sign-out</Button>;
};

export default SignOutButtuon;
