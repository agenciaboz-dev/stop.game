import { Box } from "@mui/material"
import React from "react"
import { colors } from "../../../style/colors"
import { Header } from "../../../components/Header"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import "../../../style/box.css"
import { MotionLetter, Phrase } from "../../../components/MotionLetter"
import { Forms } from "./Forms"

export const Refresh = ({}) => {
    return (
        <motion.div className="refresh" initial="rest" whileHover="hover" whileTap="pressed">
            <motion.svg width="16" height="16">
                <h1 style={{ fontFamily: "Rubik", fontSize: "45vw", color: "#000" }}>A</h1>
            </motion.svg>
        </motion.div>
    )
}
interface RoundProps {}

export const Round: React.FC<RoundProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "100%", gap: "4vw" }}>
            <Header color={colors.button2} bgIcon={""} round />
            <MotionLetter />
            <Box
                sx={{
                    width: "100%",
                    height: "90%",
                    borderRadius: "4vw",
                    p: "5vw",
                    flexDirection: "column",
                    alignSelf: "center",
                    position: "absolute",
                    display: "flex",
                    mt: "15vw",
                }}
            >
                <Phrase />
            </Box>
        </Box>
    )
}
