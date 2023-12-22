import { Avatar, Box, CircularProgress, IconButton } from "@mui/material"
import React, { useEffect, useState } from "react"
import { InputStop } from "../components/InputStop"
import { ButtonStop } from "../components/ButtonStop"
import { colors } from "../style/colors"
import { useAvatar } from "../hooks/useAvatar"
import { avatar_list } from "../assets/avatar_list"
import { input_outlined } from "../style/input"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo/logo.png"
import { RiEdit2Fill } from "react-icons/ri"
import { Player, PlayerForm } from "../definitions/Player"
import { useFormik } from "formik"
import { useIo } from "../hooks/useIo"
import { useHost } from "../hooks/useHost"
import { usePlayer } from "../hooks/usePlayer"

interface HallProps {}

const buttons_hall = {
    fontSize: "8vw",
    p: "0 5vw",
    width: "60%",
}

export const Hall: React.FC<HallProps> = ({}) => {
    const io = useIo()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    // const [player, setPlayer] = useState<Player>()
    const { player, setPlayer } = usePlayer()

    const images = avatar_list
    const randomAvatar = (max: number) => {
        return Math.floor(Math.random() * max)
    }
    const random = randomAvatar(images.length)
    const imageSort = images[random]

    const formik = useFormik<PlayerForm>({
        initialValues: {
            name: player?.name || "",
            icon: player?.icon || imageSort,
        },
        onSubmit: (values) => {
            handleSaveName(values)
        },
    })
    const handleSaveName = (values: PlayerForm) => {
        io.emit("player:new", values)
        console.log(values)

        setLoading(true)
    }

    useEffect(() => {
        io.on("player:new:success", (data: Player) => {
            setPlayer(data)
            setLoading(false)
        })

        return () => {
            io.off("player:new:success")
        }
    }, [])

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "fit-content",
                alignItems: "center",
                gap: "10vw",
                padding: "6.5vw",
            }}
        >
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ flexDirection: "column", gap: "4vw", alignItems: "center", width: "100%" }}>
                    <img src={logo} style={{ width: "50%" }} />
                    <Box
                        sx={{
                            background: "linear-gradient(180deg, #25AAE2 0%, #8CC751 52.6%, #F78B29 100%)",
                            p: "2vw",
                            borderRadius: "50%",
                        }}
                    >
                        <Box sx={{ bgcolor: "#fff", p: "0vw", borderRadius: "50%" }}>
                            <Avatar src={formik.values.icon} sx={{ width: "40vw", height: "40vw" }} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "1vw",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                        }}
                    >
                        <InputStop
                            label="Digite seu nome aqui"
                            name="name"
                            sx={{ ...input_outlined, width: "50%" }}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required
                        />
                        <IconButton type="submit">
                            <RiEdit2Fill color="black" style={{ width: "8vw", height: "100%" }} />
                        </IconButton>
                    </Box>
                </Box>
            </form>
            <Box sx={{ flexDirection: "column", width: "100%", alignItems: "center", gap: "2vw" }}>
                <ButtonStop
                    sx={{ ...buttons_hall, bgcolor: colors.button2 }}
                    type="submit"
                    onClick={() => navigate("/random")}
                    disabled={player ? false : true}
                >
                    Sala Aleatória
                </ButtonStop>
                <ButtonStop
                    sx={{ ...buttons_hall, bgcolor: colors.primary }}
                    type="submit"
                    onClick={() => navigate("/rooms")}
                    disabled={player ? false : true}
                >
                    Salas
                </ButtonStop>
                <ButtonStop
                    type="submit"
                    sx={{ ...buttons_hall, bgcolor: colors.secondary }}
                    onClick={() => {
                        navigate(`/new`)
                    }}
                    disabled={player ? false : true}
                >
                    {loading ? <CircularProgress sx={{ color: "#fff" }} /> : "Criar Sala"}
                </ButtonStop>
            </Box>
        </Box>
    )
}
