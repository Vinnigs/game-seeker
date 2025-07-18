import Hero from "./sections/Hero";
import JogosPopulares from "./sections/JogosPopulares";
import Lancamentos from "./sections/Lancamentos";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import { fetchGamesDynamic } from "./lib/api/freetogame";
import { getRandomGameWithScreenshots } from "./utils/getRandomGameWithScreenshots";
import { GameDetails } from "./types/GameDetails";
import { getMostRecentGames } from "./utils/getMostRecentGames";

export default async function Home() {

  const games: GameDetails[] = await fetchGamesDynamic();

  const randomGames: GameDetails[] = getRandomGameWithScreenshots(games, Math.min(3, games.length));;
  const mostRecentGames: GameDetails[] = getMostRecentGames(games);
  
  return (
    <div className="container px-5 md:mx-auto">

      <Header />

      <Hero 
        gamesHighlights={randomGames} 
      />

      <JogosPopulares
        games={games}
      />

      <Lancamentos 
        games={mostRecentGames}
      />

      <Footer />

    </div>
  );
}
