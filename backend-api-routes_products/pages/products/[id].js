import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(`/api/products/${id}`);

  if (!product) {
    return <>Product not found.</>;
  }

  if (isLoading) {
    return <>Loading..</>;
  }

  return (
    <>
      <ul>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>
          {product.price} {product.currency}
        </p>
        <p>{product.category}</p>
      </ul>
    </>
  );
}
