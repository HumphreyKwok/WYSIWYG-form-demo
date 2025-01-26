import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { TFormSchema } from "@/types/formSchema";

const FieldCreator = ({
  updateFormInfo,
}: {
  updateFormInfo: React.Dispatch<React.SetStateAction<TFormSchema>>;
}) => {
  const [newField, setNewField] = useState<{
    label: string;
    placeholder: string;
    description: string | null;
    type: "Input" | "Email" | "Textarea" | "Checkbox" | "Radio" | "DatePicker";
  }>({
    label: "",
    type: "Input",
    description: "",
    placeholder: "",
  });

  const handleInputChange = (key: keyof typeof newField, value: string) => {
    setNewField((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCreate = () => {
    if (!newField.label) {
      return; // Don't create field without a label
    }

    updateFormInfo((prev) => ({
      ...prev,
      fields: [
        ...prev.fields,
        {
          id: Math.ceil(Math.random() * 100).toString(),
          name: newField.label.toLowerCase().replace(/\s+/g, "_"), // Convert label to field name
          ...newField,
        },
      ],
    }));

    // Reset form after creation
    setNewField({
      label: "",
      type: "Input",
      description: "",
      placeholder: "",
    });
  };

  return (
    <div className="flex flex-col gap-3 p-1">
      <p>Field Name:</p>
      <Input
        placeholder="Enter field name..."
        value={newField.label}
        onChange={(e) => handleInputChange("label", e.target.value)}
      />

      <p>Field Type:</p>
      <Select
        value={newField.type}
        onValueChange={(value) => handleInputChange("type", value)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Input">Input</SelectItem>
          <SelectItem value="Email">Email</SelectItem>
          <SelectItem value="Textarea">Textarea</SelectItem>
          <SelectItem value="Checkbox">Checkbox</SelectItem>
          <SelectItem value="Radio">Radio</SelectItem>
          <SelectItem value="DatePicker">DatePicker</SelectItem>
        </SelectContent>
      </Select>

      <p>Field Description:</p>
      <Input
        placeholder="Enter field description..."
        value={newField.description || ""}
        onChange={(e) => handleInputChange("description", e.target.value)}
      />

      <p>Field Placeholder:</p>
      <Input
        placeholder="Enter field placeholder..."
        value={newField.placeholder}
        onChange={(e) => handleInputChange("placeholder", e.target.value)}
      />

      <Button
        onClick={handleCreate}
        disabled={!newField.label}
        className="mt-2"
      >
        Create Field
      </Button>
    </div>
  );
};

export default FieldCreator;
