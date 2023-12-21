import { createContext, useState } from "react"
import React from "react"

export interface Room {}

interface RoomContextValue {
    room: Room | null | undefined
    setRoom: (value: Room | null) => void
}

interface RoomProviderProps {
    children: React.ReactNode
}

const RoomContext = createContext<RoomContextValue>({} as RoomContextValue)

export default RoomContext

export const RoomProvider: React.FC<RoomProviderProps> = ({ children }) => {
    const [room, setRoom] = useState<Room | null>()

    return <RoomContext.Provider value={{ room, setRoom }}>{children}</RoomContext.Provider>
}
