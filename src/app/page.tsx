import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
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
  );
}
