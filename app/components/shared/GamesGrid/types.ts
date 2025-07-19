import { GameDetails } from "@/types/GameDetails"

export type GamesGridProps = {
    games: GameDetails[];
    pagination?: boolean;
    cardsPosition: "vertical" | "horizontal";
    cardsLimit?: number;
}