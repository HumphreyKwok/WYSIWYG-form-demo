import FieldCreator from "@/components/editor/FieldCreator";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SignOutButtuon from "@/components/SignOutButton";
import { TFormSchema } from "@/types/formSchema";

const EditionSection = ({
  formInfo,
  activeFieldId,
  updateFormInfo,
}: {
  formInfo: TFormSchema;
  activeFieldId: string | null;
  updateFormInfo: React.Dispatch<React.SetStateAction<TFormSchema>>;
}) => {
  const editTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editingField, setEditingField] = useState(formInfo.fields[0]);

  useEffect(() => {
    if (activeFieldId) {
      const field = formInfo.fields.find((field) => field.id === activeFieldId);
      if (field) {
        setEditingField(field);
      }
    }

    if (!isOpen && editTriggerRef.current && activeFieldId) {
      editTriggerRef.current.click();
      setIsOpen(true);
    }
  }, [activeFieldId, formInfo.fields]);

  const handleInputChange = (key: keyof typeof editingField, value: string) => {
    setEditingField((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleUpdate = () => {
    updateFormInfo((prev) => ({
      ...prev,
      fields: prev.fields.map((field) =>
        field.id === editingField.id ? editingField : field,
      ),
    }));
  };

  return (
    <section className="flex h-[90%] w-1/4 flex-col gap-2 p-2">
      <header className="flex h-10 items-center justify-between">
        <p>Welcome</p>
        <SignOutButtuon />
      </header>
      <div className="flex h-full w-full flex-1 items-center justify-center text-2xl">
        <Accordion type="single" collapsible className="h-full w-full">
          <AccordionItem
            value="create"
            onClick={() => {
              isOpen && setIsOpen(false);
            }}
          >
            <AccordionTrigger>Create a new field...</AccordionTrigger>
            <AccordionContent>
              <FieldCreator updateFormInfo={updateFormInfo} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="edit">
            <AccordionTrigger
              ref={editTriggerRef}
              onClick={() => setIsOpen(!isOpen)}
            >
              Edit a existing field...
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3 p-1">
                <p>Field Name:</p>
                <Input
                  placeholder="field name..."
                  value={editingField.label}
                  onChange={(e) => handleInputChange("label", e.target.value)}
                />
                <p>Field Type:</p>
                <Select
                  value={editingField.type}
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
                  placeholder="field description..."
                  value={editingField.description || ""}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
                <p>Field Placeholder:</p>
                <Input
                  placeholder="field placeholder"
                  value={editingField.placeholder}
                  onChange={(e) =>
                    handleInputChange("placeholder", e.target.value)
                  }
                />
                <Button onClick={handleUpdate}>Update</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default EditionSection;
