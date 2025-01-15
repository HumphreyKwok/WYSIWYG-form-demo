import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <Card>
          <CardHeader>
            <CardHeader>My Form</CardHeader>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input />
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </main>
      <footer className="self-end p-8">
        <ThemeToggle />
      </footer>
    </>
  );
}
