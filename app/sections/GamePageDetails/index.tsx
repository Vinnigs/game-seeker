"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { GamePageDetailsProps } from "./type";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GamePageDetails({game}: GamePageDetailsProps) {

    const [modalImage, setModalImage] = useState<string | null>(null);

    return (
        <section className="mt-[80px] flex flex-row gap-[48px]">
            <div className="sticky w-[40%] top-[32px] h-[100%] flex flex-col items-start ">
                <Image 
                    src={game.thumbnail}
                    width={201}
                    height={31}
                    alt="Logo GameSeeker"
                    className="w-full rounded-[8px]"
                />
                <a 
                    href={game.game_url} 
                    target="_blank" 
                    className="primary-button mt-[-24px] ml-[32px]"
                >
                    <button className="uppercase font-black">Jogar Agora</button>
                </a>
            </div>

            <div className="container-right w-[60%]">
                <p>Início / JOGO</p>
                <h2>{game.title}</h2>
                <p className="tag-button green small mt-[8px]">Gratuito</p>

                <p className="mt-[24px] grey">{game.description}</p>

                <div className="mt-[40px] w-[100%]">
                    <h3>Galeria</h3>

                    <div className="mt-[18px] w-[100%] h-[100%] overflow-hidden">
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
                            {game.screenshots.map((pic) => {
                                return (
                                    <SwiperSlide
                                        key={pic.id}
                                    >
                                        <div 
                                            className="w-full h-full relative cursor-pointer"
                                            onClick={() => setModalImage(pic.image)}
                                        >
                                            <Image 
                                                src={pic.image}
                                                width={500}
                                                height={200}
                                                alt="Game Thumbnail"
                                                className="rounded-[8px] object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>

                { game.release_date && game.developer && game.publisher && game.genre && game.platform ? (
                    
                    <div className="info-adicionais mt-[48px]">
                        <h3>Informações Adicionais</h3>
                        
                        <div className="mt-[24px] grid grid-cols-3 gap-[40px]">
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Lançamento</p>
                                <p>{game.release_date}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Desenvolvedor</p>
                                <p>{game.developer}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Publicadora</p>
                                <p>{game.publisher}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p>Gênero</p>
                                <p>{game.genre}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Plataforma</p>
                                <p>{game.platform}</p>
                            </div>
                        </div>
                    </div>
                    
                ) : null }
                
                {   game.minimum_system_requirements?.os 
                    && game.minimum_system_requirements?.processor
                    && game.minimum_system_requirements?.memory
                    && game.minimum_system_requirements?.graphics
                    && game.minimum_system_requirements?.storage ? (
                    <div className="requisitos-minimos mt-[48px]">
                        <h3>Requisitos Minímos</h3>
                        
                        <div className="mt-[24px] grid grid-cols-2 gap-[40px]">
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">SO</p>
                                <p>{game.minimum_system_requirements.os}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Processador</p>
                                <p>{game.minimum_system_requirements.processor}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Memória RAM</p>
                                <p>{game.minimum_system_requirements.memory}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p>Gráficos</p>
                                <p>{game.minimum_system_requirements.graphics}</p>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <p className="grey">Armazenamento</p>
                                <p>{game.minimum_system_requirements.storage}</p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            {/* MODAL */}
            {modalImage && (
                <div
                className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50"
                onClick={() => setModalImage(null)}
                >
                    <div className="relative w-[90%] max-w-4xl h-[80vh]">
                        <Image
                            src={modalImage}
                            fill
                            alt="Expanded Image"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}