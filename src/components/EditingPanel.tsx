"use client";

import { useState } from "react";

import { TFormSchema } from "@/types/formSchema";
import PreviewSection from "./editor/PreviewSection";
import EditionSection from "./editor/EditingSection";

const EditingPanel = ({ formInfo }: { formInfo: TFormSchema }) => {
  const [activeFieldId, setActiveFieldId] = useState<string | null>(null);

  return (
    <div className="container flex h-[85%] items-center justify-center gap-4">
      <PreviewSection formInfo={formInfo} setActiveFieldId={setActiveFieldId} />
      <span className="h-full border-l-[1px] border-foreground" />
      <EditionSection formInfo={formInfo} activeFieldId={activeFieldId} />
    </div>
  );
};

export default EditingPanel;
