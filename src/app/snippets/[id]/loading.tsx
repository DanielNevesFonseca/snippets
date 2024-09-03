import Image from "next/image";

export default function SnippetLoadingPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Image
      
        src="/loading.gif"
        alt="carregando..."
        width={150}
        height={150}
      />
    </div>
  );
}
