import { ProductDetailsType } from "@/types/product";
import AddToFavoritesBtn from "./components/AddToFavoritesBtn";
import ProductImages from "./components/ProductImages";
import ProductStats from "./components/ProductStats";
import SimilarProducts from "./components/SimilarProducts";
import { fetchProductById } from "./services/productById";
import { fetchSimilarProducts } from "./services/similarProducts";

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const slug = (await params).slug;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, id] = slug.split("-");

  const productByIdData: ProductDetailsType = await fetchProductById(
    parseInt(id)
  );
  const similarProductsData = await fetchSimilarProducts(
    productByIdData.productCategoryId
  );
  return (
    <div className="container justify-center flex flex-col gap-6 md:gap-11">
      <div className="flex flex-col md:flex-row gap-11">
        <ProductImages />
        <div>
          <ProductStats
            productName={productByIdData.productName}
            productDescription={productByIdData.productDescription}
            productPrice={productByIdData.productPrice}
            productQuantity={productByIdData.productQuantity}
          />
          <AddToFavoritesBtn />
        </div>
      </div>
      <SimilarProducts similarProducts={similarProductsData} />
    </div>
  );
};

export default ProductDetails;
