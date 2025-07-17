'use client';

import { useOverlay } from "@/app/contexts";
import { Backdrop, CircularProgress } from "@mui/material";

export default function GlobalOverlay() {
    const { isOpen, setIsOpen, content, closeOverlay } = useOverlay();
    
    return (
        <>
            <Backdrop
                open={isOpen}
            >
                {content}
                <CircularProgress />
            </Backdrop>
        </>
    );
}