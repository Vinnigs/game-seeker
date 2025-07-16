import Image from "next/image";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* HEADER */}
      <header className="flex flex-row justify-between">
        <Image 
          src={"assets/logo-GameSeeker.svg"}
          width={201}
          height={31}
          alt="Logo GameSeeker"
        />

        <nav>
          <ul className="flex flex-row gap-[48px]">
            <li><a href="">Início</a></li>
            <li><a href="">Lista de Jogos</a></li>
          </ul>
        </nav>
      </header>
      {/* ~~~~ */}


      <Hero />


      {/* JOGOS POPULARES */}
      <section className="jogos-populares">
        <div className="top-info">
          <h2>Jogos Populares</h2>
          <a href="">Ver todos</a>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <Image 
              src={"next.svg"}
              width={100}
              height={100}
              alt="Jogo thumbnail"
            />
            <h4>Galatic Clash</h4>
            <p>Tiro</p>

            <div className="card-info">
              <Image 
                src={"assets/windows-brand.svg"}
                width={22}
                height={24}
                alt="Jogo thumbnail"
              />

              <div className="lancamento">
                <p>Lançamento</p>
                <p>10 de março, 2025</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* ~~~~ */}


      {/* LANÇAMENTOS (SLIDER) */}
      <section className="lancamentos-slider">
        <div className="slider-1">
          <h2>NeonRush</h2>
          <p>Tiro</p>

          <p>Immerse yourself in a neon-soaked cyberpunk world, battling rogue AI and hackers in this action-packed adventure.</p>

          <div className="card-info">
              <Image 
                src={"assets/windows-brand.svg"}
                width={22}
                height={24}
                alt="Jogo thumbnail"
              />

              <div className="lancamento">
                <p>Lançamento</p>
                <p>10 de março, 2025</p>
              </div>
            </div>
        </div>
      </section>
      {/* ~~~~ */}


      {/* FOOTER */}
      <footer>
        <div className="footer-container-left">
          <h2>
            Obrigado por <br />
            chegar até aqui!
          </h2>
          <p>Este projeto foi desenvolvido para o teste técnico da Level Up Latam e representa não apenas a etapa de um processo, mas também uma oportunidade de crescimento e aprendizado.</p>
        </div>

        <div className="footer-container-right">
          <Image 
            src={"next.svg"}
            width={400}
            height={400}
            alt="Logo GameSeeker"
          />

          <p>Desenvolvido por <strong>Vinícius Gomes</strong></p>

          <div className="social-media-icons">
            <a href="#">
              <Image 
                src={"assets/web-icon.svg"}
                width={24}
                height={24}
                alt="Ícone Website pessoal Vinnigs"
              />
            </a>
            <a href="#">
              <Image 
                src={"assets/github-icon.svg"}
                width={24}
                height={24}
                alt="Ícone GitHub Vinnigs"
              />
            </a>
            <a href="#">
              <Image 
                src={"assets/linkedin-icon.svg"}
                width={24}
                height={24}
                alt="Ícone LinkedIn Vinicius Gomes"
              />
            </a>
          </div>
        </div>
      </footer>
      {/* ~~~~ */}
    </div>
  );
}
