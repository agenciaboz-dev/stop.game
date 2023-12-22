import { useContext } from "react"
import PlayersContext from "../contexts/playersContext"

export const usePlayers = () => {
    const playersContext = useContext(PlayersContext)

    return { ...playersContext }
}
