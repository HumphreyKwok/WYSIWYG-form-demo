"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MainForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = (values: { name: string }) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>How should I call you?</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit Form</Button>
      </form>
    </Form>
  );
};

export default MainForm;
