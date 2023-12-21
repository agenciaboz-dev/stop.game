import React from "react"
import { Routes as ReacRoutes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@mui/material"
import { Hall } from "./pages/Hall"
import { NewRoom } from "./pages/NewRoom"
import { RoomList } from "./pages/RoomList"
import { Room } from "./pages/Room"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <Box sx={{ display: "flex", width: "100%", p: "4vw", height: "100%", alignSelf: "center" }}>
            <ReacRoutes>
                <Route index element={<Home />} />
                <Route path="/*" element={<Hall />} />
                <Route path="/hall" element={<Hall />} />
                <Route path="/new/*" element={<NewRoom />} />
                <Route path="/rooms" element={<RoomList />} />
                <Route path="/random" element={<RoomList />} />
                <Route path="/room/*" element={<Room />} />
            </ReacRoutes>
        </Box>
    )
}
