import PlatformList from "@/components/platform-list";


// `interface` er en måte å definere objekter/typer i TypeScript
// Her tar vi inn et objekt med en variabel `name` som er en streng
interface GreetingProps {
    name: string;
}

export default function Home() {
    return (
        <div className="min-h-screen bg-purple-900 text-gray-300 px-4">
            <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
                <PlatformList />
            </div>
        </div>
    );
}
