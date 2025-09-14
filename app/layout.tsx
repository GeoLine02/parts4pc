import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Orbitron } from "next/font/google";
import SideMenu from "@/components/shared/SideMenu";
import StoreProvider from "@/providers/ReduxProvider";
const orbitron = Orbitron({
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
      <body
        className={`${orbitron.style.fontFamily} min-h-screen flex flex-col bg-jetBlack text-warmGray`}
      >
        <StoreProvider>
          <Header />
          <SideMenu />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
