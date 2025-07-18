import { useState } from "react";
import { Modal, Box, Pagination } from '@mui/material';
import CardGame from "../../shared/CardGame";
import { Icon } from "@iconify/react";
import { paginationStyles } from "@/app/styles/paginationStyles";
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

                    <h3 className="mb-[32px]"> Encontramos esses jogos para você: </h3>

                    <GamesGrid 
                        games={games}
                        cardsPosition="horizontal"
                        cardsLimit={5}
                        pagination
                    />

                    {/* <div className="w-full mt-[24px] mb-[10px] flex justify-center items-center">
                        <Pagination 
                            count={pageCount}
                            page={page}
                            onChange={handleChangePage}
                            sx={paginationStyles}
                        />
                    </div> */}
                    

                </Box>
            </Modal>
    );
}