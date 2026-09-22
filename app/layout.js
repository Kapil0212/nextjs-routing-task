import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import Providers from "./providers";
import LogoutButton from "./logout-button";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Providers>
          <header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 30px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={50}
              />
            </div>

            <nav
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Link href="/">Home</Link>

              <Link href="/products">Products</Link>

              <Link href="/dashboard">Dashboard</Link>

              {session ? (
                <LogoutButton />
              ) : (
                <Link href="/login">Login</Link>
              )}
            </nav>
          </header>

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}