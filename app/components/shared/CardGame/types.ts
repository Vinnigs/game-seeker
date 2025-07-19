import { GameDetails } from "@/types/GameDetails";

export type CardGameProps = {
    gameId: number;
    title: string;
    genre: string;
    date: string;
    platform: string;
    image: string;
    position?: "horizontal" | "vertical";
}