"use client";

import { TFormSchema } from "@/types/formSchema";
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

const PreviewSection = ({ formSchema }: TFormSchema) => {
  let defaultValues: { [key: string]: string } = {};
  formSchema.fields.forEach((field) => (defaultValues[field.name] = ""));

  const form = useForm({
    defaultValues,
  });

  return (
    <section className="flex h-[90%] flex-1 flex-col items-center text-2xl">
      <Form {...form}>
        <form className="flex w-full flex-col gap-4 p-5">
          <h1 className="text-2xl">Preview</h1>

          <div className="flex items-center gap-1 text-primary-foreground/80">
            <h2 className="text-base first-letter:uppercase">
              {formSchema.name}:
            </h2>
            <small className="text-sm">{formSchema.description}</small>
          </div>

          {formSchema.fields.map((formField) => (
            <FormField
              key={formField.id}
              control={form.control}
              name={formField.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formField.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={formField.placeholder} {...field} />
                  </FormControl>
                  <FormDescription>{formField.description}</FormDescription>
                </FormItem>
              )}
            />
          ))}
        </form>
      </Form>
    </section>
  );
};

export default PreviewSection;
