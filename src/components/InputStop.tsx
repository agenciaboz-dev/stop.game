import { TextField, TextFieldProps } from "@mui/material"
import React from "react"
export const InputStop: React.FC<TextFieldProps> = (props) => {
    return (
        <TextField {...props} sx={{ ...props.sx }}>
            {props.children}
        </TextField>
    )
}
