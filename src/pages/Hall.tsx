import { Avatar, Box } from "@mui/material"
import React from "react"
import { InputStop } from "../components/InputStop"
import { ButtonStop } from "../components/ButtonStop"
import { colors } from "../style/colors"
import { useAvatar } from "../hooks/useAvatar"

interface HallProps {}

export const Hall: React.FC<HallProps> = ({ }) => {
    const avatar = useAvatar()
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                alignItems: "center",
                gap: "20vw",
                padding: "3vw",
                pt: "20vw",
            }}
        >
            <Box sx={ { flexDirection: "column", gap: "3vw", alignItems: "center" } }>
                <Avatar />
                <InputStop label="Digite seu nome aqui" name="nickname" sx={{ width: "80%" }} />
            </Box>
            <Box sx={{ flexDirection: "column", width: "100%", alignItems: "center", gap: "5vw" }}>
                <ButtonStop sx={{ fontSize: "8vw", p: "0 5vw", width: "75%", bgcolor: colors.button2 }}>
                    Sala Aleatória
                </ButtonStop>
                <ButtonStop sx={{ fontSize: "8vw", p: "0 5vw", width: "75%", bgcolor: colors.primary }}>Salas</ButtonStop>
                <ButtonStop sx={{ fontSize: "8vw", p: "0 5vw", width: "75%", bgcolor: colors.secondary }}>
                    Criar Sala
                </ButtonStop>
            </Box>
        </Box>
    )
}
