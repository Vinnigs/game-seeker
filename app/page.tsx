import Hero from "./_sections/Hero";
import JogosPopulares from "./_sections/JogosPopulares";
import Lancamentos from "./_sections/Lancamentos";
import Footer from "./_sections/Footer";
import Header from "./_sections/Header";

export default function Home() {
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
