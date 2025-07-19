"use client"

import { JogosPopularesProps } from "./types";
import GamesGrid from "@/app/components/shared/GamesGrid";
import Link from "next/link";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function JogosPopulares({games}: JogosPopularesProps) {

    const isMobile = useIsMobile();

    return (
        <section className="relative">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2 className="grey">Jogos Populares</h2>
                <Link href={`/games`} className="secondary-button !hidden lg:!flex">
                    Ver tudo
                </Link>
            </div>
    
            
            <GamesGrid 
                games={games}
                cardsPosition={isMobile ? "horizontal" : "vertical"}
                cardsLimit={8}
            />
            <div className='absolute left-1/2 -translate-x-1/2 bottom-[-140px] w-screen h-full bg-cover bg-center bg-no-repeat bg-[url("/assets/bg-games-populares.jpg")] -z-10' />

            <div className="mt-[32px] flex justify-start lg:hidden">
                <Link href={`/games`} className="secondary-button">
                    Ver tudo
                </Link>
            </div>

        </section>
    );
}