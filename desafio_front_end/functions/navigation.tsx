import { Context } from "context/context";
import { useContext } from "react";

export function Navigation() {
    const { setLinkActiveNow } = useContext(Context)
    const linkNavigation = ["Home", "Pessoa Usuária", "Profissional"]

    return linkNavigation.map((links, index) => {
        return <a onClick={() => setLinkActiveNow(index + 1)} key={Math.random()}>{links}</a>
    })

}