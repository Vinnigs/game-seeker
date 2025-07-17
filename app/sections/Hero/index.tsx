"use client"

import Image from "next/image";
import FormHero from "../../components/forms/FormHero";
import { formDataType } from "./types";
import { useState } from "react";
import { fetchGamesDynamic } from "@/app/lib/api/freetogame";
import { GameDetails } from "@/app/types/GameDetails";



export default function Hero() {
    
    const [games, setGames] = useState<GameDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState<formDataType>({
        genre: [],
        platform: [],
        memory: ""
    });

    const handleSearch = async () => {
        console.log("chamou search")
        setLoading(true);

        const response = await fetch("/api/games", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            console.error("Erro ao buscar jogos");
            setLoading(false);
            return;
        }

        const result = await response.json();
        setGames(result);
        setLoading(false);
        console.log(result);
    }

    return (
        <section className="mt-[120px] mb-[100px] flex justify-between">
            {loading && (
                "CARREGANDO..."
            )}
            <button
                onClick={async () => {
                    await handleSearch();
                    console.log(games)
                }}
            >debug</button>
            <button
                onClick={() => {
                    console.log(formData)
                }}
            >formData</button>
            

            <div className="hero-container-left">
                <h1>
                    Descubra Sua <br />
                    Próxima Aventura!
                </h1>
    
                <p className="mt-[40px]">
                    Preencha suas preferências e encontre o jogo ideal:
                </p>
    
                <FormHero 
                    formData={formData}
                    setFormData={setFormData}
                    handleSearch={handleSearch}
                />
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