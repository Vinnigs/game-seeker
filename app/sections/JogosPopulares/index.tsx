"use client"

import CardGame from "@/app/components/shared/CardGame";
import { JogosPopularesProps } from "./types";
import GamesGrid from "@/app/components/shared/GamesGrid";
import Link from "next/link";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function JogosPopulares({games}: JogosPopularesProps) {

    const isMobile = useIsMobile();

    let cardsLimit = 8

    return (
        <section className="">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2>Jogos Populares</h2>
                <Link href={`/games`} className="!hidden lg:!flex secondary-button">Ver todos</Link>
            </div>
    
            <GamesGrid 
                games={games}
                cardsPosition={isMobile ? "horizontal" : "vertical"}
                cardsLimit={8}
            />

            <div className="mt-[32px] flex justify-start lg:hidden">
                <Link href={`/games`} className="secondary-button">
                Ver todos
                </Link>
            </div>

        </section>
    );
}