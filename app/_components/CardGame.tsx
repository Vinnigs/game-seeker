import Image from "next/image";

const games = Array(4).fill({
  title: "Galatic Clash",
  genre: "Tiro",
  date: "10 de março, 2025",
  platformIcon: "/assets/windows-brand.svg",
  image: "/assets/hero-thumb-game.png",
});

type CardGameType = {
    titulo: string;
    genero: string;
    data: string;
    plataforma: string;
    imagem: string;
    orientacao?: "horizontal" | "vertical";
}

export default function CardGame({
    titulo,
    genero,
    data,
    plataforma,
    imagem,
    orientacao = "vertical"
}: CardGameType) {
    return (
        <>
            {orientacao == "vertical" ? (
                <>
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
                
                                <div className="flex flex-row justify-between mt-[20px] px-[24px] py-[10px] bg-[rgba(141,120,233,0.20)] rounded-[4px]">
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
                </>
            ) : (
                <>
                    {games.map((game, index) => {
                        return (
                            <a 
                                href="#" 
                                className="px-[20px] py-[14px] flex flex-row items-center justify-between border border-[#8D78E9] rounded-[8px] bg-[rgba(255,255,255,0.03)]"
                                key={index}
                            >
                                <div className="w-full flex flex-row items-center gap-[32px]">
                                    <Image 
                                        src={game.image}
                                        width={200}
                                        height={75}
                                        alt="Jogo thumbnail"
                                        className="w-full max-w-[200px] max-h-[75px] rounded-[4px]"
                                    />
                                    <div className="flex flex-col gap-[4px]">
                                        <h3 className="">{game.title}</h3>
                                        <p className="small grey">{game.genre}</p>
                                    </div>
                                </div>
                
                                <div className="w-full max-w-[350px] flex flex-row justify-between px-[24px] py-[10px] bg-[rgba(141,120,233,0.20)] rounded-[4px] gap-[64px]">
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
                </>
            )}
        </>
    );
}