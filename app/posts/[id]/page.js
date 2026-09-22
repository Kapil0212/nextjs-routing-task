import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Post ${id} - My Blog`,
    description: `Read Post ${id} from My Blog`,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Post {id}</h1>

      <p>
        This is the content of Post {id}.
      </p>

      <Link href="/">← Back to Home</Link>
    </main>
  );
}