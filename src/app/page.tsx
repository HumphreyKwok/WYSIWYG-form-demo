import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import MainForm from "@/components/MainForm";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <Card>
          <CardHeader>
            <CardHeader>Welcome</CardHeader>
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
