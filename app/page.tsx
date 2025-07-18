import Hero from "./sections/Hero";
import JogosPopulares from "./sections/JogosPopulares";
import Lancamentos from "./sections/Lancamentos";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import { fetchGamesDynamic } from "./lib/api/freetogame";
import { getRandomItems } from "./utils/getRandomItems";
import { GameDetails } from "./types/GameDetails";
import TransitionAlert from "./components/alerts/TransitionAlert";

export default async function Home() {

  const games: GameDetails[] = await fetchGamesDynamic();

  const randomGames: GameDetails[] = getRandomItems(games, 3);
  
  return (
    <div className="container px-5 md:mx-auto">

      <Header />

      <Hero 
        gamesHighlights={randomGames} 
      />

      <JogosPopulares
        games={games}
      />

      <Lancamentos />

      <Footer />

    </div>
  );
}
