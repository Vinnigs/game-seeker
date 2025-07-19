import { API_BASE_URL } from "../../config/api";
import { fetcher } from "./fetcher";
import { Game, GameDetails } from "../../types/GameDetails";
import { fetchAndCacheGames } from "../cache/freetogame-cache";
import { filterGames } from "../../utils/filterGames";

export async function fetchGames(): Promise<Game[]> {
    return fetcher<Game[]>(`${API_BASE_URL}/games`);
}

export async function fetchGamesById(id: string): Promise<GameDetails | null> {
    try {
        const response = await fetcher<GameDetails>(`${API_BASE_URL}/game?id=${id}`);
        if (!response) return null;
        return response;
    } catch {
        return null;
    }
}

async function fetchGamesByTags(tags: string[]): Promise<GameDetails[]> {
  const results: GameDetails[] = [];

  for (const tag of tags) {
    try {
      const res = await fetch(`${API_BASE_URL}/filter?tag=${tag}`);
      const games: Game[] = await res.json();

      const details = await Promise.all(
        games.map(async (g) => {
          try {
            const res = await fetch(`${API_BASE_URL}/game?id=${g.id}`);
            return (await res.json()) as GameDetails;
          } catch {
            return null;
          }
        })
      );

      results.push(...details.filter((g): g is GameDetails => g !== null));
    } catch (e) {
      console.warn(`Erro ao buscar tag/gênero ${tag}`, e);
    }
  }

  return results;
}

export async function fetchGamesDynamic(
  genresOrTags?: string[],
  platforms?: string[],
  memory?: string
): Promise<GameDetails[]> {
  const hasGenresOrTags = genresOrTags && genresOrTags.length > 0;

  let resultGames: GameDetails[] = [];

  if (hasGenresOrTags) {
    const tagGames = await fetchGamesByTags(genresOrTags);
    resultGames = filterGames(tagGames, [], platforms, memory);
  } else {
    const cacheGames = await fetchAndCacheGames();
    resultGames = filterGames(cacheGames, [], platforms, memory);
  }

  return resultGames;
}
