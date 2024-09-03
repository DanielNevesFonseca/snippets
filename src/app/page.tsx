import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <Link
        href={`snippets/${snippet.id}`}
        className="max-w-96 hover:bg-slate-600 hover:text-white transition flex gap-2 justify-between items-center border rounded p-3"
      >
        {snippet.title}
        <div>view</div>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="font-medium text-4xl">Snippets</h1>
        <Link className="border p-2 rounded" href="/snippets/new">
          New Snippet
        </Link>
      </div>
        {renderSnippets}
    </div>
  );
}
