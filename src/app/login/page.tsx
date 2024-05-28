"use client";

import { login } from "@/actions/session";
import { useFormState } from "react-dom";

const initialState = {
  success: false,
  error: '',
};

export default function Login() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <main>
      <h1>Login</h1>
      <p>{state.error}</p>

      <form action={formAction}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
