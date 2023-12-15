import { useContext } from "react"
import MenuCategoriesContext from "../contexts/menuCategoriesContext"

export const useMenuDrawerCategories = () => {
    const menuDrawerContext = useContext(MenuCategoriesContext)

    const toggle = () => {
        menuDrawerContext.setOpen(!menuDrawerContext.open)
    }

    return { ...menuDrawerContext, toggle }
}
