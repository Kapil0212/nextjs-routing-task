import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../auth";
import LogoutButton from "./logout-button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Dashboard</h1>

      <p>Welcome, {session.user?.name}</p>
      <p>{session.user?.email}</p>

      <LogoutButton />
    </main>
  );
}