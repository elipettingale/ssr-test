import { getCurrentUser } from "@/actions/session";

export default async function Home() {
  const user: any = await getCurrentUser();

  return (
    <>
      <h1>Home</h1>
      {user && <p>I am {user.name}</p>}
    </>
  );
}
