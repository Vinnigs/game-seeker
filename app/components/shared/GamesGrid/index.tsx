"use client"

import { useState } from "react";
import CardGame from "../CardGame";
import { GamesGridProps } from "./types";
import { Pagination } from "@mui/material";
import { paginationStyles } from "@/styles/paginationStyles";

export default function GamesGrid({
    games,
    pagination,
    cardsPosition,
    cardsLimit
}: GamesGridProps) {
    
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = cardsLimit;

    const pageCount = Math.ceil(games.length / Number(itemsPerPage));
    const start = (page - 1) * Number(itemsPerPage);
    const end = start + Number(itemsPerPage);

    return (
        <>
            {pagination ? (
                <>
                    <div className={`w-full ${
                        cardsPosition === "vertical"
                        ? "grid grid-cols-2 lg:grid-cols-4 gap-[24px]"
                        : "flex flex-col gap-[8px]"
                    }`}>
                        {games.slice(start, end).map((game) => (
                            <CardGame
                                gameId={game.id}
                                key={game.id}
                                date={game.release_date}
                                genre={game.genre}
                                image={game.thumbnail}
                                platform={game.platform}
                                title={game.title}
                                position={cardsPosition}
                            />
                        ))}
                    </div>
                    <div className="w-full mt-[40px] mb-[10px] flex justify-center items-center">
                        <Pagination 
                            count={pageCount}
                            page={page}
                            onChange={(_e, value) => setPage(value)}
                            sx={paginationStyles}
                        />
                    </div>
                </>
            ) : (
                <div 
                    className={cardsPosition == "vertical" ? "grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[24px]" : "flex flex-col gap-[8px]"}
                >
                    {games.slice(0, cardsLimit).map((game) => {
                        return (
                            <CardGame
                                gameId={game.id}
                                key={game.id}
                                date={game.release_date}
                                genre={game.genre}
                                image={game.thumbnail}
                                platform={game.platform}
                                title={game.title}
                                position={cardsPosition}
                            />
                        )
                    })}
                </div>
            )}
            
        </>
    );
}