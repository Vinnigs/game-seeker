import { fetchGamesById } from "@/app/lib/api/freetogame";
import Footer from "@/app/sections/Footer";
import GamePageDetails from "@/app/sections/GamePageDetails";
import Header from "@/app/sections/Header";
import Lancamentos from "@/app/sections/Lancamentos";
import { GameDetails } from "@/app/types/GameDetails";

interface Props {
  params: { id: string };
}

export default async function GamePage({ params }: Props) {

    const game: GameDetails = await fetchGamesById(params.id);

    return (
        <div className="container mx-auto">
            <Header />
            
            <GamePageDetails game={game} />

            <Lancamentos />

            <Footer />
        </div>
    );
}