"use client"

import Image from "next/image";
import FormHero from "../../components/forms/FormHero";
import { formDataType } from "./types";
import { useEffect, useState } from "react";
import { GameDetails } from "@/types/GameDetails";
import { useOverlay } from "@/contexts";
import TransitionAlert from "@/components/alerts/TransitionAlert";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

        } catch (error) {
            handleError("Erro inesperado ao buscar jogos");
            return false;
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        if (loading) setIsOpenOverlay(true); 
        else setIsOpenOverlay(false);
    }, [loading, setIsOpenOverlay]);


    return (
        <section className='relative z-10 pt-[160px] pb-[100px] flex flex-col lg:flex-row gap-[64px] w-full justify-between '>
            <div className='absolute left-1/2 -translate-1/2 top-90 w-screen h-full bg-cover bg-center bg-no-repeat bg-[url("/assets/bg-hero-gameseeker.jpg")] -z-50' />
            
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
                <>
                    <div className="hidden lg:flex flex-row lg:flex-col gap-[32px]">
                        {gamesHighlights.slice(0, 3).map((game, index) => (
                            <a key={index} href={`/games/${game.id}`} className="rounded-[5px] border border-[#8d78e950] bg-white/5 shadow-[1px_4px_18px_rgba(25,24,37,0.32)] hover:bg-[rgba(255,255,255,0.4)] transition duration-150 ease-in-out">
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
                    <div className="block lg:hidden w-full h-full">
                        <Swiper
                            slidesPerView={2}
                                spaceBetween={24}
                                modules={[Autoplay]}
                                loop
                                autoplay={{ 
                                    delay: 5000,
                                    pauseOnMouseEnter: true,
                                    disableOnInteraction: true
                                }}
                                speed={1500}
                        >
                            {gamesHighlights.slice(0, 3).map((game, index) => (
                                <SwiperSlide key={index}>
                                    <a href={`/games/${game.id}`} className="rounded-[5px]">
                                    {game?.screenshots?.[0]?.image && (
                                        <Image 
                                            src={game.screenshots[0].image.toString()}
                                            width={135}
                                            height={135}
                                            alt="Jogo destaque"
                                            className="w-full h-[130px] object-cover rounded-[8px]"
                                        />
                                    )}
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </>
            )}
        </section>
    );
}