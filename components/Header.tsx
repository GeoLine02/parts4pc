import Link from "next/link";
import Logo from "./Logo";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="bg-jetBlack text-warmGray font-orbitron container py-4">
      <nav className="flex items-center justify-between">
        <Logo />
        <ul className="w-full flex items-center justify-between mx-auto max-w-[900px]">
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
        <Button variant={"outline"}>
          <Button.Label>Sign In</Button.Label>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
