import { createContext, useState } from "react"
import React from "react"
import { Player } from "../definitions/Player"

export interface HostC {}

interface HostContextValue {
    host: Player | null | undefined
    setHost: (host: Player | null) => void
}

interface HostProviderProps {
    children: React.ReactNode
}

const HostContext = createContext<HostContextValue>({} as HostContextValue)

export default HostContext

export const HostProvider: React.FC<HostProviderProps> = ({ children }) => {
    const [host, setHost] = useState<Player | null>()

    

    return <HostContext.Provider value={{ host, setHost }}>{children}</HostContext.Provider>
}
