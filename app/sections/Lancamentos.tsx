"use client"

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GameDetails } from "../types/GameDetails";
import { useEffect } from "react";

export type lancamentosProps = {
    games: GameDetails[]
} 

export default function Lancamentos({games}: lancamentosProps) {

    useEffect(() => {
  const updateBullets = () => {
    document.querySelectorAll('.swiper-pagination-bullet').forEach(el => {
      const bullet = el as HTMLElement;
      bullet.style.position = 'relative';
      bullet.style.zIndex = '50';
      bullet.style.cursor = 'pointer';

      if (bullet.classList.contains('swiper-pagination-bullet-active')) {
        bullet.style.backgroundColor = '#F26E22';
        bullet.style.width = '44px';
      } else {
        bullet.style.backgroundColor = 'rgba(255,255,255,0.65)';
        bullet.style.width = '24px';
      }
    });
  };

  setTimeout(updateBullets, 100);

  const observer = new MutationObserver(updateBullets);
  const target = document.querySelector('.custom-pagination');
  if (target) {
    observer.observe(target, { attributes: true, childList: true, subtree: true });
  }

  return () => observer.disconnect();
}, []);

    return (
    <section className="mt-[100px]">
        <h2 className="mb-[32px] grey">Lançamentos</h2>

        <div className="
            relative
            left-1/2 ml-[-50vw] w-screen
            sm:left-[-30] sm:ml-0
            md:!left-0 md:!ml-0 md:!w-full 
        ">
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                modules={[Autoplay, Pagination]}
                loop
                autoplay={{
                    delay: 10000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: true,
                }}
                speed={2000}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (_index, className) => {
                    return `
                        <span 
                            class="${className}" 
                            style="
                            display: inline-block;
                            height: 4px;
                            width: 24px;
                            border-radius: 9999px;
                            background-color: rgba(255,255,255,0.2);
                            transition: all 0.3s ease;
                            position: relative;
                            z-index: 50;
                            cursor: pointer;
                            "
                        ></span>
                        `;
                    },
                }}
            >
                {games.map((game) => (
                    <SwiperSlide key={game.id}>
                        <a 
                            href={`/games/${game.id}`}
                            className={`
                                relative h-[500px]
                                bg-cover bg-right bg-no-repeat 
                                flex items-center
                                lg:rounded-[8px]
                                px-10 lg:px-20
                            `}
                            style={{ 
                                backgroundImage: `url(${game.thumbnail})`,
                                isolation: 'isolate'
                            }}
                            >
                            <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#191825_2.19%,rgba(25,24,37,0.81)_33.25%,rgba(25,24,37,0)_101.6%)]" />

                            <div className="relative z-10 w-full max-w-[250px] lg:max-w-[400px] lg:mx-0 md:ml-15">
                                <h2>{game.title}</h2>
                                <p>{game.genre}</p>

                                <p className="mt-[32px]">
                                    {game.short_description}
                                </p>

                                <div className="flex flex-row justify-between mt-[14px] px-[24px] py-[10px] bg-[rgba(141,120,233,0.60)] rounded-[4px]">
                                    <Image 
                                        src={"/assets/windows-brand.svg"}
                                        width={22}
                                        height={24}
                                        alt="Plataforma do jogo"
                                    />

                                    <div className="flex flex-col items-end">
                                        <p className="small">Lançamento</p>
                                        <p className="small grey">{game.release_date}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination flex gap-3 justify-center mt-6" />
        </div>
    </section>
    );
}