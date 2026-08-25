import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raising CO Kids — Prototype",
  description:
    "Clickable web prototype of the Colorado UFE/UFA Family Experience from Figma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-page text-foreground">{children}</body>
    </html>
  );
}
