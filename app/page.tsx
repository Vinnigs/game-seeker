import Hero from "./sections/Hero";
import JogosPopulares from "./sections/JogosPopulares";
import Lancamentos from "./sections/Lancamentos";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

export default async function Home() {

  return (
    <div className="container mx-auto">

      <Header />

      <Hero />

      <JogosPopulares />

      <Lancamentos />

      <Footer />

    </div>
  );
}
