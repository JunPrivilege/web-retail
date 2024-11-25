import { useRouteLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Breadcrumb from "../components/Breadcrumb";

function ProductDetailPage() {
  const data = useRouteLoaderData("product-detail");

  return (
    <div>
      <Breadcrumb />
      <ProductItem
        products={[data]}
        title={data.title}
        id={data.id}
        category={data.category}
        image={data.image}
        price={data.price}
      />
    </div>
  );
}

export default ProductDetailPage;

export async function loader({ params }) {
  const id = params.productId;
  const response = await fetch("https://fakestoreapi.com/products/" + id);

  if (!response.ok) {
    throw new Error("Could Not Fetch Data.");
  } else {
    return response;
  }
}
