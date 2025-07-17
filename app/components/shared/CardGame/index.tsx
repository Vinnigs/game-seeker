import Image from "next/image";
import { cardGameProps } from "./types";

export default function CardGame({
    title,
    genre,
    date,
    platform,
    image,
    position = "vertical"
}: cardGameProps) {

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
                <a 
                    href="#" 
                    className="px-[24px] py-[28px] border border-[#8D78E9] rounded-[8px] bg-[rgba(255,255,255,0.03)]"
                >
                    <Image 
                        src={image}
                        width={300}
                        height={300}
                        alt="Jogo thumbnail"
                        className="w-full max-h-[300px] rounded-[4px]"
                    />
                    <h3 className="mt-[14px]">{title}</h3>
                    <p className="small grey">{genre}</p>
    
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
                </a>
            ) : (
                <a 
                    href="#" 
                    className="px-[20px] py-[14px] flex flex-row items-center justify-between border border-[#8D78E9] rounded-[8px] bg-[rgba(255,255,255,0.03)]"
                >
                    <div className="w-full flex flex-row items-center gap-[32px]">
                        <Image 
                            src={image}
                            width={200}
                            height={75}
                            alt="Jogo thumbnail"
                            className="w-full max-w-[200px] max-h-[75px] rounded-[4px]"
                        />
                        <div className="flex flex-col gap-[4px]">
                            <h3 className="">{title}</h3>
                            <p className="small grey">{genre}</p>
                        </div>
                    </div>
    
                    <div className="w-full max-w-[350px] flex flex-row justify-between px-[24px] py-[10px] bg-[rgba(141,120,233,0.20)] rounded-[4px] gap-[64px]">
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
                </a>
            )}
        </>
    );
}