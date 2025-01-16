import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import MainForm from "@/components/MainForm";

export default function Home() {
  return (
    <>
      <main className="container flex flex-1 flex-col items-center justify-center">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <MainForm />
          </CardContent>
        </Card>
      </main>
      <footer className="self-end p-8">
        <ThemeToggle />
      </footer>
    </>
  );
}
