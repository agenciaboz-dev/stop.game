import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"
import { useRoom } from "../hooks/useRoom"
import { Player } from "../definitions/Player"

interface PlayersContextValue {
    list: Player[] | undefined | null
    setList: (value: Player[] | undefined) => void
}

interface PlayersProviderProps {
    children: React.ReactNode
}

const PlayersContext = createContext<PlayersContextValue>({} as PlayersContextValue)

export default PlayersContext

export const PlayersProvider: React.FC<PlayersProviderProps> = ({ children }) => {
    const io = useIo()
    const { room, setRoom } = useRoom()

    const [list, setList] = useState<Player[] | undefined>([])

    useEffect(() => {
        io.emit("room:players", room?.id)
    }, [])

    useEffect(() => {
        io.on("room:players:success", () => {
            console.log("entrou")
            console.log(room?.players)
            setList(room?.players)
            console.log("listaaaaaa", list)
        })
        return () => {
            io.off("room:players:success")
        }
    }, [list])

    return <PlayersContext.Provider value={{ list, setList }}>{children}</PlayersContext.Provider>
}
