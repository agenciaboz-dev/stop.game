import { Box } from "@mui/material"
import React, { useEffect } from "react"
import { colors } from "../../style/colors"
import { Header } from "../../components/Header"
import { ButtonStop } from "../../components/ButtonStop"
import { button_style } from "../../style/button"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import logo from "../../assets/logo/logo.png"
import { useNavigate } from "react-router-dom"
import { useMenuDrawerCategories } from "../../hooks/useMenuCategories"
import { useRoom } from "../../hooks/useRoom"
import { useHost } from "../../hooks/useHost"
import { useClipboard } from "@mantine/hooks"
import { usePlayer } from "../../hooks/usePlayer"
import { useRooms } from "../../hooks/useRooms"
import { useIo } from "../../hooks/useIo"
import { usePlayers } from "../../hooks/usePlayers"
import { useSnackbar } from "burgos-snackbar"
import { Player } from "../../definitions/Player"
interface HallRoomProps {}

export const HallRoom: React.FC<HallRoomProps> = ({}) => {
    const io = useIo()
    const navigate = useNavigate()
    const menu = useMenuDrawerCategories()
    const { snackbar } = useSnackbar()

    const { copy, copied } = useClipboard()
    const { room, setRoom } = useRoom()
    const { list, setList } = usePlayers()
    const { player, setPlayer } = usePlayer()

    const button_hall = {
        bgcolor: colors.button,
        fontSize: "8vw",
        width: "70%",
        color: "#000",
    }

    console.log(player?.id)
    const handleLeave = () => {
        io.emit("room:leave", room?.id, player?.id)
        console.log("Lista antes:", list)
    }

    useEffect(() => {
        io.on("room:leave:success", (updatedRoom: Player[]) => {
            snackbar({ severity: "info", text: "Você saiu da sala" })
            console.log("Lista Depois:", updatedRoom)
            navigate("/rooms")
        })
        return () => {
            io.off("room:leave:success")
        }
    }, [list])

    useEffect(() => {
        const handlePlayerLeft = (updatedRoom: Player[]) => {
            // Atualize o estado com a nova lista de jogadores
            console.log("os de fé", updatedRoom)
            setList(updatedRoom)
        }

        io.on("room:leave:left", handlePlayerLeft)

        return () => {
            io.off("room:leave:left", handlePlayerLeft)
        }
    }, [io])

    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "100%", gap: "4vw", p: "2vw" }}>
            <Header color={colors.primary} bgIcon={colors.button} round={false} />
            <Box
                sx={{
                    width: "100%",
                    height: "90%",
                    bgcolor: colors.primary,
                    borderRadius: "4vw",
                    p: "8vw",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#fff",
                        width: "100%",
                        height: "60%",
                        borderRadius: "4vw",
                        flexDirection: "column",
                        p: "4vw",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <img src={logo} style={{ width: "30%" }} />
                    <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                        <p
                            style={{
                                fontFamily: "KG",
                                fontSize: "8vw",
                                color: "#000",
                                margin: 0,
                                textTransform: "uppercase",
                            }}
                        >
                            Sala{" "}
                            <span style={{ color: colors.primary, fontFamily: "KG", fontSize: "8vw", fontWeight: "" }}>
                                #{room?.name}
                            </span>
                        </p>
                        <p style={{ fontFamily: "KG", fontSize: "6vw", color: "#000", margin: 0 }}>
                            Compartilhe com seus amigos
                        </p>
                        <Box sx={{ flexDirection: "row", alignItems: "center", color: "#000", gap: "2vw" }}>
                            <p
                                style={{
                                    fontFamily: "KG",
                                    fontSize: "6vw",
                                    color: copied ? "#000" : colors.primary,
                                    margin: "0",
                                }}
                            >
                                #{room?.id}
                            </p>
                            <ContentCopyIcon onClick={() => copy(room?.id)} />
                        </Box>
                    </Box>

                    <p style={{ fontFamily: "KG", fontSize: "7vw", color: "#000", margin: 0, textAlign: "center" }}>
                        {room?.host.name}, inicie o jogo!
                    </p>
                </Box>
                {player == room?.host && (
                    <ButtonStop sx={{ ...button_style, ...button_hall }} onClick={() => navigate("/room/1/round")}>
                        Iniciar
                    </ButtonStop>
                )}
                <ButtonStop sx={{ ...button_style, ...button_hall }} onClick={() => menu.toggle()}>
                    Categorias
                </ButtonStop>
                <ButtonStop sx={{ ...button_style, ...button_hall }} onClick={() => navigate(`/room/${1}/settings`)}>
                    Configurações
                </ButtonStop>
                <ButtonStop
                    sx={{ ...button_style, ...button_hall, bgcolor: colors.secondary, color: "#fff" }}
                    onClick={handleLeave}
                >
                    Sair
                </ButtonStop>
            </Box>
        </Box>
    )
}
