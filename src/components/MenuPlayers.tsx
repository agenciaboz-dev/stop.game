import React, { useEffect } from "react"
import { Avatar, Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"
import { IoMdClose } from "react-icons/io"
import { avatar_list } from "../assets/avatar_list"
import { colors } from "../style/colors"

interface MenuPlayersProps {}

export const MenuPlayers: React.FC<MenuPlayersProps> = ({}) => {
    const navigationItems = useNavigationList()
    const DrawerItems = navigationItems.menu.drawer

    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawer()

    const iconStyle: SxProps = {
        width: "15vw",
        height: "auto",
    }

    const iconButtonStyle: SxProps = {
        height: "9vw",
        width: "9vw",
        padding: "1.5vw",
        color: "#000",
    }

    const menuItemStyle: SxProps = {
        fontSize: "3.8vw",
        fontFamily: "MalgunGothicBold",
        height: "fit-content",
        alignItems: "center",
        padding: "0 4vw",
        color: "#fff",
        gap: "2vw",
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer
            anchor={"right"}
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    padding: "6vw 3vw",
                    width: "75vw",
                    height: "100%",
                    borderTopLeftRadius: "10vw",
                    borderBottomLeftRadius: "10vw",
                    overflowX: "hidden",
                    backgroundColor: colors.secondary,
                    justifyContent: "space-between",
                },
            }}
            // ModalProps={{ BackdropProps: { sx: backdropStyle } }}
            keepMounted
        >
            <Box>
                <Box sx={{ justifyContent: "space-between", width: "100%", padding: "4vw", flexDirection: "column" }}>
                    <Box sx={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
                        <IconButton color="default" sx={iconButtonStyle} onClick={handleClose}>
                            <IoMdClose style={iconStyle} />
                        </IconButton>
                        <p> Jogadores</p>
                    </Box>
                    <Box sx={{ alignItems: "center", gap: "6vw" }}>
                        {/* <Avatar src={user?.image} sx={{ width: "50vw", height: "50vw", alignSelf: "center" }} /> */}
                        <Avatar src={avatar_list[15]} sx={{ width: "50vw", height: "50vw", alignSelf: "center" }} />
                    </Box>
                </Box>
                {/*  */}
                <Box sx={{ flexDirection: "column", paddingTop: "4vw" }}>
                    {DrawerItems.map((menu: any) => (
                        <MenuItem
                            key={menu.location}
                            onClick={() => {
                                handleClose()
                                navigate(menu.location)
                            }}
                            sx={menuItemStyle}
                        >
                            {menu.icon}
                            {menu.title}
                        </MenuItem>
                    ))}
                </Box>
            </Box>
        </Drawer>
    )
}
