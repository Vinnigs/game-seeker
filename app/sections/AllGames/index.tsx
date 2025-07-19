"use client"

import GamesGrid from "@/components/shared/GamesGrid";
import { AllGamesProps } from "./types";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function AllGames({games}: AllGamesProps) {

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