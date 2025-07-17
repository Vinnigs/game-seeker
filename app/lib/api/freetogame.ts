import { API_BASE_URL } from "@/app/config/api";
import { fetcher } from "./fetcher";
import { GameDetails } from "@/app/types/GameDetails";
import { fetchAndCacheGames } from "../cache/freetogame-cache";
import { filterGames } from "@/app/utils/filterGames";
import { Game } from "@/app/types/Game";

export async function fetchGames(): Promise<Game[]> {
    return fetcher<Game[]>(`${API_BASE_URL}/games`);
}

export async function fetchGamesById(id: string): Promise<Game> {
    return fetcher<Game>(`${API_BASE_URL}/game?id=${id}`);
}

export async function fetchGamesDynamic(
  genre?: string[], 
  platform?: string[],
  memory?: string,
  sortBy?: string
): Promise<GameDetails[]> {

    const gamesList: GameDetails[] = await fetchAndCacheGames();

    let filteredGames = filterGames(gamesList, genre, platform, memory);

    console.log(filteredGames);

    return filteredGames;
}