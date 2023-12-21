import { Box } from "@mui/material"
import React from "react"
import { GiPadlock } from "react-icons/gi"

interface InputNonProps {
    content: string
    variant?: boolean
}

export const InputNon: React.FC<InputNonProps> = ({ content, variant }) => {
    return (
        <Box
            sx={{
                width: "80%",
                height: "8%",
                bgcolor: "#1B789F",
                borderRadius: "6vw",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
            }}
        >
            <p
                style={{
                    fontFamily: "KG",
                    letterSpacing: "0.5vw",
                    fontSize: "6vw",
                    color: "#fff",
                    margin: 0,
                    gap: "2vw",
                }}
            >
                {content}
            </p>
                {variant && <GiPadlock color={"black"} style={{ width: "7vw" }} />}
        </Box>
    )
}
