import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";

interface ISnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: ISnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));

  const getSnippetById = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!getSnippetById) {
    return notFound();
  }

  // CARREGA UMA NOVA FUNÇÃO COM O ID RECUPERADO DO SERVER
  const deleteSnippetAction = actions.deleteSnippet.bind(
    null,
    getSnippetById.id
  );

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-2xl font-medium">{getSnippetById.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${getSnippetById.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{getSnippetById.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
