import { Box, Button, Modal } from "@mui/material"
import React from "react"
import { colors } from "../style/colors"
import { InputStop } from "./InputStop"
import { input } from "../style/input"

interface ModalNewProps {
    handleClose: React.MouseEventHandler<HTMLButtonElement>
    open: any
}

export const ModalNew: React.FC<ModalNewProps> = ({ handleClose, open }) => {
    return (
        <Box sx={{ alignItems: "center" }}>
            <Modal
                sx={{ p: "20vw 15vw", alignItems: "center", justifyContent: "center" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        alignSelf: "center",
                        p: "4vw",
                        bgcolor: colors.secondary,
                        width: "100%",
                        height: "95%",
                        borderRadius: "4vw",
                    }}
                >
                    <InputStop sx={{ ...input }} />
                </Box>
            </Modal>
        </Box>
    )
}
