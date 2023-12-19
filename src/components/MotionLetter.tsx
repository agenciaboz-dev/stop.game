import React from "react"
import { motion } from "framer-motion"
import "../style/box.css"
import { colors } from "../style/colors"
import { Forms } from "../pages/Room/Round/Forms"
import { Box } from "@mui/material"

interface MotionLetterProps {}

export const MotionLetter: React.FC<MotionLetterProps> = ({}) => {
    return (
        <motion.div
            initial={{ y: "80%" }}
            className="box"
            animate={{
                scale: [1.2, 1.1, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
                y: [0, 0, 0, -25, -50, -75, -100, -125, -150, -175, -200, -241],
            }}
            transition={{
                duration: 2,
                ease: "easeOut", // Ajustado para 'easeOut' para uma transição mais suave
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
                repeat: 0,
            }}
        >
            <h1 style={{ fontFamily: "Rubik", fontSize: "45vw", color: "#000" }}>M</h1>
        </motion.div>
    )
}

interface PhraseProps {}

export const Phrase: React.FC<PhraseProps> = ({}) => {
    return (
        <Box sx={{ width: "100%", height: "100%", flexDirection: "column" }}>
            <Forms />
            <motion.div
                className="motion-phrase"
                style={{ width: "100%", height: "100%", alignItems: "end", display: "flex", justifyContent: "end" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1, duration: 1.1 }}
            >
                <p
                    style={{
                        fontSize: "10vw",
                        fontFamily: "KG",
                        fontWeight: "600",
                        letterSpacing: "0.8vw",
                        width: "100%",
                        textAlign: "center",
                        color: colors.secondary,
                        margin: 0,
                    }}
                >
                    A letra é
                </p>
            </motion.div>
        </Box>
    )
}
