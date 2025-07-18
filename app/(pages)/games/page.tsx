import GamesGrid from "@/app/components/shared/GamesGrid";
import { fetchGamesDynamic } from "@/app/lib/api/freetogame";
import Header from "@/app/sections/Header";
import { GameDetails } from "@/app/types/GameDetails";

export default async function Games() {

    const games: GameDetails[] = await fetchGamesDynamic();

    return (
        <div className="container mx-auto">
            <Header />
            
            <h2 className="mt-[64px]">Todos os Jogos</h2>

            <GamesGrid 
                games={games} 
                cardsPosition={"vertical"}
            />

        </div>
    );
}