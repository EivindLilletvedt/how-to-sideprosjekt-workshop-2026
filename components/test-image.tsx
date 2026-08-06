import Image from "next/image";
import ToT_skjold from "@/public/ToT_skjold.png";

export default function TestImage() {
    return (
        <Image src={ToT_skjold} 
                alt="Våpenskjold fra Tro og Troner."/>
    );
}