import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-center text-5xl m-5 p-5">Hello World</h1>
        <Link href={"/todos"}>
        <h1 className="font-bold text-center text-5xl m-5 p-5">Todos</h1>
        </Link>
      </div>
    </>
  );
}
