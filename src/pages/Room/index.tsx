import React from "react"
import { Route, Routes as ReacRoutes } from "react-router-dom"
import { HallRoom } from "./HallRoom"
import { Box } from "@mui/material"
import { Round } from "./Round"

interface RoomProps {}

export const Room: React.FC<RoomProps> = ({}) => {
    return (
        <Box sx={{ p: "0vw", width: "100%" }}>
            <ReacRoutes>
                <Route path="/:roomid" element={<HallRoom />} />
                <Route path="/:roomid/round" element={<Round />} />
            </ReacRoutes>
        </Box>
    )
}
