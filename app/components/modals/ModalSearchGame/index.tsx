import { useState } from "react";
import { Modal, Box, Pagination } from '@mui/material';
import CardGame from "../../shared/CardGame";
import { Icon } from "@iconify/react";
import { paginationStyles } from "@/app/styles/paginationStyles";
import { boxStyle } from "@/app/styles/muiStyles";
import { ModalSearchGameProps } from "./types";


export default function ModalSearchGame({ 
    openModal = false,
    setOpenModal,
    games
}: ModalSearchGameProps ) {

    const [page, setPage] = useState<number>(1);

    const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const toggleModal = () => {
        if (openModal) setOpenModal(false) 
        else setOpenModal(true)
    } 

    const itemsPerPage = 6;
    const pageCount = Math.ceil(games.length / itemsPerPage);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

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

                    {games.slice(start, end).map((game) => (
                        <CardGame
                            key={game.id}
                            date={game.release_date}
                            genre={game.genre}
                            image={game.thumbnail}
                            platform={game.platform}
                            title={game.title}
                            position="horizontal"
                        />
                    ))}

                    <div className="w-full mt-[24px] mb-[10px] flex justify-center items-center">
                        <Pagination 
                            count={pageCount}
                            page={page}
                            onChange={handleChangePage}
                            sx={paginationStyles}
                        />
                    </div>
                    

                </Box>
            </Modal>
    );
}