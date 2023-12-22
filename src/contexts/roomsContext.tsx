import { createContext, useEffect, useState } from "react"
import React from "react"
import { Room } from "../definitions/Room"
import { useIo } from "../hooks/useIo"

interface RoomsContextValue {
    list: Room[] | null | undefined
    setList: (value: Room[] | null) => void
}

interface RoomsProviderProps {
    children: React.ReactNode
}

const RoomsContext = createContext<RoomsContextValue>({} as RoomsContextValue)

export default RoomsContext

export const RoomsProvider: React.FC<RoomsProviderProps> = ({ children }) => {
    const [list, setList] = useState<Room[] | null>([])
    const io = useIo()

    useEffect(() => {
        io.emit("room:list")
    }, [])

    useEffect(() => {
        io.on("room:list:success", (newList) => {
            // console.log(newList)
            setList(newList)
            console.log(list)
        })

        return () => {
            io.off("room:list:success")
        }
    }, [list])

    return <RoomsContext.Provider value={{ list, setList }}>{children}</RoomsContext.Provider>
}
