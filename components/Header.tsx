"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./ui/Button";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "@/store/features/sideBarSlice";
import { usePathname } from "next/navigation";

const Header = () => {
  const token = true;
  const dispatch = useDispatch();
  const pathName = usePathname();

  const onOpenMenu = () => {
    dispatch(toggleSideBar());
  };

  if (pathName.includes("signin") || pathName.includes("signup")) {
    return null;
  }

  return (
    <header className="bg-jetBlack text-warmGray font-orbitron container py-4 w-[75%] !mx-0 md:w-full md:!mx-auto px-4">
      <nav className="flex items-center justify-between w-full">
        <div className="md:hidden">
          <Menu onClick={onOpenMenu} className="hover:text-deepRed" size={25} />
        </div>
        <Logo />
        <ul className="w-full hidden items-center justify-between mx-auto max-w-[900px] md:flex">
          <Link
            className={`${
              pathName.includes("/pc-parts") && "text-crimsonRed"
            } hover-transition hover:text-deepRed`}
            href={"/pc-parts"}
          >
            PC Parts
          </Link>
          <Link
            className={`${
              pathName.includes("/prebuilds") && "text-crimsonRed"
            } hover-transition hover:text-deepRed`}
            href={"/prebuilds"}
          >
            Prebuild PC&apos;s
          </Link>
          <Link
            className={`${
              pathName.includes("/your-orders") && "text-crimsonRed"
            } hover-transition hover:text-deepRed`}
            href={"/your-orders"}
          >
            Your Orders
          </Link>
          <Link
            className={`${
              pathName.includes("/shop") && "text-crimsonRed"
            } hover-transition hover:text-deepRed`}
            href={"/shop"}
          >
            Shop
          </Link>
        </ul>
        {token && (
          <Link href="/signin">
            <Button className="hidden md:block" variant="primary">
              Sign in
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
