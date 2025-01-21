"use client";

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

import SignOutButtuon from "@/components/SignOutButton";
import { useEffect, useRef, useState } from "react";

import { TFormSchema } from "@/types/formSchema";

const EditionSection = ({
  formInfo,
  activeFieldId,
}: {
  formInfo: TFormSchema;
  activeFieldId: string | null;
}) => {
  const editTiggerRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFieldInfo, setActiveFieldInfo] = useState(formInfo.fields[0]);

  const [fieldName, setFieldName] = useState(activeFieldInfo.label);
  const [fieldType, setFieldType] = useState(activeFieldInfo.type);
  const [fieldDescription, setFieldDescription] = useState(
    activeFieldInfo.description,
  );
  const [fieldPlaceholder, setFieldPlaceholder] = useState(
    activeFieldInfo.placeholder,
  );

  useEffect(() => {
    if (activeFieldId) {
      const newActiveFieldInfo = formInfo.fields.filter(
        (field) => field.id === activeFieldId,
      )[0];

      setActiveFieldInfo(
        formInfo.fields.filter((field) => field.id === activeFieldId)[0],
      );

      setFieldName(newActiveFieldInfo.label);
      setFieldType(newActiveFieldInfo.type);
      setFieldDescription(newActiveFieldInfo.description);
      setFieldPlaceholder(newActiveFieldInfo.placeholder);
    }

    if (isOpen) {
      return;
    }

    if (editTiggerRef.current && activeFieldId) {
      editTiggerRef.current.click();
      setIsOpen(true);
    }
  }, [activeFieldId]);

  console.log(fieldType);

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
            <AccordionContent>Create placeholder...</AccordionContent>
          </AccordionItem>
          <AccordionItem value="edit">
            <AccordionTrigger
              ref={editTiggerRef}
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
            >
              Edit a existing field...
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2 p-1">
                <p>Field Name:</p>
                <Input
                  placeholder="field name..."
                  value={fieldName}
                  onChange={(event) => setFieldName(event.target.value)}
                />
                <p>Field Type:</p>
                <Select defaultValue={fieldType}>
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
                  value={fieldDescription || ""}
                  onChange={(event) => setFieldDescription(event.target.value)}
                />
                <p>Field Placeholder:</p>
                <Input
                  placeholder="field placeholder"
                  value={fieldPlaceholder}
                  onChange={(event) => setFieldPlaceholder(event.target.value)}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default EditionSection;
