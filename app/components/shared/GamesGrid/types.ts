import { Game } from "@/app/types/Game"
import { GameDetails } from "@/app/types/GameDetails"

export type gamesGridProps = {
    games: GameDetails[] | Game[];
    pagination?: paginationTypes;
    cardsPosition: "vertical" | "horizontal";
}

export type paginationTypes = {
    page: number;
    count: number
    onChange: React.ChangeEvent<unknown>
}