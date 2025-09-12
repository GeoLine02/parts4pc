import Link from "next/link";

const Logo = () => {
  return (
    <Link className="text-4xl" href={"/"}>
      <span className="text-warmGray">Parts</span>
      <span className="text-crimsonRed">4</span>
      <span className="text-warmGray">PC</span>
    </Link>
  );
};

export default Logo;
