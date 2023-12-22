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
import { usePlayers } from "../hooks/usePlayers"

interface MenuPlayersProps {}

export const MenuPlayers: React.FC<MenuPlayersProps> = ({}) => {
    const navigationItems = useNavigationList()
    const DrawerItems = navigationItems.players.drawer

    const navigate = useNavigate()
    const io = useIo()

    const { open, setOpen } = useMenuDrawerPlayers()
    const { list, setList } = usePlayers()
    const { room, setRoom } = useRoom()

    const handleJoinRoom = (roomId: string) => {}
    useEffect(() => {
        io.emit("room:players", room?.id)
    }, [open])

    useEffect(() => {
        io.on("room:players:success", (room) => {
            console.log("entrou")
            console.log(room?.players)
            setList(room?.players)
            console.log("listaaaaaa", list)
        })
        return () => {
            io.off("room:players:success")
        }
    }, [open, list])

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
                    padding: "6vw 3vw 0vw",
                    width: "60vw",
                    height: "100%",
                    borderTopLeftRadius: "18vw",
                    borderBottomLeftRadius: "0vw",
                    overflowX: "hidden",
                    backgroundColor: colors.secondary,
                    justifyContent: "space-between",
                },
            }}
            // ModalProps={{ BackdropProps: { sx: backdropStyle } }}
            keepMounted
        >
            <Box sx={{ height: "100%", flexDirection: "column" }}>
                <Box
                    sx={{
                        width: "100%",
                        padding: "3vw 1vw",
                        flexDirection: "row",
                        gap: "3vw",
                        alignItems: "center",
                    }}
                >
                    <IconButton color="default" sx={{ ...iconButtonStyle }} onClick={handleClose}>
                        <IoMdClose style={iconStyle} />
                    </IconButton>
                    <p
                        style={{
                            fontFamily: "Rubik",
                            fontSize: "5vw",
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
                <Box
                    sx={{
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        height: "92%",
                        overflowY: "auto",
                        gap: "5vw",
                        p: "8vw 0",
                    }}
                >
                    {list?.map((item, index) => (
                        <Box
                            sx={{
                                alignItems: "center",
                                gap: "3vw",
                                flexDirection: "row",
                                width: "100%",
                                height: "5%",
                                pb: "8vw",
                            }}
                            key={item.id}
                        >
                            <Avatar
                                src={item.icon}
                                sx={{ width: "10vw", height: "10vw", alignSelf: "center", bgcolor: "transparent" }}
                            />
                            <p style={{ fontFamily: "KG", fontSize: "8vw", margin: 0 }}>{item.name}</p>
                        </Box>
                    ))}
                </Box>
            </Box>
            {/*  */}
            {/* <Box sx={{ flexDirection: "column", paddingTop: "4vw" }}>
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
            </Box> */}
        </Drawer>
    )
}
