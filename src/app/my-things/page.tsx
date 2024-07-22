import { getCurrentUser } from "@/actions/session";
import { User } from "@/lib/types";
import { notFound } from "next/navigation";
import MyThings from "@/components/MyThings";

export default async function Home() {
  const user: User = await getCurrentUser();

  if (!user) {
    notFound();
  }

  return (
    <>
      <h1>Hello {user.name}!</h1>
      <MyThings user={user} />
    </>
  );
}
