import { Box, Drawer, SxProps } from "@mui/material"
import React from "react"
import { colors } from "../style/colors"
import { GiAstronautHelmet } from "react-icons/gi"
import { BiArrowToLeft } from "react-icons/bi"
import { RiEdit2Fill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { MenuPlayers } from "./MenuPlayers"
import { useMenuDrawerPlayers } from "../hooks/useMenuPlayers"
import { useMenuDrawerCategories } from "../hooks/useMenuCategories"
import { MenuCategories } from "./MenuCategories"
import { motion } from "framer-motion"

interface HeaderProps {
    color: string
    bgIcon?: string
    round: boolean
    letter?: string
}

export const Header: React.FC<HeaderProps> = ({ color, bgIcon, round, letter }) => {
    const navigate = useNavigate()
    const menuPlayers = useMenuDrawerPlayers()
    const menuCategories = useMenuDrawerCategories()
    return (
        <Box
            sx={{
                bgcolor: color,
                width: "100%",
                height: round ? "fit-content" : "8%",
                borderRadius: "4vw",
                p: "1vw 4vw",
                justifyContent: "space-between",
            }}
        >
            <Box bgcolor={bgIcon} sx={{ borderRadius: "8vw", height: "100%", width: "11vw", justifyContent: "center" }}>
                {round ? (
                    <BiArrowToLeft
                        color="black"
                        style={{ width: "8vw", height: "100%", bgcolor: colors.primary }}
                        onClick={() => {
                            navigate("../1")
                        }}
                    />
                ) : (
                    <RiEdit2Fill
                        color="black"
                        style={{ width: "8vw", height: "100%", bgcolor: colors.primary }}
                        onClick={() => {
                            menuCategories.toggle()
                        }}
                    />
                )}
            </Box>
            {letter !== null && (
                <Box sx={{}}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, ease: "easeIn" }}
                    >
                        <p
                            style={{
                                fontFamily: "Rubik",
                                fontSize: "8vw",
                                color: "#000",
                                fontWeight: "800",
                                margin: 0,
                                height: "100%",
                            }}
                        >
                            {letter}
                        </p>
                    </motion.div>
                </Box>
            )}
            <Box bgcolor={bgIcon} sx={{ borderRadius: "8vw", height: "100%", width: "11vw", justifyContent: "center" }}>
                <GiAstronautHelmet
                    color="black"
                    style={{ width: "8vw", height: "100%" }}
                    onClick={() => menuPlayers.toggle()}
                />
            </Box>
            <MenuPlayers />
            <MenuCategories />
        </Box>
    )
}
