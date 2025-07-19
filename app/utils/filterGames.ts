import { GameDetails } from "../types/GameDetails";

export function filterGames(
  games: GameDetails[],
  genresOrTags?: string[],
  platforms?: string[],
  memory?: string
): GameDetails[] {
  const noFilters =
    (!genresOrTags || genresOrTags.length === 0) &&
    (!platforms || platforms.length === 0) &&
    (!memory || memory.trim() === "");

  if (noFilters) return games;

  return games.filter((game) => {
    const matchesPlatform = platforms?.length
      ? platforms.map(normalize).includes(normalize(game.platform))
      : true;

    const matchesGenreOrTag = genresOrTags?.length
      ? genresOrTags.some((term) =>
          game.genre?.toLowerCase() === term.toLowerCase() ||
          game.tags?.some((tag) => tag.toLowerCase() === term.toLowerCase())
        )
      : true;

    const matchesMemory = memory && !isNaN(Number(memory))
        ? extractRamFromString(game.minimum_system_requirements?.memory) <= Number(memory)
        : true;

    return matchesPlatform && matchesGenreOrTag && matchesMemory;
  });
}


function extractRamFromString(memoryStr?: string): number {
  if (!memoryStr) return 0;
  const match = memoryStr.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

function normalize(str: string): string {
  return str.trim().toLowerCase();
}