import EditingPanel from "@/components/EditingPanel";
import SignInForm from "@/components/SignInForm";
import { auth } from "@/lib/authConfig";

const Editor = async () => {
  const session = await auth();

  return session && session.user ? <EditingPanel /> : <SignInForm />;
};

export default Editor;
