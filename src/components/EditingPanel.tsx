import { getForm } from "@/lib/getForm";
import SignOutButtuon from "./SignOutButton";
import PreviewSection from "./editor/Preview";

const EditingPanel = async () => {
  const formSchema = await getForm();

  return (
    <div className="container flex h-[85%] items-center justify-center gap-4">
      <section className="flex h-[90%] flex-1 flex-col items-center text-2xl">
        <PreviewSection formSchema={formSchema} />
      </section>
      <span className="h-full border-l-[1px] border-foreground" />
      <section className="flex h-[90%] w-1/4 flex-col">
        <header className="flex h-10 items-center justify-between p-4">
          <p>Welcome</p>
          <SignOutButtuon />
        </header>
        <div className="flex flex-1 items-center justify-center text-2xl">
          Editor
        </div>
      </section>
    </div>
  );
};

export default EditingPanel;
