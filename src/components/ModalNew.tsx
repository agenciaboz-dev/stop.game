import { Box, Button, Modal } from "@mui/material"
import React, { useEffect, useState } from "react"
import { colors } from "../style/colors"
import { InputStop } from "./InputStop"
import { input } from "../style/input"
import { Title } from "./Title"
import { InputNon } from "./InputNon"
import { ButtonStop } from "./ButtonStop"
import { useNavigate } from "react-router-dom"
import { Room } from "../definitions/Room"
import { useIo } from "../hooks/useIo"
import { Player } from "../definitions/Player"
import { usePlayer } from "../hooks/usePlayer"
import { useRoom } from "../hooks/useRoom"

interface ModalNewProps {
    handleClose: React.MouseEventHandler<HTMLButtonElement>
    open: any
    roomH: Room
}

export const ModalNew: React.FC<ModalNewProps> = ({ handleClose, open, roomH }) => {
    const navigate = useNavigate()
    const io = useIo()
    const { player, setPlayer } = usePlayer()
    const { room, setRoom } = useRoom()

    const [loading, setLoading] = useState(false)

    const handleJoinRoom = (roomId: string) => {
        if (player) {
            io.emit("room:join", roomId, player)
            setLoading(true)
        } else {
            console.log("Jogador n chega aqui")
        }
    }

    useEffect(() => {
        io.on("room:join:success", (roomReceived) => {
            const data = roomReceived.room
            setRoom(data)
            console.log("opa opa opa", data)
            navigate(`/room/${data.id}`)
        })
    }, [])
    return (
        <Box sx={{ alignItems: "center" }}>
            <Modal
                sx={{ p: "25vw 12vw", alignItems: "center", justifyContent: "center", bgcolor: "transparent" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        alignSelf: "center",
                        p: "10vw 4vw",
                        bgcolor: colors.primary,
                        width: "100%",
                        height: "fit-content",
                        borderRadius: "4vw",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8vw",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            alignSelf: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2vw",
                        }}
                    >
                        <Title title="Nome da Sala" />
                        <InputNon content={roomH.name} />
                        <Title title="Anfitrião" />
                        <InputNon content={roomH.host.name} />
                        <Title title="Privacidade" />
                        <InputNon
                            content={roomH.password !== "" ? "Privada" : "Pública"}
                            variant={roomH.password !== "" ? true : false}
                        />
                        {roomH.password !== "" && (
                            <>
                                <Title title="Digite a senha" />
                                <InputStop sx={{ ...input, width: "80%" }} />
                            </>
                        )}
                    </Box>
                    <ButtonStop sx={{ bgcolor: colors.secondary, fontSize: "7vw" }} onClick={() => handleJoinRoom(roomH.id)}>
                        Entrar
                    </ButtonStop>
                </Box>
            </Modal>
        </Box>
    )
}
