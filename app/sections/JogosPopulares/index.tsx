"use client"

import CardGame from "@/app/components/shared/CardGame";
import { JogosPopularesProps } from "./types";
import GamesGrid from "@/app/components/shared/GamesGrid";

export default function JogosPopulares({games}: JogosPopularesProps) {

    let cardsLimit = 8

    return (
        <section className="jogos-populares">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2>Jogos Populares</h2>
                <a href="" className="secondary-button">Ver todos</a>
            </div>
    
            <GamesGrid 
                games={games}
                cardsPosition="vertical"
            />

        </section>
    );
}