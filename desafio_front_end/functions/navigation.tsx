import { useContext } from "react";
import { Context } from "context/context";


export function Navigation() {

    const { rotas } = useContext(Context)

    const linkNavigation = ["Home", "Pessoa Usuária", "Profissional"]

    return linkNavigation.map((links, index) => {

        return <a onClick={() => rotas(index)} key={Math.random()}>{links}</a>
    })

}