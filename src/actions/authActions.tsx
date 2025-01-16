"use server";

import { signIn } from "@/lib/authConfig";

export const SignInWith = async (provider: string) => {
  await signIn(provider);
};
