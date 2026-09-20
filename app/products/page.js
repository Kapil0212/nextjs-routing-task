import Link from "next/link";

export default function ProductsPage() {
  return (
    <main>
      <h1>Products Page</h1>
      <p>Browse our products below:</p>

      <ul>
        {Array.from({ length: 10 }, (_, index) => {
          const id = index + 1;

          return (
            <li key={id}>
              <Link href={`/products/${id}`}>Product {id}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
