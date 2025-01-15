import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "WYSIWYG Form",
  description: "From submission platform, with a GUI form editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen w-screen flex-col items-center justify-center">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
