"use client";

import { login } from "@/actions/session";
import Button from "@/components/Button";
import Card from "@/components/Card";
import TextField from "@/components/Form/TextField";
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
      <Card>
        <h1>Login</h1>
        {error ?? <p>{error}</p>}

        <form action={handleLogin}>
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </>
  );
}
