// PRECISA SER 'USE CLIENT'
"use client";

interface IErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: IErrorPageProps) {
  return <div>{error.message}</div>;
}
