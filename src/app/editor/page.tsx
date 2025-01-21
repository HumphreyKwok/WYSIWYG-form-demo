import EditingPanel from "@/components/EditingPanel";
import SignInForm from "@/components/SignInForm";
import { auth } from "@/lib/authConfig";
import { getDefaultForm } from "@/lib/getForm";

const Editor = async () => {
  const session = await auth();
  const formSchema = await getDefaultForm();

  return session && session.user ? (
    <EditingPanel formSchema={formSchema} />
  ) : (
    <SignInForm />
  );
};

export default Editor;
