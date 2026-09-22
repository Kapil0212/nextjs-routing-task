import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import LogoutButton from "./logout-button";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header>
      <nav>
        <Link href="/">Home</Link>{" "}
        <Link href="/products">Products</Link>{" "}

        {session ? (
          <LogoutButton />
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}