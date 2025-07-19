'use client';

import { useOverlay } from "@/app/contexts";
import { Backdrop, CircularProgress } from "@mui/material";

export default function GlobalOverlay() {
    const { isOpen, content } = useOverlay();
    
    return (
        <>
            <Backdrop
                open={isOpen}
                sx={{zIndex:9999}}
            >
                {content}
                <CircularProgress />
            </Backdrop>
        </>
    );
}