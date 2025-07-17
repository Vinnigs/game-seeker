import Hero from "./sections/Hero";
import JogosPopulares from "./sections/JogosPopulares";
import Lancamentos from "./sections/Lancamentos";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import { fetchGames } from "./lib/api/freetogame";
import { Game } from "./types/Game";

export default async function Home() {

  const games: Game[] = await fetchGames();

  return (
    <div className="container mx-auto">

      <Header />

      <Hero />

      <JogosPopulares
        games={games}
      />

      <Lancamentos />

      <Footer />

    </div>
  );
}
