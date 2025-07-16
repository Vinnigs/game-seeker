import { Dispatch, SetStateAction, useState } from "react";
import { Modal, Box, Pagination } from '@mui/material';
import CardGame from "./CardGame";
import { Icon } from "@iconify/react";

type modalComponentType = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export default function ModalComponent({ 
    openModal = false,
    setOpenModal
}: modalComponentType) {

    const [page, setPage] = useState<number>(1);

    const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

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
                    sx={{
                        position: 'absolute' as const,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: "60%",
                        bgcolor: '#1f1434',
                        border: '1px solid #8D78E9',
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 4,
                        color: 'white',
                }}
                >
                    <button
                        className="absolute right-[32px] top-[32px] cursor-pointer" 
                        onClick={() => toggleModal()} 
                    >
                        <Icon icon={"lucide:x"} width={24} height={24} /> 
                    </button>

                    <h3 className="mb-[32px]"> Encontramos esses jogos para você: </h3>

                    <CardGame 
                        data=""
                        genero=""
                        imagem=""
                        plataforma=""
                        titulo=""
                        orientacao="horizontal"
                    />

                    <div className="w-full mt-[24px] mb-[10px] flex justify-center items-center">
                        <Pagination 
                            count={4}
                            page={page}
                            onChange={handleChangePage}
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: '#fff',
                                    borderColor: '#fff',
                                    fontFamily: 'var(--font-play)'
                                },
                                '& .MuiPaginationItem-root.Mui-selected': {
                                    backgroundColor: '#F26E22',
                                    color: '#fff',
                                },
                                '& .MuiPaginationItem-root:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        />
                    </div>
                    

                </Box>
            </Modal>
    );
}