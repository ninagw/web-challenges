import useSWR from "swr";
import Link from "next/link";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function AllProductsPage() {
  const { data: products, isLoading } = useSWR("/api/products");

  if (!products) {
    return;
  }

  if (isLoading) {
    return <>Loading..</>;
  }

  return (
    <>
      <h1>All Products:</h1>
      <p>Click the product to get more information.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {product.price} {product.currency}
            </p>
            <p>{product.category}</p> */}

            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
