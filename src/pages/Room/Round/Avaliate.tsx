import { Box, Button, IconButton } from "@mui/material"
import React from "react"
import { colors } from "../../../style/colors"
import { Header } from "../../../components/Header"
import { Avalaible } from "../../../components/Avalaible"
import { ButtonStop } from "../../../components/ButtonStop"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { useNavigate } from "react-router-dom"

interface AvaliateProps {}

export const Avaliate: React.FC<AvaliateProps> = ({}) => {
    const navigate = useNavigate()
    return (
        <Box sx={{ width: "100%", height: "100%", flexDirection: "column", gap: "6vw" }}>
            <Header color={colors.primary} round={false} letter="T" />
            <Box
                sx={{
                    bgcolor: colors.primary,
                    width: "100%",
                    height: "85%",
                    borderRadius: "4vw",
                    alignItems: "center",
                    p: "3vw",
                    flexDirection: "column",
                    gap: "6vw",
                }}
            >
                <h1 style={{ fontFamily: "Rubik", color: "#fff", textAlign: "center", width: "100%", margin: "0" }}>
                    Avaliação
                </h1>

                <Box
                    sx={{
                        width: "100%",
                        flexDirection: "column",
                        gap: "3vw",
                        borderRadius: "3vw",
                        bgcolor: "#ADD8E6",
                        p: "3vw",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: colors.button,
                            borderRadius: "3vw",
                            width: "100%",
                            p: "1vw",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton>
                            <MdKeyboardDoubleArrowLeft />
                        </IconButton>
                        <p
                            style={{
                                fontFamily: "KG",
                                fontWeight: "800",
                                fontSize: "7vw",
                                letterSpacing: "0.5vw",
                                color: "#000",
                                margin: 0,

                                textAlign: "center",
                            }}
                        >
                            Animal
                        </p>
                        <IconButton>
                            <MdKeyboardDoubleArrowRight />
                        </IconButton>
                    </Box>
                    <Box sx={{ gap: "3vw", flexDirection: "column" }}>
                        <Avalaible />
                        <Avalaible />
                        <Avalaible />
                        <Avalaible />
                        <Avalaible />
                    </Box>
                </Box>
                <Box sx={{ flexDirection: "row", gap: "2vw" }}>
                    <ButtonStop
                        variant="contained"
                        sx={{ bgcolor: colors.secondary, fontWeight: "400", fontSize: "6vw", p: "1vw" }}
                        onClick={() => navigate("/room/1/ranking")}
                    >
                        Pular
                    </ButtonStop>
                    <ButtonStop
                        variant="contained"
                        sx={{ fontFamily: "KG", bgcolor: colors.button2, fontWeight: "400", fontSize: "6vw", p: "1vw" }}
                        onClick={() => navigate("/room/1/ranking")}
                    >
                        Salvar avaliação
                    </ButtonStop>
                </Box>
            </Box>
        </Box>
    )
}
