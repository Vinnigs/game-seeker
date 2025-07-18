"use client"

import Image from "next/image";
import FormHero from "../../components/forms/FormHero";
import { formDataType } from "./types";
import { useEffect, useState } from "react";
import { GameDetails } from "@/app/types/GameDetails";
import { useOverlay } from "@/app/contexts";

export default function Hero() {
    
    const { setIsOpen: setIsOpenOverlay  } = useOverlay();

    const [games, setGames] = useState<GameDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState<formDataType>({
        genre: [],
        platform: [],
        memory: ""
    });

    const handleSearch = async () => {
        try {
            console.log("chamou search") // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

            const timeoutLoading = setTimeout(() => {
                setLoading(true);
            }, 300)

            const response = await fetch("/api/games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            clearTimeout(timeoutLoading);

            if (!response.ok) {
                console.error("Erro ao buscar jogos");
                setLoading(false);
                return;
            }

            const result = await response.json();
            setGames(result);
            console.log(result); // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        } catch (ex) {
            throw new Error();
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (loading) setIsOpenOverlay(true); 
        else setIsOpenOverlay(false);
    }, [loading]);

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
    
                <FormHero 
                    formData={formData}
                    setFormData={setFormData}
                    handleSearch={handleSearch}
                    games={games}
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