import Image from "next/image";
import { CardGameProps } from "./types";
import Link from "next/link";

export default function CardGame({
    gameId,
    title,
    genre,
    date,
    platform,
    image,
    position = "vertical",
}: CardGameProps) {

    const platforms = platform
                        .split(",")
                        .map((p) => p.trim().toLowerCase());

    const windowsIcon: string = "/assets/windows-brand.svg";
    const webIcon: string = "/assets/browser-icon.svg";
    const windowsTerms = ["windows", "pc (windows)"];

    const icons: { src: string; alt: string }[] = [];

    if (platforms.some((p) => windowsTerms.includes(p))) {
        icons.push({ src: windowsIcon, alt: "Windows" });
    }
    if (platforms.includes("web browser")) {
        icons.push({ src: webIcon, alt: "Web" });
    }

    return (
        <>
            {position == "vertical" ? (
                <Link 
                    href={`/games/${gameId}`}
                    className="relative h-[415px] h-max-[415px] block px-[24px] py-[28px] rounded-[8px] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] transition duration-150 ease-in-out"
                    style={{
                        isolation: 'isolate'
                    }}
                >
                    <div className="absolute inset-0 rounded-[8px] z-[-1]"
                        style={{
                            background: 'linear-gradient(to bottom right, #8D78E9, #FFFFFF)',
                            opacity: 0.6,
                            padding: '1px',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                        }}>
                    </div>
                    <Image 
                        src={image}
                        width={300}
                        height={300}
                        alt="Jogo thumbnail"
                        className="w-full max-h-[173px] rounded-[4px]"
                    />
                    <div className="relative h-full max-h-[186px] flex flex-col justify-between">
                        <div>
                            <h3 className="mt-[14px]">{title}</h3>
                            <p className="small grey">{genre}</p>
                        </div>

                        <div className="flex flex-row justify-between mt-[20px] px-[24px] py-[10px] bg-[rgba(141,120,233,0.20)] rounded-[4px]">
                            <div className="flex flex-row items-center gap-[14px]">
                                {icons.map(({ src, alt }) => (
                                    <Image key={alt} src={src} alt={alt} width={24} height={24} />
                                ))}
                            </div>
                            
            
                            <div className="flex flex-col items-end">
                                <p className="small">Lançamento</p>
                                <p className="small grey">{date}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                <Link 
                    href={`/games/${gameId}`}
                    className="relative w-full px-[20px] py-[14px] flex flex-row items-center justify-between xl:rounded-[8px] bg-[rgba(255,255,255,0.03)]"
                >
                    <div className="absolute inset-0 rounded-[8px] z-[-1]"
                        style={{
                            background: 'linear-gradient(to bottom right, #8D78E9, #FFFFFF)',
                            opacity: 0.6,
                            padding: '1px',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                        }}>
                    </div>
                    <div className="w-full flex flex-row items-center gap-[14px] lg:gap-[32px]">
                        <Image 
                            src={image}
                            width={200}
                            height={75}
                            alt="Jogo thumbnail"
                            className="w-[45%] lg:w-full max-w-[200px] max-h-[75px] rounded-[4px]"
                        />
                        <div className="flex flex-col gap-[4px]">
                            <h3 className="">{title}</h3>
                            <p className="small grey">{genre}</p>
                        </div>
                    </div>
    
                    <div className="w-full max-w-[350px] hidden lg:flex flex-row justify-between px-[24px] py-[10px] bg-[rgba(141,120,233,0.20)] rounded-[4px] gap-[64px]">
                        <div className="flex flex-row items-center gap-[14px]">
                            {icons.map(({ src, alt }) => (
                                <Image key={alt} src={src} alt={alt} width={24} height={24} />
                            ))}
                        </div>
        
                        <div className="flex flex-col items-end">
                            <p className="small">Lançamento</p>
                            <p className="small grey">{date}</p>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}