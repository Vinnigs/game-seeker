import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import GamesGrid from "@/app/components/shared/GamesGrid";
import { fetchGamesDynamic } from "@/app/lib/api/freetogame";
import AllGames from "@/app/sections/AllGames";
import Footer from "@/app/sections/Footer";
import Header from "@/app/sections/Header";
import { GameDetails } from "@/app/types/GameDetails";
import Link from "next/link";

export default async function Games() {

    const games: GameDetails[] = await fetchGamesDynamic();

    return (
        <div className="container px-5 md:mx-auto">
            <Header />

            <div className="mt-[130px] mb-[32px]">
                <h2 className=" mb-[8px]">Todos os Jogos</h2>

                <Breadcrumbs 
                    pages={[
                        <Link href={"/"}>Início</Link>
                    ]}
                    currentPage={<p>Games</p>}
                />
            </div>

            <AllGames 
                games={games}
            />

            <Footer />
        </div>
    );
}