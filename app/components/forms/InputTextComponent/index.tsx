import { textFieldStyle } from "@/app/styles/muiStyles";
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
        />
    );
}