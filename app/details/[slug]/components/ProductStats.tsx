interface ProductStatsProps {
  productDescription: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

const ProductStats = ({
  productDescription,
  productName,
  productPrice,
  productQuantity,
}: ProductStatsProps) => {
  return (
    <div className="space-y-2">
      <h1 className="text-xl md:text-3xl font-orbitron text-deepRed">
        Product: {productName}
      </h1>
      <h2 className=" font-orbitron">Descriton: {productDescription}</h2>
      <h2 className="text-sm md:text-xl font-orbitron">
        In Stock: {productQuantity}
      </h2>
      <h1 className="text-sm md:text-2xl font-orbitron text-deepRed">
        {productPrice} GEL
      </h1>
    </div>
  );
};

export default ProductStats;
