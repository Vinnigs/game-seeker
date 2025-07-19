import fs from 'fs/promises';
import path from 'path';
import { API_BASE_URL } from '@/config/api';
import { Game } from '../../types/GameDetails';
import { GameDetails } from '@/types/GameDetails';
import { decode, encode } from '@msgpack/msgpack';

const CACHE_FILE = path.resolve(process.cwd(), 'app/lib/cache/gamesCache.msgpack');
const CACHE_TTL = 60 * 60 * 1000;

interface CachePayload {
  timestamp: number;
  data: GameDetails[];
}

export async function fetchAndCacheGames(): Promise<GameDetails[]> {
  const cache = await readCacheFile();
  if (cache) {
    const isStale = Date.now() - cache.timestamp > CACHE_TTL;
    if (isStale) {
      revalidateCache();
    }
    return cache.data;
  }

  const freshData = await fetchAllGamesFromApi();
  await writeCacheFile({ timestamp: Date.now(), data: freshData });
  return freshData;
}

async function readCacheFile(): Promise<CachePayload | null> {
  try {
    const buf = await fs.readFile(CACHE_FILE);
    const payload = decode(buf) as CachePayload;
    return payload;
  } catch {
    return null;
  }
}

async function writeCacheFile(payload: CachePayload) {
  const buf = encode(payload);
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, buf);
}

async function revalidateCache() {
  fetchAllGamesFromApi()
    .then((fresh) => writeCacheFile({ timestamp: Date.now(), data: fresh }))
    .catch((err) => console.warn('Erro revalidando cache:', err));
}

async function fetchAllGamesFromApi(): Promise<GameDetails[]> {
  const res = await fetch(`${API_BASE_URL}/games`);
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  const games: Game[] = await res.json();

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