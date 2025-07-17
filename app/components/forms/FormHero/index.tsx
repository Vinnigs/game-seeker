"use client"

import { Dispatch, SetStateAction, useState } from "react";
import ModalComponent from "../../modals/ModalComponent";
import SelectComponent from "../SelectComponent";
import InputTextComponent from "../InputTextComponent";
import { genderOptions, plataformOptions } from "@/app/constants/formOptions";
import { formDataType } from "@/app/sections/Hero/types";
import { formHeroProps } from "./types";




export default function FormHero({ 
    formData, 
    setFormData,
    handleSearch
}: formHeroProps) {

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
                        value={formData.platform}
                        onChange={(newValue) =>
                            setFormData((prev) => ({ ...prev, platform: newValue }))
                        }
                    />

                    <InputTextComponent 
                        id="memoria-ram"
                        label="Memória RAM"
                        value={formData.memory}
                        onChange={(e) => {
                            setFormData((prev) => ({ ...prev, memory: e.target.value}))
                        }}
                    />
                </div>
                

                <SelectComponent 
                    id="genero"
                    label="Gênero"
                    valuesLabel={genderOptions}
                    value={formData.genre}
                    onChange={(newValue) =>
                        setFormData((prev) => ({ ...prev, genre: newValue }))
                    }
                />

                <a 
                    href="#" 
                    className="primary-button"
                    onClick={async (e) => {
                        e.preventDefault();
                        toggleModal();
                        await handleSearch();
                    }}
                >
                    Descobrir
                </a>
            </div>
        </>
    );
}