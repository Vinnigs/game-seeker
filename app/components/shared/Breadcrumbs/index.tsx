import { breadcrumbMuiStyles } from "@/styles/muiStyles";
import { Stack } from '@mui/material';
import BreadcrumbsMui from '@mui/material/Breadcrumbs';
import { JSX } from 'react';

export type BreadcrumbsProps = {
    pages: JSX.Element[];
    currentPage: JSX.Element
}

export default function Breadcrumbs({pages, currentPage}: BreadcrumbsProps) {

    const items = [...pages, currentPage];

    return (
        <Stack spacing={2}>
            <BreadcrumbsMui separator="›" sx={breadcrumbMuiStyles} >
                {items}
            </BreadcrumbsMui>
        </Stack>
    );
}