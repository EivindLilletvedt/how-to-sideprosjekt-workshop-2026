import Link from "next/link";
import Image from "next/image";
import BORGLogo from "@/public/BORG_Liten_Transparent.png";

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-1 items-center">
      <Link className="text-purple-300 hover:text-purple-100" href="/">
        <Image src={BORGLogo} 
          alt="BORGs logo, en sirklet borg."
          width={50}
          height={50} 
        />
      </Link>
      <Link className="text-purple-300 hover:text-purple-100" href="/prosjekter">
        Prosjekter
      </Link>
    </nav>
  );
}