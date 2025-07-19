"use client"

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { inputLabelStyle, selectStyle } from '@/styles/muiStyles';
import { MenuProps, SelectComponentProps } from './types';
import { customArrowIcon } from './CustomArrowIcon';


export default function SelectComponent({ 
    id, 
    label, 
    valuesLabel,
    value,
    onChange 
}: SelectComponentProps ) {

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        const {
            target: { value: selected },
        } = event;

        const selectedArray = typeof selected === 'string' ? selected.split(',') : selected;
        onChange(selectedArray);
    };

    return (
        <FormControl sx={{ width: "100%" }}>
            <InputLabel
                id={`${id}-label`}
                sx={inputLabelStyle}
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
                sx={selectStyle}
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