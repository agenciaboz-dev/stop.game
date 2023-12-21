import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import logo from "../assets/logo/logo.png"
import { colors } from "../style/colors"
import { title } from "../style/title"
import { ButtonStop } from "../components/ButtonStop"
import { useArray } from "../hooks/useArray"
import { useNavigate } from "react-router-dom"
import { ModalNew } from "../components/ModalNew"
import { GiPadlock } from "react-icons/gi"

interface RoomListProps {}

export const RoomList: React.FC<RoomListProps> = ({}) => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    return (
        <Box
            sx={{
                width: "100%",
                height: "fit-content",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "7vw",
                p: "8vw",
            }}
        >
            <img src={logo} style={{ width: "30%" }} />
            <p
                style={{
                    ...title,
                    color: colors.primary,
                }}
            >
                LISTA DE SALAS
            </p>
            <Box
                sx={{
                    width: "100%",
                    height: "70%",
                    flexDirection: "column",
                    gap: "3vw",
                    alignItems: "center",
                    overflowY: "auto",
                }}
            >
                <ButtonStop sx={{ width: "80%", fontSize: "8vw", gap: "3vw" }} onClick={() => setOpen(true)}>
                    Studio ABC
                    <GiPadlock color={"#1B789F"} style={{ width: "6vw" }} />
                </ButtonStop>
                <ButtonStop sx={{ width: "80%", fontSize: "8vw", gap: "3vw" }} onClick={() => setOpen(true)}>
                    Studio ABC
                    <GiPadlock color={"#1B789F"} style={{ width: "6vw" }} />
                </ButtonStop>
                <ButtonStop sx={{ width: "80%", fontSize: "8vw", gap: "3vw" }} onClick={() => setOpen(true)}>
                    Studio ABC
                    <GiPadlock color={"#1B789F"} style={{ width: "6vw" }} />
                </ButtonStop>
                <ModalNew handleClose={() => setOpen(false)} open={open} />
            </Box>
            <ButtonStop sx={{ width: "50%", fontSize: "6vw", bgcolor: colors.button2 }} onClick={() => navigate("/hall")}>
                Voltar
            </ButtonStop>
        </Box>
    )
}
