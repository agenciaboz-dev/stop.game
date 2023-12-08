import React from "react"
import { Routes as ReacRoutes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@mui/material"
import { Hall } from "./pages/Hall"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <Box sx={{ display: "flex", width: "100%",p:"15vw", height: "100%", alignSelf: "center", }}>
            <ReacRoutes>
                <Route index element={<Home />} />
                <Route path="/*" element={<Home />} />
                <Route path="/hall" element={<Hall />} />
            </ReacRoutes>
        </Box>
    )
}
