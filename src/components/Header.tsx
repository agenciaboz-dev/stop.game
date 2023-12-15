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

interface HeaderProps {
    color: string
    bgIcon?: string
    round: boolean
}

export const Header: React.FC<HeaderProps> = ({ color, bgIcon, round }) => {
    const navigate = useNavigate()
    const menuPlayers = useMenuDrawerPlayers()
    const menuCategories = useMenuDrawerCategories()
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
