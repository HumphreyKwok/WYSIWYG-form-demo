import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "WYSIWYG Form",
  description: "Form submission platform, with a GUI form editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen w-screen flex-col items-center justify-center">
        <ThemeProvider>
          {children}
          <footer className="fixed bottom-8 right-8">
            <ThemeToggle />
          </footer>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
