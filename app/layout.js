import Image from "next/image";
import Link from "next/link";
import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={50}
            />

            <nav>
              <Link href="/">Home</Link>{" "}
              <Link href="/products">Products</Link>{" "}
              <Link href="/login">Login</Link>{" "}
              <Link href="/dashboard">Dashboard</Link>
            </nav>
          </header>

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}