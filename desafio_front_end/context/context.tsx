import { ReactNode, createContext, useState } from "react";
import { ContextProviderProps } from "types";

interface contextProps {
    children: ReactNode
}

export const Context = createContext({} as ContextProviderProps)

export function ContextProvider({ children }: contextProps) {

    const [linkActiveNow, setLinkActiveNow] = useState(3)

    return (
        <Context.Provider value={{ linkActiveNow, setLinkActiveNow }}>
            {children}
        </Context.Provider>
    )
}