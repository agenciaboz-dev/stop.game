import React, { useEffect, useState } from "react"
import { Box, CircularProgress } from "@mui/material"
import { InputStop } from "../components/InputStop"
import { colors } from "../style/colors"
import { input } from "../style/input"
import { title } from "../style/title"
import logo from "../assets/logo/logo.png"
import { SegmentedControl } from "@mantine/core"
import classes from "../style/switch.module.css"
import { ButtonStop } from "../components/ButtonStop"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { Room } from "../definitions/Room"
import { CreateRoom } from "../definitions/NewRoom"
import { useHost } from "../hooks/useHost"
import { useIo } from "../hooks/useIo"
import { useRoom } from "../hooks/useRoom"

interface NewRoomProps {}

export const NewRoom: React.FC<NewRoomProps> = ({}) => {
    const navigate = useNavigate()
    const { host, setHost } = useHost()
    const { room, setRoom } = useRoom()
    const io = useIo()

    const [privacy, setPrivacy] = useState("Pública")
    const [loading, setLoading] = useState(false)

    const formik = useFormik<CreateRoom>({
        initialValues: {
            name: "",
            // host: host,
            password: "",
        },
        onSubmit: (values: CreateRoom) => {
            handleNewRoom(values)
            console.log(values)
        },
    })
    const handleNewRoom = (values: CreateRoom) => {
        if (host) {
            io.emit("room:new", values, host)
            setLoading(true)
        }
    }

    useEffect(() => {
        io.on("room:new:success", (newRoom: Room) => {
            setRoom({ newRoom })
            console.log("aqui", { room })
            setLoading(false)
            navigate(`/room/${{ newRoom }}`)
        })

        return () => {
            io.off("room:new:success")
        }
    })

    useEffect(() => {
        console.log(privacy)
    }, [privacy])
    return (
        <Box sx={{ alignItems: "center", flexDirection: "column", gap: "1vw ", width: "100%", p: "2vw 4vw" }}>
            <img src={logo} style={{ width: "30%" }} />
            <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
                <Box
                    sx={{
                        p: "5vw 0vw",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "fit-content",
                        width: "100%",
                        flexDirection: "column",
                        gap: "2vw ",
                    }}
                >
                    <p
                        style={{
                            ...title,
                            color: colors.secondary,
                        }}
                    >
                        CRIAR SALA
                    </p>

                    <Box
                        sx={{
                            alignItems: "center",
                            p: "4vw 4vw",
                            bgcolor: colors.secondary,
                            width: "100%",
                            height: "fit-content",
                            borderRadius: "4vw",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "2vw",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "fit-content",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "0vw",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "8vw",
                                    color: "#fff",
                                    fontWeight: "600",
                                    fontFamily: "KG",
                                    letterSpacing: "0.6vw",
                                    margin: 0,
                                }}
                            >
                                Nome da sala
                            </p>
                            <InputStop
                                sx={{ ...input, width: "70%" }}
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </Box>
                        <Box
                            sx={{
                                height: "fit-content",
                                width: "100%",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "2vw",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "8vw",
                                    color: "#fff",
                                    fontWeight: "600",
                                    fontFamily: "KG",
                                    letterSpacing: "0.6vw",
                                    margin: 0,
                                }}
                            >
                                Privacidade
                            </p>
                            <SegmentedControl
                                radius="xl"
                                size="md"
                                data={["Pública", "Privada"]}
                                value={privacy}
                                onChange={setPrivacy}
                                style={{
                                    "[data-mantine-color-scheme=light] .m-1738fcb2[data-active]": {
                                        fontFamily: "KG",
                                    },
                                }}
                                classNames={classes}
                            />
                        </Box>
                        {privacy == "Privada" && (
                            <Box
                                sx={{
                                    height: "fit-content",
                                    width: "100%",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "2vw",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "8vw",
                                        color: "#fff",
                                        fontWeight: "600",
                                        fontFamily: "KG",
                                        letterSpacing: "0.6vw",
                                        margin: 0,
                                    }}
                                >
                                    Insira uma senha
                                </p>

                                <InputStop
                                    sx={{ ...input, width: "70%" }}
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </Box>
                        )}
                        <ButtonStop sx={{ bgcolor: colors.buttonSave, fontSize: "8vw", borderRadius: "5vw" }} type="submit">
                            {loading ? <CircularProgress sx={{ color: "#fff", width: "2vw", height: "3vw" }} /> : "Criar"}
                        </ButtonStop>
                        <ButtonStop
                            sx={{ bgcolor: colors.buttonSave, fontSize: "7vw", borderRadius: "5vw", p: "0 4vw" }}
                            onClick={() => {
                                navigate("/hall")
                            }}
                        >
                            Voltar
                        </ButtonStop>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}
