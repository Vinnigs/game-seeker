"use client"

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { SVGProps } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const customArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
        <path d="M0.685716 0.999988L5.4 5.79999L10.1143 0.999988" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export type SelectValuesType = {
    label: string;
    value: string;
}

type SelectComponentType = {
    id: string;
    label: string;
    valuesLabel: SelectValuesType[];
}

export default function SelectComponent( { id, label, valuesLabel }: SelectComponentType ) {

    const [value, setValue] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        const {
            target: { value: selected },
        } = event;

        const selectedArray = typeof selected === 'string' ? selected.split(',') : selected;
        setValue(selectedArray);
    };

    return (
        <FormControl sx={{ width: "100%" }}>
            <InputLabel
                id={`${id}-label`}
                sx={{ 
                    color: "white",
                    '&.Mui-focused': {
                        color: 'white',
                    },
                }}
            >
                {label}
            </InputLabel>

            <Select
                labelId={`${id}-label`}
                id={id}
                multiple
                value={value}
                onChange={handleChange}
                input={
                    <OutlinedInput 
                        label={label}
                    />
                }
                renderValue={(selected) =>
                    selected
                        .map((val) => valuesLabel.find((option) => option.value === val)?.label ?? val)
                        .join(', ')
                }
                MenuProps={MenuProps}
                IconComponent={customArrowIcon}
                sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '& .MuiSelect-icon': {
                        top: '50%',
                        transform: 'translateY(-50%)',
                        right: 16
                    },
                    
                }}
            >
            {valuesLabel.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    <Checkbox checked={value.includes(option.value)} />
                    <ListItemText primary={option.label} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    );
}