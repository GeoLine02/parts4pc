"use client";

import Button from "../ui/Button";

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
        {isLoading ? "Loading..." : "Load 30 More"}
      </Button>
    </div>
  );
};

export default LoadMoreDataBtn;
