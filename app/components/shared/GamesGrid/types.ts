import { GameDetails } from "@/types/GameDetails"

export type gamesGridProps = {
    games: GameDetails[];
    pagination?: boolean;
    cardsPosition: "vertical" | "horizontal";
    cardsLimit?: number;
}