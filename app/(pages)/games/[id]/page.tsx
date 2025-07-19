import { fetchGamesById, fetchGamesDynamic } from "@/app/lib/api/freetogame";
import Footer from "@/app/sections/Footer";
import GamePageDetails from "@/app/sections/GamePageDetails";
import Header from "@/app/sections/Header";
import Lancamentos from "@/app/sections/Lancamentos";
import { GameDetails } from "@/app/types/GameDetails";
import { getMostRecentGames } from "@/app/utils/getMostRecentGames";

type Props = {
  params: {
    id: string;
  };
}

export default async function GamePage({params}: Props) {

    const parameters = await params;

    const game: GameDetails = await fetchGamesById(parameters.id);
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