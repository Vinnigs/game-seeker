import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed z-20 top-0 left-0 py-[24px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[4px] w-full">
            <div className="container mx-auto flex flex-row justify-between">
                <Image 
                    src={"/assets/logo-GameSeeker.svg"}
                    width={201}
                    height={31}
                    alt="Logo GameSeeker"
                />

            <nav>
            <ul className="flex flex-row gap-[48px]">
                <li><a href="/">Início</a></li>
                <li><a href="/games">Lista de Jogos</a></li>
            </ul>
            </nav>
            </div>
            
        </header>
    );
}