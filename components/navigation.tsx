import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-2">
      <Link className="text-purple-300 hover:text-purple-100" href="/">
        Hjem
      </Link>
      <Link className="text-purple-300 hover:text-purple-100" href="/prosjekter">
        Prosjekter
      </Link>
    </nav>
  );
}