import { Box, Drawer, SxProps } from "@mui/material"
import React from "react"
import { colors } from "../style/colors"
import { GiAstronautHelmet } from "react-icons/gi"
import { BiArrowToLeft } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { MenuPlayers } from "./MenuPlayers"
import { useMenuDrawer } from "../hooks/useMenuDrawer"

interface HeaderProps {
    color: string
    bgIcon?: string
}

export const Header: React.FC<HeaderProps> = ({ color, bgIcon }) => {
    const navigate = useNavigate()
    const menu = useMenuDrawer()
    return (
        <Box
            sx={{
                bgcolor: color,
                width: "100%",
                height: "7%",
                borderRadius: "4vw",
                p: "2vw 4vw",
                justifyContent: "space-between",
            }}
        >
            <Box bgcolor={bgIcon} sx={{ borderRadius: "8vw", height: "100%", width: "11vw", justifyContent: "center" }}>
                <BiArrowToLeft
                    color="black"
                    style={{ width: "8vw", height: "100%", bgcolor: colors.primary }}
                    onClick={() => {
                        navigate("../1")
                    }}
                />
            </Box>
            <Box bgcolor={bgIcon} sx={{ borderRadius: "8vw", height: "100%", width: "11vw", justifyContent: "center" }}>
                <GiAstronautHelmet color="black" style={{ width: "8vw", height: "100%" }} onClick={() => menu.toggle()} />
            </Box>
            <MenuPlayers />
        </Box>
    )
}
