import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "../../../auth";

export default async function ProductDetailsPage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    return <h1>Product not found</h1>;
  }

  const product = await response.json();

  return (
    <main style={{ padding: "30px" }}>
      <Link href="/products">← Back to Products</Link>

      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />

      <p>{product.description}</p>

      <h2>${product.price}</h2>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Brand:</strong> {product.brand}
      </p>

      <p>
        <strong>Rating:</strong> {product.rating}
      </p>

      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
    </main>
  );
}