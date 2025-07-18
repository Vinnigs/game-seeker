import { Modal, Box, Pagination } from '@mui/material';
import { Icon } from "@iconify/react";
import { boxStyle } from "@/app/styles/muiStyles";
import { ModalSearchGameProps } from "./types";
import GamesGrid from "../../shared/GamesGrid";


export default function ModalSearchGame({ 
    openModal = false,
    setOpenModal,
    games
}: ModalSearchGameProps ) {
    const toggleModal = () => {
        if (openModal) setOpenModal(false) 
        else setOpenModal(true)
    } 

    return (
        <Modal
                open={openModal}
                onClose={toggleModal}
            >
                <Box
                    sx={boxStyle}
                >
                    <button
                        className="absolute right-[32px] top-[32px] cursor-pointer" 
                        onClick={() => toggleModal()} 
                    >
                        <Icon icon={"lucide:x"} width={24} height={24} /> 
                    </button>

                    <h3 className="mb-[32px] hidden xl:block"> Encontramos esses jogos para você: </h3>
                    <h3 className="px-[30px] mb-[32px] block xl:hidden"> Encontramos esses<br/>jogos para você: </h3>

                    <GamesGrid 
                        games={games}
                        cardsPosition="horizontal"
                        cardsLimit={4}
                        pagination
                    />

                </Box>
            </Modal>
    );
}