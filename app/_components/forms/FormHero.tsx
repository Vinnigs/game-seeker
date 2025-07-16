"use client"

import { useState } from "react";
import InputTextComponent from "./InputTextComponent";
import SelectComponent, { SelectValuesType } from "./SelectComponent";
import { Modal, Box, Typography, Button } from '@mui/material';
import CardGame from "../CardGame";
import { Icon } from "@iconify/react";
import ModalComponent from "../ModalComponent";

const plataformaValues: SelectValuesType[] = [
    { label: "PC", value: "pc" },
    { label: "Navegador", value: "navegador" }
]

const generoValues: SelectValuesType[] = [
    { label: "MMORPG", value: "mmorpg" },
    { label: "Tiro", value: "Shooter" },
    { label: "MOBA", value: "moba" },
    { label: "Anime", value: "anime" },
    { label: "Battle Royale", value: "battle-royale" },
    { label: "Estratégia", value: "strategy" },
    { label: "Fantasia", value: "fantasy" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Carta", value: "card-games" },
    { label: "Corrida", value: "racing" },
    { label: "Luta", value: "fighting" },
    { label: "Social", value: "social" },
    { label: "Esportes", value: "sports" }
]

export default function FormHero() {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        if (openModal) setOpenModal(false) 
        else setOpenModal(true)
    } 

    return (
        <>
            <ModalComponent 
                openModal = {openModal}
                setOpenModal={setOpenModal}
            />

            <div className="mt-[24px] max-w-[600px] flex flex-col items-start gap-[20px]">
                <div className="w-full flex flex-row gap-[20px]">
                    <SelectComponent 
                        id="plataforma"
                        label="Plataforma"
                        valuesLabel={plataformaValues}
                    />

                    <InputTextComponent 
                        id="memoria-ram"
                        label="Memória RAM"
                    />
                </div>
                

                <SelectComponent 
                    id="genero"
                    label="Gênero"
                    valuesLabel={generoValues}
                />

                <a 
                    href="#" 
                    className="primary-button"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleModal();
                    }}
                >
                    Descobrir
                </a>
            </div>
        </>
    );
}