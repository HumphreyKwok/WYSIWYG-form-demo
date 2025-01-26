"use client";

import { TFormSchema } from "@/types/formSchema";

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

const PreviewSection = ({
  formInfo,
  setActiveFieldId,
}: {
  formInfo: TFormSchema;
  setActiveFieldId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const defaultValues: { [key: string]: string } = {};
  formInfo.fields.forEach((field) => (defaultValues[field.name] = ""));

  const form = useForm({
    defaultValues,
  });

  const handleFieldClick = (fieldId: string) => setActiveFieldId(fieldId);

  return (
    <section className="flex h-[90%] flex-1 flex-col items-center text-2xl">
      <Form {...form}>
        <form className="flex w-full flex-col gap-4 p-5">
          <h1 className="text-2xl">Preview</h1>

          <div className="flex items-center gap-1 text-primary">
            <h2 className="text-base first-letter:uppercase">
              {formInfo.name}:
            </h2>
            <small className="text-sm">{formInfo.description}</small>
          </div>

          {formInfo.fields.map((formField) => (
            <div
              onClick={() => handleFieldClick(formField.id)}
              key={formField.id}
            >
              <FormField
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
            </div>
          ))}
        </form>
      </Form>
    </section>
  );
};

export default PreviewSection;
