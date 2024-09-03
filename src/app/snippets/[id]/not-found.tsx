interface ISnippetNotFoundPage {
  params: {
    id: string;
  };
}

export default function SnippetNotFoundPage(props: ISnippetNotFoundPage) {
  const snippetId = props.params?.id;
  
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <h1 className="text-xl font-bold">
        404 | Sorry, but we could not find that snippet!
      </h1>
    </div>
  );
}
