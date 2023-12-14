import React from "react"
import { Route, Routes as ReacRoutes } from "react-router-dom"

interface RoomProps {}

export const Room: React.FC<RoomProps> = ({}) => {
    return (
        <ReacRoutes>
            <Route path="/:roomid" element={<Room />} />
        </ReacRoutes>
    )
}
