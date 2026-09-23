import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../auth";

async function getProduct(id) {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found - Products Store",
    };
  }

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
        height="300"
        style={{ objectFit: "contain" }}
      />

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <p>
        <strong>Category:</strong> {product.category}
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