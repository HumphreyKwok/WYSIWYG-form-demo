"use server";

import { signIn, signOut } from "@/lib/authConfig";

export const SignInWith = async (provider: string) => {
  await signIn(provider);
};

export const SignOut = async () => {
  await signOut();
};
