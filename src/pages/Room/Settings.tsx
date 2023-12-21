import { Box } from "@mui/material"
import React from "react"
import { colors } from "../../style/colors"
import { Header } from "../../components/Header"
import { useNavigate } from "react-router-dom"
import { CardPlayer } from "../../components/CardPlayer"
import { ButtonStop } from "../../components/ButtonStop"
import { Accordion, Avatar, Group, Text } from "@mantine/core"
import { GiAstronautHelmet } from "react-icons/gi"
import { RiEdit2Fill } from "react-icons/ri"
import { AccordionSet } from "../../components/AccordionSet"

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box sx={{ width: "100%", height: "100%", flexDirection: "column", gap: "6vw" }}>
            <Header color={colors.primary} round={false} />
            <Box
                sx={{
                    bgcolor: colors.primary,
                    width: "100%",
                    height: "fit-content",
                    borderRadius: "4vw",
                    alignItems: "center",
                    p: "8vw 3vw",
                    flexDirection: "column",
                    gap: "6vw",
                }}
            >
                <h1 style={{ fontFamily: "Rubik", color: "#fff", textAlign: "center", width: "100%", margin: "0" }}>
                    Configurações
                </h1>

                <Box
                    sx={{
                        width: "85%",
                        height: "67%",
                        flexDirection: "column",
                        gap: "3vw",
                        borderRadius: "3vw",
                        bgcolor: "#ADD8E6",
                        p: "3vw",
                        overflowY: "auto",
                    }}
                >
                    <AccordionSet />
                </Box>
                <Box sx={{ flexDirection: "row", gap: "2vw" }}>
                    <ButtonStop
                        variant="contained"
                        sx={{ bgcolor: colors.secondary, fontWeight: "400", fontSize: "6vw", p: "1vw" }}
                        onClick={() => navigate("/hall")}
                    >
                        Sair
                    </ButtonStop>
                    <ButtonStop
                        variant="contained"
                        sx={{ fontFamily: "KG", bgcolor: colors.button2, fontWeight: "400", fontSize: "6vw", p: "1vw" }}
                        onClick={() => navigate("/room/1/round")}
                    >
                        Jogar Novamente
                    </ButtonStop>
                </Box>
            </Box>
        </Box>
    )
}
