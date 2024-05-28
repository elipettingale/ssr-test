"use client";

import { login } from "@/actions/session";
import useUser from "@/lib/hooks/useUser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const [user, setUser] = useUser();
  const router = useRouter();

  const handleLogin = async (data: FormData) => {
    let result = await login(data);

    if (result.success === false) {
      return setError(
        result.error ?? "Something went wrong, please try again."
      );
    }

    setUser(result.user);
    router.push('/');
  };

  return (
    <main>
      <h1>Login</h1>
      {error ?? <p>{error}</p>}

      <form action={handleLogin}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
