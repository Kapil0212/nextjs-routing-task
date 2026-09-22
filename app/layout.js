import Link from "next/link";

export const metadata = {
  title: "Products Store",
  description: "Products Store Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Products Store</h1>

          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/products">Products</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2026 Products Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}