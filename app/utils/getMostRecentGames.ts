import { GameDetails } from "../types/GameDetails";

export function getMostRecentGames(games: GameDetails[]): GameDetails[] {
  return games
    .filter((game) => game.release_date)
    .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
    .slice(0, 4);
}
