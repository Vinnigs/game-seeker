import { TextField } from "@mui/material";

type InputTextComponentType = {
    id: string;
    label: string;
}

export default function InputTextComponent({ id, label }: InputTextComponentType) {

    return (
        <TextField 
            id={id}
            label={label}
            sx={{
                width: "100%",
                input: {
                    color: "white",
                },
                label: {
                    color: "white",
                },
                "& label.Mui-focused": {
                    color: "white",
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "white",
                    },
                    "&:hover fieldset": {
                        borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white",
                    },
                },
            }}
        />
    );
}