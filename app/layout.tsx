import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panda Experiment",
  description: "testing the new style library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
