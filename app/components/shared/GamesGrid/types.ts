import { Game } from "@/types/Game"
import { GameDetails } from "@/types/GameDetails"

export type gamesGridProps = {
    games: GameDetails[] | Game[];
    pagination?: boolean;
    cardsPosition: "vertical" | "horizontal";
    cardsLimit?: number;
}