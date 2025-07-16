import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero mt-[100px]">
            <div className="hero-container-left">
                <h1>
                Descubra Sua <br />
                Próxima Aventura!
                </h1>
    
                <p className="mt-[40px]">
                Preencha suas preferências e encontre o jogo ideal:
                </p>
    
                <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button type="submit">Descobrir</button>
                </form>
            </div>
            
            <div className="hero-container-right">
                <Image 
                src={"next.svg"}
                width={100}
                height={100}
                alt="Jogo destaque"
                />
                <Image 
                src={"next.svg"}
                width={100}
                height={100}
                alt="Jogo destaque"
                />
                <Image 
                src={"next.svg"}
                width={100}
                height={100}
                alt="Jogo destaque"
                />
            </div>
            </section>
    );
}