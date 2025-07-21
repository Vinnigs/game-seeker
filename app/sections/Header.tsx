"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../components/shared/MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 top-0 left-0 py-[24px] w-full transition-all duration-300 ${
        isScrolled
            ? "bg-[#1f1434dc] backdrop-blur-[8px]"
            : "bg-transparent"
        }`}
    >
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
            <li><Link href="/">Início</Link></li>
            <li><Link href="/games">Lista de Jogos</Link></li>
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
