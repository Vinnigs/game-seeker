import { SortByEnum } from "../enums/SortByEnum";
import { GameDetails } from "@/types/GameDetails";

export function sortGames(games: GameDetails[], sortBy: string): GameDetails[] {
  return [...games].sort((a, b) => {
    switch (sortBy) {
        case SortByEnum.ReleaseDate:
            return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
        case SortByEnum.Popularity:
            return 0;
        case SortByEnum.Alphabetical:
            return 0;
        case SortByEnum.Relevance:
            return 0;
        default:
            return 0;
    }
  });
}