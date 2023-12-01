import { Box, Button } from "@mui/material"
import React from "react"
import logo from "../assets/logo/logo.png"
import stop from "../assets/logo/stop.png"
import { colors } from "../style/colors"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                alignItems: "center",
                gap: "10vw",
                padding: "3vw",
                // bgcolor: "green",
            }}
        >
            <img src={logo} style={{ width: "40%" }} />
            <Box sx={{ height: "80%", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                <img src={stop} style={{ width: "100%" }} />
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: "100%",
                            borderRadius: "7vw",
                            p: "4vw",
                            color: colors.text.terciary,
                            textTransform: "none",
                            fontSize: "6vw",
                        }}
                    >
                        Jogar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
