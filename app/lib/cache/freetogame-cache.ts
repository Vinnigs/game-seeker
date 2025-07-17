import { API_BASE_URL } from "@/app/config/api";
import { Game } from "@/app/types/Game";
import { GameDetails } from "@/app/types/GameDetails";

let cachedGames: GameDetails[] | null = null;

export async function fetchAndCacheGames(): Promise<GameDetails[]> {
    if (cachedGames) return cachedGames;

    const res = await fetch(`${API_BASE_URL}/games`, {
        next: { revalidate: 60 * 60 },
        cache: "force-cache"
    });

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

    const games: Game[] = await res.json(); 
    const gamesDetailsList: GameDetails[] = [];

    for (const game of games) {
        try {
            const detailResponse = await fetch(`${API_BASE_URL}/game?id=${game.id}`);
            const detail: GameDetails = await detailResponse.json();
            gamesDetailsList.push(detail);
        } catch(ex) {
            console.warn(`Erro ao buscar o jogo: ID ${game.id}`, ex)
        }
    }

    cachedGames = gamesDetailsList;
    return cachedGames;
}