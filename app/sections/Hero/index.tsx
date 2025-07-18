"use client"

import Image from "next/image";
import FormHero from "../../components/forms/FormHero";
import { formDataType } from "./types";
import { useEffect, useState } from "react";
import { GameDetails } from "@/app/types/GameDetails";
import { useOverlay } from "@/app/contexts";
import TransitionAlert from "@/app/components/alerts/TransitionAlert";

export type heroProps = {
    gamesHighlights: GameDetails[];
}

export default function Hero({gamesHighlights}: heroProps) {
    
    const { setIsOpen: setIsOpenOverlay  } = useOverlay();

    const [games, setGames] = useState<GameDetails[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState<formDataType>({
        genre: [],
        platform: [],
        memory: ""
    });

    const handleError = (message: string) => {
        setErrorMessage(message)
        setShowError(true);
    };

    const handleSearch = async (): Promise<boolean> => {
        try {
            const timeoutLoading = setTimeout(() => setLoading(true), 300);

            const response = await fetch("/api/games", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            clearTimeout(timeoutLoading);

            if (!response.ok) {
                handleError("Erro ao buscar jogos");
                return false;
            }

            const result = await response.json();

            if (!result || result.length === 0) {
                handleError("Ops! Nenhum resultado encontrado... Que tal revisar os filtros e tentar novamente?");
                return false;
            }

            setGames(result);
            return true;

        } catch (ex) {
            handleError("Erro inesperado ao buscar jogos");
            return false;
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        if (loading) setIsOpenOverlay(true); 
        else setIsOpenOverlay(false);
    }, [loading]);


    return (
        // <section className='relative z-10 pt-[160px] pb-[100px] flex flex-col lg:flex-row gap-[64px] w-full justify-between bg-cover bg-center bg-no-repeat bg-[url("/assets/bg-hero-gameseeker.jpg")]'>
        <section className='relative z-10 pt-[160px] pb-[100px] flex flex-col lg:flex-row gap-[64px] w-full justify-between '>
            <div className='absolute left-0 top-0 w-screen h-full bg-cover bg-center bg-no-repeat bg-[url("/assets/bg-hero-gameseeker.jpg")] -z-10' />
            <div className="absolute bottom-0 left-0 w-screen h-32 bg-gradient-to-b from-transparent to-[#1F1434] -z-10" />
            <div className="absolute top-0 left-0 w-screen h-32 bg-gradient-to-t from-transparent to-[#1F1434] -z-10" />
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-l from-transparent to-[#1F1434] -z-10" />
            {/* <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-r from-transparent to-[#1F1434] -z-1" /> */}
            
            <TransitionAlert
                message={errorMessage}
                severity="error"
                duration={4000}
                open={showError}
                onClose={() => setShowError(false)}
            />

            <div className="relative w-full">
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
                    hasError={showError}
                />
            </div>
            
            {gamesHighlights && gamesHighlights.length >= 3 && (
                <div className="flex flex-row lg:flex-col gap-[32px]">
                    {gamesHighlights.slice(0, 3).map((game, index) => (
                        <a key={index} href={`/games/${game.id}`}>
                        {game?.screenshots?.[0]?.image && (
                            <Image 
                                src={game.screenshots[0].image.toString()}
                                width={135}
                                height={135}
                                alt="Jogo destaque"
                                className="w-[200px] h-[130px] object-cover rounded-[8px]"
                            />
                        )}
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
}