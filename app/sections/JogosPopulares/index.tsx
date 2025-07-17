"use client"

import CardGame from "@/app/components/shared/CardGame";
import { JogosPopularesProps } from "./types";

export default function JogosPopulares({games}: JogosPopularesProps) {

    let cardsLimit = 8

    return (
        <section className="jogos-populares">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2>Jogos Populares</h2>
                <a href="" className="secondary-button">Ver todos</a>
            </div>
    
            <div className="grid grid-cols-4 gap-[30px]">
            
            {games.slice(0, cardsLimit).map((game) => {
                return (
                    <CardGame 
                        key={game.id}
                        date={game.release_date}
                        genre={game.genre}
                        image={game.thumbnail}
                        platform={game.platform}
                        title={game.title}
                        position="vertical"
                    />
                )
            })}
            
                
                
                
            </div>
            </section>
    );
}