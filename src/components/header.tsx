import Link from "next/link";

export default function Header() {
 return (
   <header className="w-full h-14 backdrop:blur-lg items-center flex justify-around px-5">
<Link href='/' className="text-2xl font-bold hover:scale-105 active:scale-100 duration-300 hover:drop-shadow-md">Prime<span className="text-purple-600 font-black">Flix</span></Link>
<nav>
    <Link href='/favoritos' className="border border-zinc-100 px-4 py-2 rounded font-semibold hover:bg-purple-600 hover:border-purple-600 duration-300 ease-in-out hover:shadow-md">Meus Filmes</Link>
</nav>
   </header>
 );
}