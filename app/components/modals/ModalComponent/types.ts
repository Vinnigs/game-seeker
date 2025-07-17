import { Dispatch, SetStateAction } from "react";

export type modalComponentProps = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>
}