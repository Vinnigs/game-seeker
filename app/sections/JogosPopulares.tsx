"use client"

import CardGame from "../components/shared/CardGame";

export default function JogosPopulares() {
    return (
        <section className="jogos-populares">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <h2>Jogos Populares</h2>
                <a href="" className="secondary-button">Ver todos</a>
            </div>
    
            <div className="grid grid-cols-4 gap-[30px]">
                
            <CardGame 
                titulo="teste"
                data="teste"
                genero="teste"
                imagem="teste"
                plataforma="teste"
            />
                
                
                
            </div>
            </section>
    );
}