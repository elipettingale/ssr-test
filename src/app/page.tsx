'use client'

import useAuth from "@/lib/hooks/useAuth";

export default function Home() {
  const [user, setUser] = useAuth();

  return (
    <main>
      <h1>Home</h1>
      {user && <p>I am {user.name}</p>}
    </main>
  );
}
