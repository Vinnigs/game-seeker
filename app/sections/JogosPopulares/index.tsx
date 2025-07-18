"use client"

import CardGame from "@/app/components/shared/CardGame";
import { JogosPopularesProps } from "./types";
import GamesGrid from "@/app/components/shared/GamesGrid";
import Link from "next/link";

export default function JogosPopulares({games}: JogosPopularesProps) {

    let cardsLimit = 8

    return (
        <section className="jogos-populares">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2>Jogos Populares</h2>
                <Link href={`/games`} className="secondary-button">Ver todos</Link>
            </div>
    
            <GamesGrid 
                games={games}
                cardsPosition="vertical"
                cardsLimit={8}
            />

        </section>
    );
}