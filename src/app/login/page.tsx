"use client";

import { login } from "@/actions/session";
import useAuth from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const [user, setUser] = useAuth();
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
    <>
      <h1>Login</h1>
      {error ?? <p>{error}</p>}

      <form action={handleLogin}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
