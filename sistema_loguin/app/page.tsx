import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center p-24">
      <h1 className=" text-xl font-bold"> Homepage do Site</h1>
      <hr />
      <nav className=" mt-6 gap-6 justify-between flex">
        <Link className="text-blue-500" href="/portal">
          Acesse o portal
        </Link>
        <Link className="text-blue-500" href="/portal/cadastro">
          Crie uma conta
        </Link>
      </nav>
    </main>
  );
}
