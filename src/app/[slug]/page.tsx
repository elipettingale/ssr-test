import { mongoConnect } from "@/lib/database";
import Entries from "@/models/Entries";

export default async function Slug() {
  await mongoConnect();
  const entries = await Entries.find({});

  return (
    <main>
      <h2>Slug</h2>
      <div>
        {entries.map((entry: any) => (
            <p key={entry._id}>{entry.foo}</p>
        ))}
      </div>
    </main>
  );
}
