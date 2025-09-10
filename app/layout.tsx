import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
