/*
 * This is one of the best component I have created so far.
 *
 * This component reads the nextAuth providers after the first render, using useEffect() hook
 * Then each provider will be mapped to form, which will invoke an server action when being submitted
 * The form will pass the name of the provider to the action, and eventaully calls the nextAuth signIn function in server
 * In the meanwhile, as each button gets the status of its form using the useFormStatus hook
 * so if the button is associated with a form that is being submitted, the button turns into loading state
 */

"use client";

import LoadingButton from "@/components/ui/loadingButton";
import { getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { SignInWith } from "@/actions/authActions";

const SignInForm = () => {
  const [providers, setProviders] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const fetchedProviders = await getProviders();
      setProviders(fetchedProviders);
    };

    fetchProviders();
  }, []);

  return (
    <Card className="w-1/3">
      <CardContent>
        <CardTitle className="py-10 text-center font-thin">
          <p>Sign-in to Edit the Forms</p>
        </CardTitle>
        {Object.keys(providers || {}).map((provider) => (
          <form
            action={async () => {
              SignInWith(provider);
            }}
            key={provider}
          >
            <LoadingButton>
              {`Sign-in with ${provider[0].toUpperCase() + provider.slice(1)}`}{" "}
            </LoadingButton>
          </form>
        ))}
      </CardContent>
    </Card>
  );
};

export default SignInForm;
