"use client"

import { useState } from "react";
import ModalSearchGame from "../../modals/ModalSearchGame";
import SelectComponent from "../SelectComponent";
import InputTextComponent from "../InputTextComponent";
import { genderOptions, plataformOptions } from "@/app/constants/formOptions";
import { formHeroProps } from "./types";

export default function FormHero({
  formData,
  setFormData,
  handleSearch,
  games,
  hasError,
}: formHeroProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const toggleModal = () => {
    if (!hasError) {
      setOpenModal((prev) => !prev);
    } else {
      setOpenModal(false);
    }
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isButtonDisabled) return;

    setIsButtonDisabled(true); // bloqueia clique
    const success = await handleSearch();
    if (success) toggleModal();

    setTimeout(() => {
      setIsButtonDisabled(false); // libera o botão depois de 2s
    }, 2000);
  };

  return (
    <>
      <ModalSearchGame
        openModal={hasError ? false : openModal}
        setOpenModal={setOpenModal}
        games={games}
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
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                memory: e.target.value,
              }))
            }
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

        <button
          className="primary-button"
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          {"Descobrir"}
        </button>
      </div>
    </>
  );
}
