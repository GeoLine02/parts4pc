import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Orbitron } from "next/font/google";
import SideMenu from "@/components/shared/SideMenu";
import StoreProvider from "@/providers/ReduxProvider";
import { getAuthUser } from "@/utils/getAuthUser";
import { UserProvider } from "@/providers/UserProvicer";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Parts4PC",
  description:
    "Parts4PC is is online store that sells used and new pc parts and accessories",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData = await getAuthUser();
  return (
    <html lang="en">
      <body
        className={`${orbitron.style.fontFamily} min-h-screen flex flex-col bg-jetBlack text-warmGray`}
      >
        <StoreProvider>
          <UserProvider userData={userData ? userData.user : null}>
            <Header />
            <SideMenu />
            <main>{children}</main>
          </UserProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
