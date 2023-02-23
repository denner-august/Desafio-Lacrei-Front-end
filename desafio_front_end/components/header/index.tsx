import { fontNunito700 } from "fonts";
import { Container } from './HeaderStyles'
import { Navigation } from "functions/navigation";
import { useContext } from "react";
import { Context } from "context/context";

export function Header() {
    const { linkActiveNow } = useContext(Context)

    return (
        <Container linkActive={linkActiveNow} className={fontNunito700.className} >
            <p>Lacrei</p>
            <ul>
                {Navigation()}
            </ul>
        </Container>
    )
}