"use client"

import { useState } from "react";
import CardGame from "../CardGame";
import { gamesGridProps } from "./types";
import { Pagination } from "@mui/material";
import { paginationStyles } from "@/app/styles/paginationStyles";
import { PaginationEnum } from "@/app/enums/PaginationEnum";
import { GamesGridEnum } from "@/app/enums/GamesGridEnum";

export default function GamesGrid({
    games,
    pagination,
    cardsPosition
}: gamesGridProps) {
    
    const [page, setPage] = useState<number>(1);

    const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const cardsLimit = GamesGridEnum.CardsLimit;

    const itemsPerPage = PaginationEnum.itemsPerPage;

    const pageCount = Math.ceil(games.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return (
        <>
            {pagination ? (
                <>
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
                    <div className="w-full mt-[24px] mb-[10px] flex justify-center items-center">
                        <Pagination 
                            count={pageCount}
                            page={page}
                            onChange={handleChangePage}
                            sx={paginationStyles}
                        />
                    </div>
                </>
            ) : (
                <div className="grid grid-cols-4 gap-[30px]">
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