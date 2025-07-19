import Link from "next/link";
import Footer from "./sections/Footer";
import Header from "./sections/Header"

export default function NotFound() {
  return (
    <div className="container px-5 md:mx-auto">
        <div className="w-full flex flex-col items-center gap-[40px]">
            <Header />
            <h1 className="mt-[220px] text-center">Página não encontrada...</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link href="/" className="primary-button">
                Voltar para a Home
            </Link>
        </div>
        <Footer />
    </div>
  );
}