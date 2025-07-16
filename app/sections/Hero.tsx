"use client"



import Image from "next/image";
import FormHero from "../components/forms/FormHero";



export default function Hero() {

    
    return (
        <section className="mt-[120px] mb-[100px] flex justify-between">
            <div className="hero-container-left">
                <h1>
                    Descubra Sua <br />
                    Próxima Aventura!
                </h1>
    
                <p className="mt-[40px]">
                    Preencha suas preferências e encontre o jogo ideal:
                </p>
    
                <FormHero />
            </div>
            
            <div className="flex flex-col gap-[32px]">
                <a href="#">
                    <Image 
                        src={"/assets/hero-thumb-game.png"}
                        width={135}
                        height={135}
                        alt="Jogo destaque"
                    />
                </a>
                <a href="#">
                    <Image 
                        src={"/assets/hero-thumb-game.png"}
                        width={135}
                        height={135}
                        alt="Jogo destaque"
                    />
                </a>
                <a href="#">
                    <Image 
                        src={"/assets/hero-thumb-game.png"}
                        width={135}
                        height={135}
                        alt="Jogo destaque"
                    />
                </a>
            </div>
            </section>
    );
}