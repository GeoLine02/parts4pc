"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./ui/Button";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "@/store/features/sideBarSlice";

const Header = () => {
  const token = true;
  const dispatch = useDispatch();

  const onOpenMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <header className="bg-jetBlack text-warmGray font-orbitron container py-4 w-[75%] !mx-0 md:w-full md:!mx-auto px-4">
      <nav className="flex items-center justify-between w-full">
        <div className="md:hidden">
          <Menu onClick={onOpenMenu} className="hover:text-deepRed" size={25} />
        </div>
        <Logo />
        <ul className="w-full hidden items-center justify-between mx-auto max-w-[900px] md:flex">
          <Link className="hover-transition hover:text-deepRed" href={"/parts"}>
            PC Parts
          </Link>
          <Link
            className="hover-transition hover:text-deepRed"
            href={"/prebuilds"}
          >
            Prebuild PC&apos;s
          </Link>
          <Link
            className="hover-transition hover:text-deepRed"
            href={"/your-orders"}
          >
            Your Orders
          </Link>
          <Link className="hover-transition hover:text-deepRed" href={"/shop"}>
            Shop
          </Link>
        </ul>
        {token && (
          <Button className="hidden md:block" variant="primary">
            Sign in
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
