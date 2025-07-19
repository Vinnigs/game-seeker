import { textFieldStyle } from "@/styles/muiStyles";
import { TextField } from "@mui/material";
import { InputTextComponentProps } from "./types";

export default function InputTextComponent({ 
    id, 
    label,
    value,
    onChange 
}: InputTextComponentProps) {

    return (
        <TextField 
            id={id}
            label={label}
            sx={textFieldStyle}
            value={value}
            onChange={onChange}
            type="number"
            InputProps={{
                inputProps: {
                style: {
                    MozAppearance: 'textfield',
                },
                },
                sx: {
                '& input[type=number]::-webkit-outer-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                },
                '& input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                },
                '& input[type=number]': {
                    MozAppearance: 'textfield',
                },
                },
            }}
        />
    );
}