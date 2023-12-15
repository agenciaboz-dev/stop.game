import { useContext } from "react"
import MenuPlayersContext from "../contexts/menuPlayersContext"

export const useMenuDrawerPlayers = () => {
    const menuDrawerContext = useContext(MenuPlayersContext)

    const toggle = () => {
        menuDrawerContext.setOpen(!menuDrawerContext.open)
    }

    return { ...menuDrawerContext, toggle }
}
