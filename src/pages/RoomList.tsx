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
import { useIo } from "../hooks/useIo"
import { useRooms } from "../hooks/useRooms"
import { Player } from "../definitions/Player"
import { usePlayer } from "../hooks/usePlayer"

interface RoomListProps {
    player: Player
}

export const RoomList: React.FC<RoomListProps> = ({ player }) => {
    const navigate = useNavigate()
    const { list } = useRooms()

    const [selectedRoomId, setSelectedRoomId] = useState("")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <Box
            sx={{
                width: "100%",
                height: "90%",
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
                {list?.map((item, index) => (
                    <Box key={item.id}>
                        <ButtonStop
                            key={item.id}
                            sx={{ width: "100%", fontSize: "8vw", gap: "3vw", textTransform: "uppercase" }}
                            onClick={() => setSelectedRoomId(item.id)}
                        >
                            {item.name}
                            {item.password !== "" && <GiPadlock color={"#1B789F"} style={{ width: "6vw" }} />}
                        </ButtonStop>

                        <ModalNew
                            key={item.id}
                            handleClose={() => setSelectedRoomId("")}
                            open={selectedRoomId === item.id}
                            roomH={item}
                        />
                    </Box>
                ))}
            </Box>
            <ButtonStop sx={{ width: "50%", fontSize: "6vw", bgcolor: colors.button2 }} onClick={() => navigate("/hall")}>
                Voltar
            </ButtonStop>
        </Box>
    )
}
