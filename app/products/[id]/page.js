export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await response.json();

  return (
    <div>
      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}