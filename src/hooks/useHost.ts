import { useContext } from "react"
import HostContext from "../contexts/hostContext"

export const useHost = () => {
    const hostContext = useContext(HostContext)

    return { ...hostContext }
}
