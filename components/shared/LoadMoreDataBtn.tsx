"use client";

import Button from "../ui/Button";
import { ClipLoader } from "react-spinners";
interface LoadMoreDataBtnProps {
  fetchMoreProducts: () => Promise<void>;
  isLoading: boolean;
}

const LoadMoreDataBtn = ({
  fetchMoreProducts,
  isLoading,
}: LoadMoreDataBtnProps) => {
  return (
    <div className="flex justify-center mt-6">
      <Button onClick={fetchMoreProducts} variant="primary">
        {isLoading ? <ClipLoader /> : "Load More Products"}
      </Button>
    </div>
  );
};

export default LoadMoreDataBtn;
