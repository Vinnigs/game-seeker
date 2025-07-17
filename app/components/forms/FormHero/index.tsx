"use client"

import { useState } from "react";
import ModalComponent from "../../modals/ModalComponent";
import SelectComponent from "../SelectComponent";
import InputTextComponent from "../InputTextComponent";
import { genderOptions, plataformOptions } from "@/app/constants/formOptions";

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
                        valuesLabel={plataformOptions}
                    />

                    <InputTextComponent 
                        id="memoria-ram"
                        label="Memória RAM"
                    />
                </div>
                

                <SelectComponent 
                    id="genero"
                    label="Gênero"
                    valuesLabel={genderOptions}
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