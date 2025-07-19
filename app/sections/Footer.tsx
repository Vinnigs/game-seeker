import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative -z-20 mt-[-56px] pt-[180px] lg:mt-[-100px] lg:pt-[290px] pb-[56px] flex flex-col lg:flex-row lg:justify-between lg:items-end sm:flex-col ">

          <div className="mx-auto lg:mx-0 max-w-[600px]">
            <h2 className="text-center !text-[40px] lg:!text-[56px] lg:text-left">
              Obrigado por <br />
              chegar até aqui!
            </h2>
            <p className="grey mt-[32px] text-center lg:text-left">
              Este projeto foi desenvolvido para o teste técnico da <strong>Level Up Latam</strong> e representa não apenas a etapa de um processo, mas também uma oportunidade de crescimento e aprendizado.
            </p>
          </div>

          <div className="flex flex-col items-center mt-18 lg:mt-0 lg:items-end gap-[24px]">
            <Image 
              src={"/assets/logo-GameSeeker.svg"}
              width={201}
              height={31}
              alt="Logo GameSeeker"
          />

          <div className="flex flex-col gap-[32px] lg:gap-[18px] opacity-[0.5]">
            <p>Desenvolvido por <strong>Vinícius Gomes</strong></p>

            <div className="flex flex-row justify-center lg:justify-end gap-[20px]">
              <Link target="_blank" href="https://vinnigs.vercel.app">
                <Image 
                  src={"/assets/web-icon.svg"}
                  width={24}
                  height={24}
                  alt="Ícone Website pessoal Vinnigs"
                />
              </Link>
              <Link target="_blank" href="https://github.com/Vinnigs">
                <Image 
                  src={"/assets/github-icon.svg"}
                  width={24}
                  height={24}
                  alt="Ícone GitHub Vinnigs"
                />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/vinni-gs/">
                <Image 
                  src={"/assets/linkedin-icon.svg"}
                  width={24}
                  height={24}
                  alt="Ícone LinkedIn Vinicius Gomes"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full bg-cover bg-center bg-no-repeat bg-[url("/assets/bg-footer.png")] border-b-red-100 -z-10' />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-screen h-[1px] bg-[linear-gradient(90deg,_#8D78E9_39.42%,_#FFF_100%)]"></div>
      </footer>
    );
}