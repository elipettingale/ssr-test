import { getCurrentUser } from "@/actions/session";
import { User } from "@/lib/types";

export default async function Home() {
  const user: User = await getCurrentUser();

  return (
    <>
      <h1>Home</h1>
      {user && <p>I am {user.name}</p>}
    </>
  );
}
