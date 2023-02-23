import { Navigation } from "functions/navigation";
import { Container } from "./footerStyles";
import { useContext } from "react";
import { Context } from "context/context";

export function Footer() {

    const { linkActiveNow } = useContext(Context)

    return (
        <Container linkActive={linkActiveNow}>
            <ul>
                {Navigation()}
            </ul>

            <h1>imagem</h1>

            <p>Desafio Front-end Lacrei</p>
        </Container>
    )
}