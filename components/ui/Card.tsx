import { cn } from "@/utils/cn";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "p-2 md:p-4 rounded-md bg-darkGray",
        className && className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
