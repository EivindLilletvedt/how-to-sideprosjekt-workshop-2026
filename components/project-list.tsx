export default function ProjectList() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Prosjekter</h2>
      <ul className="pl-4 list-disc space-y-4">
        <li>
          <h3 className="text-lg">Tro og Troner</h3>
          <p className="text-sm">Laivserie i et Game of Thrones-inspirert univers.</p>
        </li>
        <li>
          <h3 className="text-lg">Høyborg</h3>
          <p className="text-sm">Laivserie i et høyfantasi, middelalder univers. 
            Inspirert av univers som Elder Scrolls, Lord of The Rings, World of Warcraft og alt det gode fra fantasy.</p>
        </li>
        <li>
          <h3 className="text-lg">Arcane College</h3>
          <p className="text-sm">Urban mørk fantasy?? Info kommer!</p>
        </li>
      </ul>
    </div>
  );
}