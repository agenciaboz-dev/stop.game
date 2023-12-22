import React, { useEffect } from "react"
import { Avatar, Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"
import { IoMdClose } from "react-icons/io"
import { avatar_list } from "../assets/avatar_list"
import { colors } from "../style/colors"
import { useMenuDrawerCategories } from "../hooks/useMenuCategories"

interface MenuCategoriesProps {}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({}) => {
    const navigationItems = useNavigationList()
    const DrawerItems = navigationItems.categories.drawer

    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawerCategories()

    const iconStyle: SxProps = {
        width: "15vw",
        height: "auto",
    }

    const iconButtonStyle: SxProps = {
        height: "9vw",
        width: "9vw",
        padding: "1.5vw",
        color: "#000",
        right: "5vw",
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
            anchor={"left"}
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    padding: "6vw 3vw",
                    width: "98vw",
                    height: "100%",
                    borderTopRightRadius: "18vw",
                    borderBottomRightRadius: "0vw",
                    overflowX: "hidden",
                    backgroundColor: colors.button,
                    justifyContent: "space-between",
                },
            }}
            // ModalProps={{ BackdropProps: { sx: backdropStyle } }}
            keepMounted
        >
            <Box>
                <IconButton color="default" sx={{ ...iconButtonStyle, position: "absolute" }} onClick={handleClose}>
                    <IoMdClose style={iconStyle} />
                </IconButton>
                <Box sx={{ width: "100%", padding: "14vw 4vw", flexDirection: "column", gap: "8vw", alignItems: "center" }}>
                    <Box sx={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
                        <p
                            style={{
                                fontFamily: "Rubik",
                                fontSize: "7vw",
                                margin: 0,
                                textAlign: "center",
                                width: "100%",
                                fontWeight: "800",
                            }}
                        >
                            {" "}
                            Categorias
                        </p>
                    </Box>
                </Box>
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
