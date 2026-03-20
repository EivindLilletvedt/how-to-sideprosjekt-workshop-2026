import Image from "next/image";

// `interface` er en måte å definere objekter/typer i TypeScript
// Her tar vi inn et objekt med en variabel `name` som er en streng
interface GreetingProps {
    name: string;
}

export default function Home() {
    return (
        <div className="flex flex-col items-center"> {/* comment test */}
            <h1>Hallaien verden!</h1>
            
            
        </div>
    );
}
