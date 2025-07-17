import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row justify-between">
            <Image 
            src={"assets/logo-GameSeeker.svg"}
            width={201}
            height={31}
            alt="Logo GameSeeker"
            />

            <nav>
            <ul className="flex flex-row gap-[48px]">
                <li><a href="">Início</a></li>
                <li><a href="">Lista de Jogos</a></li>
            </ul>
            </nav>
        </header>
    );
}