"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { mainFormSchema } from "@/lib/zodSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  mainFormAction,
  sendUserConfirmation,
} from "@/actions/mainFormActions";

import { useToast } from "@/hooks/use-toast";

const MainForm = () => {
  const form = useForm<z.infer<typeof mainFormSchema>>({
    resolver: zodResolver(mainFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const handleSubmit = async (values: z.infer<typeof mainFormSchema>) => {
    const backendValidation = await mainFormAction(values);

    if (backendValidation.status === 200) {
      toast({
        title: "Form Submission Success",
        description: "Sending email confirmation...",
      });
      form.reset();

      const emailConfirmationResult = await sendUserConfirmation(
        backendValidation.data!.contact as string,
      );

      if ((emailConfirmationResult.status = 200)) {
        toast({
          title: "Confirmation Email Sent",
          description: "All clear",
        });

        return;
      }

      toast({
        title: "Email Confirmation Failed",
        description:
          "We tried to send you an email confirmation, but something went wrong",
        variant: "destructive",
      });
    }

    if (backendValidation.status === 400) {
      toast({
        title: "Form Submission Failed",
        description: "Failed to validate the form data at server side",
        variant: "destructive",
      });
    }
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
                <Input placeholder="name..." {...field} />
              </FormControl>
              <FormDescription>How should I call you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email..." {...field} />
              </FormControl>
              <FormDescription>How could we find you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="message..."
                  {...field}
                  rows={8}
                  className="resize-none"
                />
              </FormControl>
              <FormDescription>How could we help you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Form</Button>
      </form>
    </Form>
  );
};

export default MainForm;
