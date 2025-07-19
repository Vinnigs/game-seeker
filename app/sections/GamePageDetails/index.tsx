"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { GamePageDetailsProps } from "./type";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Breadcrumbs from '@/app/components/shared/Breadcrumbs';
import Link from 'next/link';

export default function GamePageDetails({game}: GamePageDetailsProps) {

    const [modalImage, setModalImage] = useState<string | null>(null);

    return (
        <section className="relative mt-[130px] flex flex-col lg:flex-row gap-[24px] md:gap-[48px]">
            <div className='absolute left-1/2 -translate-x-1/2 bottom-[60%] w-screen h-full bg-cover bg-center bg-no-repeat bg-[url("/assets/bg-games-populares.jpg")] -z-10' />

            <div className="!block md:!hidden">
                <Breadcrumbs 
                    pages={[
                        <Link href="/">Início</Link>,
                        <Link href="/games">Games</Link>
                    ]}
                    currentPage={<p>{game.title}</p>}
                />
            </div>
            <div className="lg:sticky relative lg:w-[40%] lg:top-[130px] h-[100%] flex flex-col items-start ">
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
                    className="!hidden lg:!flex primary-button mt-[-24px] lg:ml-[32px]"
                >
                    <button className="uppercase font-black">Jogar Agora</button>
                </a>
            </div>

            <div className="container-right lg:w-[60%] flex flex-col items-start">
                <div className="!hidden md:!block">
                    <Breadcrumbs 
                        pages={[
                            <Link href="/">Início</Link>,
                            <Link href="/games">Games</Link>
                        ]}
                        currentPage={<p>{game.title}</p>}
                    />
                </div>
                

                <div className="flex items-center justify-between w-full">
                    <h2 className="mt-0 mb-3 md:mt-[8px]">{game.title}</h2>
                    <p className="!hidden md:!block lg:!hidden tag-button green small">Gratuito</p>
                </div>
                
                <a 
                    href={game.game_url} 
                    target="_blank" 
                    className="lg:!hidden primary-button mt-4"
                >
                    <button className="uppercase font-black">Jogar Agora</button>
                </a>
                <p className="block md:!hidden lg:!block tag-button green small mt-5 lg:mt-0 lg:mb-[14px]">Gratuito</p>

                <p className="mt-[48px] lg:mt-[24px] grey">{game.description}</p>

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
                    
                    <div className="info-adicionais mt-[48px] w-full">
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
                                <p className="grey">Gênero</p>
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
                    <div className="mt-[64px] lg:mt-[48px]">
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
                                <p className="grey">Gráficos</p>
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