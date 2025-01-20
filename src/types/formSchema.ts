export type TFormSchema = {
  formSchema: {
    fields: {
      id: string;
      description: string | null;
      createdAt: Date;
      updatedAt: Date;
      name: string;
      type:
        | "Input"
        | "Email"
        | "Textarea"
        | "Checkbox"
        | "Radio"
        | "DatePicker";
      label: string;
      placeholder: string;
      options: string[];
      required: boolean;
      minLength: number | null;
      maxLength: number | null;
      formId: number;
    }[];
    id: number;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};
