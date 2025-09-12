import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Orbitron } from "next/font/google";
export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Parts4PC",
  description:
    "Parts4PC is is online store that sells used and new pc parts and accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-screen flex flex-col bg-jetBlack">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
