import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./styles/globals.css";
import { OverlayProvider } from "./contexts";
import GlobalOverlay from "./components/overlays/GlobalOverlay";

const playFontFamily = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "GameSeeker",
  description: "Descubra sua próxima aventura!",
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
        className={`${playFontFamily.variable} antialiased overflow-x-hidden`}
      >
        <OverlayProvider>
          {children}
          <GlobalOverlay />
        </OverlayProvider>
      </body>
    </html>
  );
}
