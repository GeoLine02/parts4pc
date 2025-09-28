import Button from "@/components/ui/Button";
import classNames from "classnames";
import Link from "next/link";

interface ProductOwnerCardProps {
  owenrStatus: string;
  firstName: string;
  lastName: string;
}

const ProductOwnerCard = ({
  firstName,
  lastName,
  owenrStatus,
}: ProductOwnerCardProps) => {
  const statusStyles = classNames(
    "px-4 py-0.5 text-warmGray inline-block rounded-full font-orbitron",
    {
      "bg-darkGray": owenrStatus === "member",
      "bg-crimsonRed": owenrStatus === "vip",
    }
  );

  return (
    <div className="bg-darkGray rounded-md p-4  flex gap-4 max-w-[480px]">
      <div className="min-w-20 aspect-square rounded-full bg-jetBlack border-2 border-deepRed"></div>
      <div className="flex justify-between items-center w-full">
        <div className="space-y-2">
          <h1 className="text-xl text-warmGray">
            {firstName} {lastName}
          </h1>
          <span className={statusStyles}>{owenrStatus}</span>
        </div>
        <Link href={"/"}>
          <Button>Visit Market</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductOwnerCard;
