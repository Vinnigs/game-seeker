import { fetchGamesById, fetchGamesDynamic } from "@/lib/api/freetogame";
import Footer from "@/sections/Footer";
import GamePageDetails from "@/sections/GamePageDetails";
import Header from "@/sections/Header";
import Lancamentos from "@/sections/Lancamentos";
import { GameDetails } from "@/types/GameDetails";
import { getMostRecentGames } from "@/utils/getMostRecentGames";



export default async function GamePage({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;

  const game: GameDetails = await fetchGamesById(id);
  const games: GameDetails[] = await fetchGamesDynamic();
  const mostRecentGames: GameDetails[] = getMostRecentGames(games);

  return (
    <div className="container px-5 md:mx-auto">
      <Header />
      <GamePageDetails game={game} />
      <Lancamentos games={mostRecentGames} />
      <Footer />
    </div>
  );
}