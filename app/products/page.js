import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../auth";

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

  const data = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {data.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </main>
  );
}