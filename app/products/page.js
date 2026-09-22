import Link from "next/link";

export default async function ProductsPage() {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {data.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>

          <p>Price: ${product.price}</p>

          <Link href={`/products/${product.id}`}>
            View Product
          </Link>
        </div>
      ))}
    </main>
  );
}