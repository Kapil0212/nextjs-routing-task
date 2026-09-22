"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async () => {
    await signIn("github", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Continue with GitHub
      </button>
    </main>
  );
}