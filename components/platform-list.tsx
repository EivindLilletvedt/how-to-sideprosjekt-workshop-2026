import Link from "next/link";

export default function PlatformList() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Platformer</h2>
      <ul className="pl-4 list-disc space-y-4">
        <li>
          <Link className="text-purple-100 hover:text-purple-300" href="http://facebook.com/groups/580435901046055/">
            <h3 className="text-lg underline">Facebook</h3>
            <p className="text-sm">På Facebook finner du nye laiver, kan melde interesse for dem og holde deg oppdatert.</p>
          </Link>
        </li>
        <li>
          <Link className="text-purple-100 hover:text-purple-300" href="https://discord.gg/ktvU5YE2Xg">
            <h3 className="text-lg underline">Discord</h3>
            <p className="text-sm">På Discord får du samme info som Facebook, det er lavere terskel for å slå av en prat og holde kontakten med våre med-laivere.</p>
          </Link>
        </li>
        <li>
          <Link className="text-purple-100 hover:text-purple-300" href="https://www.instagram.com/borgrollespill/">
            <h3 className="text-lg underline">Instagram</h3>
            <p className="text-sm">På Instagram kan du få teasere, behind-the-scenes arbeid på laiver og andre sporadiske innlegg.</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}