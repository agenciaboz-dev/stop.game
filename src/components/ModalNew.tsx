import { Box, Button, Modal } from "@mui/material"
import React from "react"
import { colors } from "../style/colors"
import { InputStop } from "./InputStop"
import { input } from "../style/input"
import { Title } from "./Title"
import { InputNon } from "./InputNon"
import { ButtonStop } from "./ButtonStop"
import { useNavigate } from "react-router-dom"

interface ModalNewProps {
    handleClose: React.MouseEventHandler<HTMLButtonElement>
    open: any
}

export const ModalNew: React.FC<ModalNewProps> = ({ handleClose, open }) => {
    const navigate = useNavigate()
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
                        <InputNon content="Studio ABC" />
                        <Title title="Anfitrião" />
                        <InputNon content="Tainara" />
                        <Title title="Privacidade" />
                        <InputNon content="Privada" variant />
                        <Title title="Digite a senha" />
                        <InputStop sx={{ ...input, width: "80%" }} />
                    </Box>
                    <ButtonStop sx={{ bgcolor: colors.secondary, fontSize: "7vw" }} onClick={()=>navigate("/room/1")}>Entrar</ButtonStop>
                </Box>
            </Modal>
        </Box>
    )
}
