import React, { useEffect } from "react"
import { Avatar, Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useMenuDrawerPlayers } from "../hooks/useMenuPlayers"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"
import { IoMdClose } from "react-icons/io"
import { avatar_list } from "../assets/avatar_list"
import { colors } from "../style/colors"
import { useIo } from "../hooks/useIo"
import { useRoom } from "../hooks/useRoom"

interface MenuPlayersProps {}

export const MenuPlayers: React.FC<MenuPlayersProps> = ({}) => {
    const navigationItems = useNavigationList()
    const DrawerItems = navigationItems.players.drawer
    const io = useIo()

    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawerPlayers()
    const { room, setRoom } = useRoom()

    const handleJoinRoom = (roomId: string) => {}

    useEffect(() => {
        io.emit("room:players", room?.id)
    })
    useEffect(() => {
        io.on("room:players:success", () => {
            console.log("entrou")
            console.log(room?.players)
        })
        return () => {
            io.off("room:players:success")
        }
    }, [open])

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
                    width: "60vw",
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
                            Jogadores
                        </p>
                    </Box>
                    <Box sx={{ alignItems: "center", gap: "3vw", flexDirection: "row", width: "100%", height: "5%" }}>
                        <Avatar
                            src={avatar_list[15]}
                            sx={{ width: "10vw", height: "10vw", alignSelf: "center", bgcolor: colors.button }}
                        />
                        <p style={{ fontFamily: "KG", fontSize: "8vw", margin: 0 }}>Ana</p>
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
