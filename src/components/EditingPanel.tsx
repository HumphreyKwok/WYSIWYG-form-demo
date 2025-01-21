import { TFormSchema } from "@/types/formSchema";
import PreviewSection from "./editor/PreviewSection";
import EditionSection from "./editor/EditingSection";

const EditingPanel = async ({ formSchema }: TFormSchema) => {
  return (
    <div className="container flex h-[85%] items-center justify-center gap-4">
      <PreviewSection formSchema={formSchema} />
      <span className="h-full border-l-[1px] border-foreground" />
      <EditionSection />
    </div>
  );
};

export default EditingPanel;
