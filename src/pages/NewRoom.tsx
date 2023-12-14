import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
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
import { Player } from "../definitions/Player"
import { useId } from "@mantine/hooks"
import { CreateRoom } from "../definitions/NewRoom"

interface NewRoomProps {}

export const NewRoom: React.FC<NewRoomProps> = ({}) => {
    const navigate = useNavigate()

    const [privacy, setPrivacy] = useState("Pública")

    const formik = useFormik<CreateRoom>({
        initialValues: {
            name: "",
            host:"",
            password: "",
        },
        onSubmit: (values: CreateRoom) => {
            handleNewRoom(values)
            console.log(values)
        },
    })
    const handleNewRoom = (values: CreateRoom) => {
        navigate(`/room/${1}`)

        console.log(values)
    }

    useEffect(() => {
        console.log(privacy)
    }, [privacy])
    return (
        <Box sx={{ alignItems: "center", flexDirection: "column", gap: "8vw ", width: "100%" }}>
            <img src={logo} style={{ width: "40%" }} />
            <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
                <Box
                    sx={{
                        p: "5vw 0vw",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "80%",
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
                            p: "15vw 4vw",
                            bgcolor: colors.secondary,
                            width: "100%",
                            height: "100%",
                            borderRadius: "4vw",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "2vw",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "30%",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "3vw",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "8vw",
                                    color: "#fff",
                                    fontWeight: "600",
                                    fontFamily: "KG",
                                    letterSpacing: "0.6vw",
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
                                height: "35%",
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
                                    height: "30%",
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
                        <ButtonStop sx={{ bgcolor: colors.buttonSave, fontSize: "7vw", borderRadius: "5vw" }} type="submit">
                            Criar
                        </ButtonStop>
                        <ButtonStop
                            sx={{ bgcolor: colors.buttonSave, fontSize: "5vw", borderRadius: "5vw", p: "0 1vw" }}
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
