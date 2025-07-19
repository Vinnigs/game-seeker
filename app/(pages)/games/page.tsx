import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { fetchGamesDynamic } from "@/lib/api/freetogame";
import AllGames from "@/sections/AllGames";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { GameDetails } from "@/types/GameDetails";
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
                        <Link key={"inicio"} href={"/"}>Início</Link>
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