import { TextField, TextFieldProps } from '@mui/material'
import React from 'react';
import {input_outlined} from "../style/input"
export const InputStop:React.FC<TextFieldProps> = (props) => {
    
    return (
        <TextField { ...props } sx={ { ...props.sx, ...input_outlined } }>{props.children}</TextField>
    )
}