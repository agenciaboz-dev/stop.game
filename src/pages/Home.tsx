import { Box } from "@mui/material"
import React from "react"
import logo from "../assets/logo/logo.png"
import stop from "../assets/logo/stop.png"
import { ButtonStop } from "../components/ButtonStop"
import { useNavigate } from "react-router-dom"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                alignItems: "center",
                gap: "15vw",
                padding: "3vw",
                pt: "20vw",
            }}
        >
            <img src={logo} style={{ width: "40%" }} />
            <Box sx={{ height: "60%", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                <img src={stop} style={{ width: "100%" }} />
                <Box>
                    <ButtonStop color="primary" onClick={() => navigate("/hall")}>
                        Jogar
                    </ButtonStop>
                </Box>
            </Box>
        </Box>
    )
}
