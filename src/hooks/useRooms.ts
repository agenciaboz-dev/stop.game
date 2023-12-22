import { useContext } from "react"
import RoomsContext from "../contexts/roomsContext"

export const useRooms = () => {
    const roomsContext = useContext(RoomsContext)

    return { ...roomsContext }
}
