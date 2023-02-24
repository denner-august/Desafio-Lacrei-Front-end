import { ReactNode, createContext, useState } from "react";
import { ContextProviderProps } from "types";
import { useRouter } from 'next/router'

interface contextProps {
    children: ReactNode
}

export const Context = createContext({} as ContextProviderProps)

export function ContextProvider({ children }: contextProps) {
    const router = useRouter()

    const [linkActiveNow, setLinkActiveNow] = useState(1)

    function rotas(index: number) {
        switch (index) {
            case 0:
                router.push("/")
                setLinkActiveNow(index + 1)
                break;
            case 1:
                router.push("pessoa-usuaria")
                setLinkActiveNow(index + 1)
                break;

            case 2:
                router.push("profissional")
                setLinkActiveNow(index + 1)
                break;

            default:
                break;
        }
    }

    return (
        <Context.Provider value={{ linkActiveNow, setLinkActiveNow, rotas }}>
            {children}
        </Context.Provider>
    )
}