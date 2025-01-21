"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { SignOut } from "@/actions/authActions";

const EditionSection = () => {
  return (
    <section className="flex h-[90%] w-1/4 flex-col gap-2 p-2">
      <header className="flex h-10 items-center justify-between">
        <p>Welcome</p>
        <Button onClick={async () => await SignOut()}>Sign-out</Button>
      </header>
      <div className="flex h-full w-full flex-1 items-center justify-center text-2xl">
        <Accordion type="single" collapsible className="h-full w-full">
          <AccordionItem value="edit">
            <AccordionTrigger>Edit a existing field...</AccordionTrigger>
            <AccordionContent>Editing placeholder...</AccordionContent>
          </AccordionItem>
          <AccordionItem value="create">
            <AccordionTrigger>Create a new field...</AccordionTrigger>
            <AccordionContent>Create placeholder...</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default EditionSection;
