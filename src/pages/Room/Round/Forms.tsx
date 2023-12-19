import { Box, Button, Grid, LinearProgress } from "@mui/material"
import React, { useEffect } from "react"
import { colors } from "../../../style/colors"
import { InputStop } from "../../../components/InputStop"
import { input } from "../../../style/input"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface FormsProps {}

export const Forms: React.FC<FormsProps> = ({}) => {
    const navigate = useNavigate()
    const [progress, setProgress] = React.useState(0)
    const [buffer, setBuffer] = React.useState(10)

    const progressRef = React.useRef(() => {})
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0)
                setBuffer(10)
            } else {
                const diff = Math.random() * 10
                const diff2 = Math.random() * 10
                setProgress(progress + diff)
                setBuffer(progress + diff + diff2)
            }
        }
    })

    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current()
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, ease: "easeOut" }}>
            <Box>
                <Box
                    sx={{
                        width: "90%",
                        height: "80%",
                        bgcolor: colors.primary,
                        borderRadius: "4vw",
                        position: "absolute",
                        p: "4vw",
                        flexDirection: "column",
                        gap: "4vw",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Animal</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Comida</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Carro</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Objeto</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Roupa</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Filme</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Musica</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                <p style={{ margin: 0, color: "#000", fontFamily: "KG", fontSize: "7vw" }}>Banda</p>
                                <InputStop sx={{ ...input }} />
                            </Box>
                        </Grid>
                    </Grid>
                    <LinearProgress
                        variant="buffer"
                        value={progress}
                        sx={{ bgcolor: colors.button, height: "4vw", borderRadius: "2vw" }}
                        valueBuffer={buffer}
                        color="secondary"
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "red",
                        width: "30vw",
                        height: "30vw",
                        borderRadius: "20vw",
                        fontFamily: "KG",
                        fontWeight: "800",
                        fontSize: "12vw",
                        color: "#fff",
                        alignSelf: "center",
                    }}
                    onClick={() => navigate("avaliate")}
                >
                    STOP
                </Button>
            </Box>
        </motion.div>
    )
}
