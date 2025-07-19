"use client"

import GamesGrid from "@/components/shared/GamesGrid";
import { allGamesProps } from "./type";
import { useIsMobile } from "@/hooks/useIsMobile";

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