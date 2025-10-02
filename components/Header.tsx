"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./ui/Button";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "@/store/features/sideBarSlice";
import { usePathname } from "next/navigation";

const Header = () => {
  const token = false; // replace with real auth state
  const dispatch = useDispatch();
  const pathName = usePathname();

  const onOpenMenu = () => {
    dispatch(toggleSideBar());
  };

  // hide header on auth pages
  if (pathName.includes("signin") || pathName.includes("signup")) {
    return null;
  }

  return (
    <header className="bg-jetBlack text-warmGray font-orbitron w-full px-4 py-3 shadow-md">
      <nav className="flex items-center justify-between container mx-auto relative">
        {/* Left (Menu button only on mobile) */}
        <div className="md:hidden">
          <Menu
            onClick={onOpenMenu}
            className="hover:text-crimsonRed cursor-pointer"
            size={28}
          />
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Logo />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm xl:text-base font-medium mx-auto">
          <Link
            className={`${
              pathName.includes("/pc-parts") && "text-crimsonRed"
            } hover:text-deepRed hover-transition`}
            href="/pc-parts"
          >
            PC Parts
          </Link>
          <Link
            className={`${
              pathName.includes("/prebuilds") && "text-crimsonRed"
            } hover:text-deepRed hover-transition`}
            href="/prebuilds"
          >
            Prebuilt PCs
          </Link>
          <Link
            className={`${
              pathName.includes("/wishlist") && "text-crimsonRed"
            } hover:text-deepRed hover-transition`}
            href="/wishlist"
          >
            Wishlist
          </Link>
          <Link
            className={`${
              pathName.includes("/your-orders") && "text-crimsonRed"
            } hover:text-deepRed hover-transition`}
            href="/your-orders"
          >
            Your Orders
          </Link>
          <Link
            className={`${
              pathName.includes("/shop") && "text-crimsonRed"
            } hover:text-deepRed hover-transition`}
            href="/shop"
          >
            Shop
          </Link>
        </ul>

        {/* Right (Sign in / Profile) */}
        <div className="hidden md:block">
          {!token ? (
            <Link href="/signin">
              <Button variant="primary">Sign in</Button>
            </Link>
          ) : (
            <Link href="/profile">
              <Button variant="secondary">Profile</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
