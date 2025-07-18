import { Game } from "@/app/types/Game"
import { GameDetails } from "@/app/types/GameDetails"

export type gamesGridProps = {
    games: GameDetails[] | Game[];
    pagination?: boolean;
    cardsPosition: "vertical" | "horizontal";
    cardsLimit?: number;
}