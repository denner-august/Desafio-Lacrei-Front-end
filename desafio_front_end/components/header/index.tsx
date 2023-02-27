import { Container } from './HeaderStyles'
import { Navigation } from "functions/navigation";
import { useContext } from "react";
import { Context } from "context/context";

export function Header() {
    const { linkActiveNow } = useContext(Context)

    return (
        <Container linkActive={linkActiveNow} >
            <p>Lacrei</p>
            <ul>
                {Navigation()}
            </ul>
        </Container>
    )
}