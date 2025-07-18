import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import GamesGrid from "@/app/components/shared/GamesGrid";
import { fetchGamesDynamic } from "@/app/lib/api/freetogame";
import Footer from "@/app/sections/Footer";
import Header from "@/app/sections/Header";
import { GameDetails } from "@/app/types/GameDetails";
import Link from "next/link";

export default async function Games() {

    const games: GameDetails[] = await fetchGamesDynamic();

    return (
        <div className="container mx-auto">
            <Header />
            
            

            <div className="mb-[32px]">
                <h2 className="mt-[64px] mb-[8px]">Todos os Jogos</h2>

                <Breadcrumbs 
                    pages={[
                        <Link href={"/"}>Início</Link>
                    ]}
                    currentPage={<p>Games</p>}
                />
            </div>

            <GamesGrid 
                games={games} 
                cardsLimit={20}
                pagination
                cardsPosition={"vertical"}
            />

            <Footer />
        </div>
    );
}