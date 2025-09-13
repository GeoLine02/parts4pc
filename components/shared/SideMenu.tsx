"use client";

import Link from "next/link";
import { X } from "lucide-react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggleSideBar } from "@/store/features/sideBarSlice";

const SideMenu = () => {
  const { isSideBarOpen } = useSelector(
    (state: RootState) => state.SideBarReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  const sideMenuToggleStyles = classNames("hover-transition top-0 z-50 fixed", {
    "-left-100": !isSideBarOpen,
    "left-0": isSideBarOpen,
  });

  const onCloseMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div
      className={`${sideMenuToggleStyles} w-full max-w-[250px] bg-jetBlack border-r border-r-darkGray min-h-screen p-4 font-orbitron md:hidden`}
    >
      <div className="flex justify-end">
        <X
          onClick={onCloseMenu}
          className="text-warmGray hover:text-deepRed hover-transition"
          size={30}
        />
      </div>
      <div className="flex flex-col gap-4 h-full text-warmGray">
        <Link
          className="p-2 hover:bg-darkGray hover-transition"
          href={"/parts"}
        >
          PC Parts
        </Link>
        <Link
          className="p-2 hover:bg-darkGray hover-transition"
          href={"/prebuilds"}
        >
          Prebuild PC's
        </Link>
        <Link
          className="p-2 hover:bg-darkGray hover-transition"
          href={"/orders"}
        >
          Your Orders
        </Link>
        <Link className="p-2 hover:bg-darkGray hover-transition" href={"/shop"}>
          Shop
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
