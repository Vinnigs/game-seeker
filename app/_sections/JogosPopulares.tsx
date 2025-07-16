"use client"

import Image from "next/image";

const games = Array(8).fill({
  title: "Galatic Clash",
  genre: "Tiro",
  date: "10 de março, 2025",
  platformIcon: "/assets/windows-brand.svg",
  image: "/assets/hero-thumb-game.png",
});

export default function JogosPopulares() {
    return (
        <section className="jogos-populares">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2>Jogos Populares</h2>
                <a href="" className="secondary-button">Ver todos</a>
            </div>
    
            <div className="grid grid-cols-4 gap-[30px]">
                
                {games.map((game, index) => {
                    return (
                        <a 
                            href="#" 
                            className="px-[24px] py-[28px] border border-[#8D78E9] rounded-[8px] bg-[rgba(255,255,255,0.03)]"
                            key={index}
                        >
                            <Image 
                                src={game.image}
                                width={300}
                                height={300}
                                alt="Jogo thumbnail"
                                className="w-full max-h-[300px] rounded-[4px]"
                            />
                            <h3 className="mt-[14px]">{game.title}</h3>
                            <p className="small grey">{game.genre}</p>
            
                            <div className="flex flex-row justify-between mt-[14px] px-[24px] py-[10px] bg-[rgba(141,120,233,0.20)] rounded-[4px]">
                                <Image 
                                    src={game.platformIcon}
                                    width={22}
                                    height={24}
                                    alt="Plataforma do jogo"
                                />
                
                                <div className="flex flex-col items-end">
                                    <p className="small">Lançamento</p>
                                    <p className="small grey">{game.date}</p>
                                </div>
                            </div>
                        </a>
                    );
                })}
                
                
                
            </div>
            </section>
    );
}