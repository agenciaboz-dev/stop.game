import { Avatar, Box, Button, IconButton } from "@mui/material"
import React from "react"
import { colors } from "../../../style/colors"
import { Header } from "../../../components/Header"
import { Avalaible } from "../../../components/Avalaible"
import { ButtonStop } from "../../../components/ButtonStop"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { avatar_list } from "../../../assets/avatar_list"
import { CardPlayer } from "../../../components/CardPlayer"

interface RankingProps {}

export const Ranking: React.FC<RankingProps> = ({}) => {
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
                    p: "3vw",
                    flexDirection: "column",
                    gap: "6vw",
                }}
            >
                <h1 style={{ fontFamily: "Rubik", color: "#fff", textAlign: "center", width: "100%", margin: "0" }}>
                    Ranking
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
                    <Box sx={{ gap: "3vw", flexDirection: "column", width: "100%", height: "60%" }}>
                        <CardPlayer />
                        <CardPlayer />
                        <CardPlayer />
                        <CardPlayer />
                        <CardPlayer />
                        <CardPlayer />
                    </Box>
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
