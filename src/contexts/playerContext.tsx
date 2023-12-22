import { createContext, useState } from "react"
import React from "react"
import { Player } from "../definitions/Player"

interface PlayerContextValue {
    player: Player | undefined
    setPlayer: (value: Player | undefined) => void
}

interface PlayerProviderProps {
    children: React.ReactNode
}

const PlayerContext = createContext<PlayerContextValue>({} as PlayerContextValue)

export default PlayerContext

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
    const [player, setPlayer] = useState<Player | undefined>()

    return <PlayerContext.Provider value={{ player, setPlayer }}>{children}</PlayerContext.Provider>
}
