import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../auth";

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse our products",
};

export default async function ProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const response = await fetch("https://dummyjson.com/products", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    return <h1>Failed to load products</h1>;
  }

  const data = await response.json();

  return (
    <main style={{ padding: "30px" }}>
      <h1>Products Store</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {data.products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              width="200"
              height="200"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
              }}
            />

            <h2>{product.title}</h2>

            <p>${product.price}</p>

            <Link href={`/products/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}