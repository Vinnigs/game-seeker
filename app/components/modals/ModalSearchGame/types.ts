import { GameDetails } from "@/types/GameDetails";
import { Dispatch, SetStateAction } from "react";

export type ModalSearchGameProps = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>
    games: GameDetails[];
}