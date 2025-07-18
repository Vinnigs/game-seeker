import { breadcrumbMuiStyles } from '@/app/styles/muiStyles';
import { Stack } from '@mui/material';
import BreadcrumbsMui from '@mui/material/Breadcrumbs';
import { JSX } from 'react';

export type breadcrumbsType = {
    pages: JSX.Element[];
    currentPage: JSX.Element
}

export default function Breadcrumbs({pages, currentPage}: breadcrumbsType) {

    const items = [...pages, currentPage];

    return (
        <Stack spacing={2}>
            <BreadcrumbsMui separator="›" sx={breadcrumbMuiStyles} >
                {items}
            </BreadcrumbsMui>
        </Stack>
    );
}