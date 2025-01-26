export type TFormSchema = {
  id: number;
  name: string;
  description: string | null;
  fields: {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    description: string | null;
    type: "Input" | "Email" | "Textarea" | "Checkbox" | "Radio" | "DatePicker";
    // options: string[];
    // required: boolean;
    // minLength: number | null;
    // maxLength: number | null;
    // formId: number;
    // createdAt: Date;
    // updatedAt: Date;
  }[];
  // createdAt: Date;
  // updatedAt: Date;
};
