import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-[130px] mb-[56px] flex flex-row justify-between items-end">

        <div className="max-w-[600px]">
          <h2>
            Obrigado por <br />
            chegar até aqui!
          </h2>
          <p className="grey mt-[32px]">
            Este projeto foi desenvolvido para o teste técnico da <strong>Level Up Latam</strong> e representa não apenas a etapa de um processo, mas também uma oportunidade de crescimento e aprendizado.
          </p>
        </div>

        <div className="flex flex-col items-end gap-[24px]">
          <Image 
            src={"/assets/logo-GameSeeker.svg"}
            width={201}
            height={31}
            alt="Logo GameSeeker"
          />

          <div className="flex flex-col gap-[18px] opacity-[0.5]">
            <p>Desenvolvido por <strong>Vinícius Gomes</strong></p>

            <div className="flex flex-row justify-end gap-[20px]">
              <a href="#">
                <Image 
                  src={"/assets/web-icon.svg"}
                  width={24}
                  height={24}
                  alt="Ícone Website pessoal Vinnigs"
                />
              </a>
              <a href="#">
                <Image 
                  src={"/assets/github-icon.svg"}
                  width={24}
                  height={24}
                  alt="Ícone GitHub Vinnigs"
                />
              </a>
              <a href="#">
                <Image 
                  src={"/assets/linkedin-icon.svg"}
                  width={24}
                  height={24}
                  alt="Ícone LinkedIn Vinicius Gomes"
                />
              </a>
            </div>
          </div>

        </div>
      </footer>
    );
}