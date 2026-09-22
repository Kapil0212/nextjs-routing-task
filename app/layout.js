import Image from "next/image";
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
          <Image
            src="/logo.png"
            alt="Products Store Logo"
            width={60}
            height={60}
          />

          <h1>Products Store</h1>

          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/products">Products</Link>{" "}
            <Link href="/login">Login</Link>{" "}
            <Link href="/dashboard">Dashboard</Link>
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