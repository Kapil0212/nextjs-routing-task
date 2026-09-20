export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Product {id} details page — content coming soon!</h1>
    </main>
  );
}
