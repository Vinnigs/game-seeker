import { GameDetails } from "../types/GameDetails";
import { checkMemoryRequirement } from "./checkMemoryRequirement";

export function filterGames(
    games: GameDetails[],
    genre?: string[],
    platform?: string[],
    memory?: string
): GameDetails[] {
    const hasGenreFilter = genre && genre.length > 0;
    const hasPlatformFilter = platform && platform.length > 0;
    const hasMemoryFilter = memory && memory.trim() !== '';

    if (!hasGenreFilter && !hasPlatformFilter && !hasMemoryFilter) {
        return games;
    }

    return games.filter(game => {
    if (hasGenreFilter) {
        const gameGenres = game.genre.toLowerCase().split(/,\s*/);
        const hasMatchingGenre = genre!.some(g => 
        gameGenres.includes(g.toLowerCase())
        );
        
        if (!hasMatchingGenre) return false;
    }

    if (hasPlatformFilter) {
        const gamePlatforms = game.platform.toLowerCase().split(/,\s*/);
        const hasMatchingPlatform = platform!.some(p => 
        gamePlatforms.includes(p.toLowerCase())
        );
        
        if (!hasMatchingPlatform) return false;
    }

    if (hasMemoryFilter) {
        const userMemoryGB = parseFloat(memory!);
        
        const gameMemoryValue = checkMemoryRequirement(game.minimum_system_requirements?.memory);
        
        if (gameMemoryValue === null || userMemoryGB < gameMemoryValue) {
        return false;
        }
    }

        return true;
    });
}