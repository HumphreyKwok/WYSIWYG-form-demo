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
    <Form {...form}>
      <form className="flex w-full flex-col gap-4 p-5">
        <h1 className="text-2xl">Preview</h1>

        <div className="flex items-center gap-1 text-primary-foreground/80">
          <h2 className="text-base">
            {formSchema.name[0].toUpperCase() + formSchema.name.slice(1)}:
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
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
};

export default PreviewSection;
