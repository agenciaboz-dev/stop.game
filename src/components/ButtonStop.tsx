import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { button_style } from "../style/button"

interface ButtonStopProps {}

export const ButtonStop: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} variant="contained" sx={{ ...button_style, ...props.sx }}>
            {props.children}
        </Button>
    )
}
