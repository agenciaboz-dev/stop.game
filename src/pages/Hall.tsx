import { Avatar, Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { InputStop } from "../components/InputStop"
import { ButtonStop } from "../components/ButtonStop"
import { colors } from "../style/colors"
import { useAvatar } from "../hooks/useAvatar"
import { avatar_list } from "../assets/avatar_list"
import { ModalNew } from "../components/ModalNew"
import {input_outlined} from "../style/input"

interface HallProps {}

const buttons_hall = {
    fontSize: "6vw",
    p: "0 5vw",
    width: "60%",
}

export const Hall: React.FC<HallProps> = ({}) => {
    const avatar = useAvatar()

    const [open, setOpen] = useState(false)

    const images = avatar_list
    const randomAvatar = (max: number) => {
        return Math.floor(Math.random() * max)
    }
    const random = randomAvatar(images.length)
    const imageSort = images[random]

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                alignItems: "center",
                gap: "10vw",
                padding: "3vw",
            }}
        >
            <Box sx={{ flexDirection: "column", gap: "8vw", alignItems: "center" }}>
                <Box
                    sx={{
                        background: "linear-gradient(180deg, #25AAE2 0%, #8CC751 52.6%, #F78B29 100%)",
                        p: "2vw",
                        borderRadius: "50%",
                    }}
                >
                    <Box sx={{ bgcolor: "#fff", p: "0vw", borderRadius: "50%" }}>
                        <Avatar src={imageSort} sx={{ width: "50vw", height: "50vw" }} />
                    </Box>
                </Box>
                <InputStop label="Digite seu nome aqui" name="nickname" sx={{...input_outlined, width: "80%" }} />
            </Box>
            <Box sx={{ flexDirection: "column", width: "100%", alignItems: "center", gap: "5vw" }}>
                <ButtonStop sx={{ ...buttons_hall, bgcolor: colors.button2 }}>Sala Aleatória</ButtonStop>
                <ButtonStop sx={{ ...buttons_hall, bgcolor: colors.primary }}>Salas</ButtonStop>
                <ButtonStop sx={{ ...buttons_hall, bgcolor: colors.secondary }} onClick={() => setOpen(true)}>
                    Criar Sala
                </ButtonStop>
                {open && <ModalNew handleClose={() => setOpen(false)} open={open} />}
            </Box>
        </Box>
    )
}
