// /api/games/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchAndCacheGames } from "@/app/lib/cache/freetogame-cache";
import { GameDetails } from "@/app/types/GameDetails";
import { checkMemoryRequirement } from "@/app/utils/checkMemoryRequirement";
import { fetchGamesDynamic } from "@/app/lib/api/freetogame";

export async function POST(req: NextRequest) {
  console.log("chamou api");
  const { genre, platform, memory } = await req.json();

  const genreArray = typeof genre === "string" ? genre.split(",") : genre;
  const platformArray = typeof platform === "string" ? platform.split(",") : platform;

  try {
    const filteredGames: GameDetails[] = await fetchGamesDynamic(genreArray, platformArray, memory);
    return NextResponse.json(filteredGames);
  } catch (err) {
    console.error("Erro na API:", err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
