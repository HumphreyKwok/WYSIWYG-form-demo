"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const EditingPanel = () => {
  return (
    <div className="container flex h-[85%] items-center justify-center gap-4">
      <section className="flex h-[90%] flex-1 flex-col items-center justify-center text-2xl">
        Preview
      </section>
      <div className="h-full border-l-[1px] border-foreground"></div>
      <section className="flex h-[90%] w-1/4 flex-col">
        <header className="flex h-10 items-center justify-between p-4">
          <p>Welcome</p>
          <Button onClick={() => signOut()}>Sign-out</Button>
        </header>
        <div className="flex flex-1 items-center justify-center text-2xl">
          Editor
        </div>
      </section>
    </div>
  );
};

export default EditingPanel;
