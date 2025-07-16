import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const playFontFamily = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Game Seeker",
  description: "Descubra seu próximo jogo favorito!",
  authors: [{ name: "Vinícius Gomes", url: "https://vinnigs.vercel.app/" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playFontFamily.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
