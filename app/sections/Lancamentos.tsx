"use client"

import Image from "next/image";

export default function Lancamentos() {
    return (
    <section className="mt-[100px]">
        <h3 className="mb-[32px]">Lançamentos</h3>

        <a 
            href="#"
            className="relative w-full h-[500px] max-h-[500px] px-[100px] flex flex-row items-center rounded-[8px] bg-[url('/assets/bg-pubg.jpg')] bg-cover bg-right bg-no-repeat"
        >
            <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#191825_2.19%,rgba(25,24,37,0.81)_33.25%,rgba(25,24,37,0)_101.6%)]" />

            <div className="relative z-10 max-w-[400px]">
            <h2>NeonRush</h2>
            <p>Tiro</p>

            <p className="mt-[32px]">
                Immerse yourself in a neon-soaked cyberpunk world, battling rogue AI and hackers in this action-packed adventure.
            </p>

            <div className="flex flex-row justify-between mt-[14px] px-[24px] py-[10px] bg-[rgba(141,120,233,0.60)] rounded-[4px]">
                <Image 
                    src={"/assets/windows-brand.svg"}
                    width={22}
                    height={24}
                    alt="Plataforma do jogo"
                />

                <div className="flex flex-col items-end">
                    <p className="small">Lançamento</p>
                    <p className="small grey">{"10 de março, 2025"}</p>
                </div>
            </div>
            </div>

        </a>
    </section>
    );
}