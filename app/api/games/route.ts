import { NextRequest, NextResponse } from "next/server";
import { GameDetails } from "@/types/GameDetails";
import { fetchGamesDynamic } from "@/lib/api/freetogame";

export async function POST(req: NextRequest) {
  const { genre, platform, memory } = await req.json();

  const genreArray = typeof genre === "string" ? genre.split(",") : genre;
  const platformArray = typeof platform === "string" ? platform.split(",") : platform;

  try {
    const filteredGames: GameDetails[] = await fetchGamesDynamic(genreArray, platformArray, memory);
    return NextResponse.json(filteredGames);
  } catch (_ex) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
