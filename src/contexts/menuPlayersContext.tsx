import { createContext, useState } from "react"
import React from "react"

interface MenuPlayersContextValue {
    open: boolean
    setOpen: (value: boolean) => void
}

interface MenuPlayersProviderProps {
    children: React.ReactNode
}

const MenuPlayersContext = createContext<MenuPlayersContextValue>({} as MenuPlayersContextValue)

export default MenuPlayersContext

export const MenuPlayersProvider: React.FC<MenuPlayersProviderProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <MenuPlayersContext.Provider value={{ open, setOpen }}>{children}</MenuPlayersContext.Provider>
}
