import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed z-20 top-0 left-0  py-[24px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[4px] w-full">
            <div className="container px-5 mx-auto flex flex-row items-center justify-between">
                <Link href={"/"}>
                    <Image 
                        src={"/assets/logo-GameSeeker.svg"}
                        width={201}
                        height={31}
                        alt="Logo GameSeeker"
                        className="w-[110px] lg:w-[150px]"
                    />
                </Link>

                <nav className="hidden lg:block">
                    <ul className="flex flex-row gap-[48px]">
                        <li><a href="/">Início</a></li>
                        <li><a href="/games">Lista de Jogos</a></li>
                    </ul>
                </nav>
                <Icon 
                    icon={"lucide:menu"}
                    className="block lg:hidden size-[28px]"
                />
            </div>
            
        </header>
    );
}