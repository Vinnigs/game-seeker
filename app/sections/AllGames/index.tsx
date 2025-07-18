"use client"

import GamesGrid from "@/app/components/shared/GamesGrid";
import { allGamesProps } from "./type";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function AllGames({games}: allGamesProps) {

    const isMobile = useIsMobile();

    return (
        <GamesGrid 
            games={games} 
            cardsLimit={20}
            pagination
            cardsPosition={isMobile ? "horizontal" : "vertical"}
        />
    );
}