import { SortByEnum } from "../enums/SortByEnum";
import { GameDetails } from "../types/GameDetails";

export function sortGames(games: GameDetails[], sortBy: string): GameDetails[] {
  return [...games].sort((_a, _b) => {
    switch (sortBy) {
        case SortByEnum.ReleaseDate:
            return 0;
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