import type { Metadata } from "next";
import "./globals.css";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Pauline_24 | Portfolio",
  description: "Designer & developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}