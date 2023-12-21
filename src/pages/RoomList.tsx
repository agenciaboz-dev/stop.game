import { Box } from "@mui/material"
import React from "react"
import logo from "../assets/logo/logo.png"
import { colors } from "../style/colors"
import { title } from "../style/title"
import { ButtonStop } from "../components/ButtonStop"
import { useArray } from "../hooks/useArray"
import { useNavigate } from "react-router-dom"

interface RoomListProps {}

export const RoomList: React.FC<RoomListProps> = ({}) => {
    const navigate = useNavigate()
    const list = useArray().newArray(12)
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
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
                    // bgcolor: "red",
                    height: "70%",
                    flexDirection: "column",
                    gap: "3vw",
                    alignItems: "center",
                    overflowY: "auto",
                }}
            >
                {list.map((item, index) => (
                    <ButtonStop
                        key={index}
                        sx={{ width: "70%", fontSize: "9vw" }}
                        onClick={() => navigate(`/room/${index + 1}`)}
                    >
                        {" "}
                        Sala {index + 1}
                    </ButtonStop>
                ))}
            </Box>
            <ButtonStop sx={{ width: "50%", fontSize: "6vw", bgcolor: colors.button2 }} onClick={() => navigate("/hall")}>
                {" "}
                Voltar
            </ButtonStop>
        </Box>
    )
}
