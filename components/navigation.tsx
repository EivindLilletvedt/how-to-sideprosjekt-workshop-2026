import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link className="text-blue-300 hover:text-blue-100" href="/">
        Hjem
      </Link>
      <Link className="text-blue-300 hover:text-blue-100" href="/prosjekter">
        Prosjekter
      </Link>
    </nav>
  );
}