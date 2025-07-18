import fs from 'fs/promises';
import path from 'path';
import { API_BASE_URL } from '@/app/config/api';
import { Game } from '@/app/types/Game';
import { GameDetails } from '@/app/types/GameDetails';

// Caminho do arquivo de cache
const CACHE_FILE = path.resolve(process.cwd(), 'app/lib/cache/gamesCache.json');
// TTL do cache em milissegundos (ex: 1 hora)
const CACHE_TTL = 60 * 60 * 1000;

// Função principal que combina cache em arquivo com revalidação em background
export async function fetchAndCacheGames(): Promise<GameDetails[]> {
  // Tentar ler cache existente
  const cache = await readCacheFile();
  if (cache) {
    const isStale = Date.now() - cache.timestamp > CACHE_TTL;
    if (isStale) {
      // Atualiza em background sem bloquear resposta
      revalidateCache();
    }
    return cache.data;
  }

  // Se não há cache, busca e salva
  const freshData = await fetchAllGamesFromApi();
  await writeCacheFile(freshData);
  return freshData;
}

// Lê o arquivo de cache e retorna null se não existir ou estiver corrompido
async function readCacheFile(): Promise<{ timestamp: number; data: GameDetails[] } | null> {
  try {
    const raw = await fs.readFile(CACHE_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Escreve dados no arquivo de cache
async function writeCacheFile(data: GameDetails[]) {
  const payload = {
    timestamp: Date.now(),
    data,
  };
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(payload), 'utf-8');
}

// Dispara revalidação em background
async function revalidateCache() {
  fetchAllGamesFromApi()
    .then((fresh) => writeCacheFile(fresh))
    .catch((err) => console.warn('Erro revalidando cache:', err));
}

// Função que busca da API os dados completos dos jogos
async function fetchAllGamesFromApi(): Promise<GameDetails[]> {
  // busca lista básica
  const res = await fetch(`${API_BASE_URL}/games`);
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  const games: Game[] = await res.json();

  // busca detalhes em paralelo
  const details = await Promise.all(
    games.map(async (g) => {
      try {
        const resp = await fetch(`${API_BASE_URL}/game?id=${g.id}`);
        return (await resp.json()) as GameDetails;
      } catch {
        return null;
      }
    })
  );

  return details.filter((d): d is GameDetails => d !== null);
}