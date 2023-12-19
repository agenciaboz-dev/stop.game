import React from "react"
import { Box, IconButton } from "@mui/material"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { colors } from "../style/colors"
import { InputStop } from "./InputStop"
import { input } from "../style/input"

interface AvalaibleProps {}

export const Avalaible: React.FC<AvalaibleProps> = ({}) => {
    return (
        <Box sx={{ gap: "1vw" }}>
            <InputStop sx={{ ...input, width: "68%" }} value="dog"/>
            <Box sx={{ gap: "1vw" }}>
                <IconButton sx={{ bgcolor: colors.button, width: "12vw" }}>
                    <AiOutlineLike color="black" />
                </IconButton>
                <IconButton sx={{ bgcolor: colors.button, width: "12vw" }}>
                    <AiOutlineDislike color="black" />
                </IconButton>
            </Box>
        </Box>
    )
}
