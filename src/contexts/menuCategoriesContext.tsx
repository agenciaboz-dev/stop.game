import { createContext, useState } from "react"
import React from "react"

interface MenuCategoriesContextValue {
    open: boolean
    setOpen: (value: boolean) => void
}

interface MenuCategoriesProviderProps {
    children: React.ReactNode
}

const MenuCategoriesContext = createContext<MenuCategoriesContextValue>({} as MenuCategoriesContextValue)

export default MenuCategoriesContext

export const MenuCategoriesProvider: React.FC<MenuCategoriesProviderProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <MenuCategoriesContext.Provider value={{ open, setOpen }}>{children}</MenuCategoriesContext.Provider>
}
