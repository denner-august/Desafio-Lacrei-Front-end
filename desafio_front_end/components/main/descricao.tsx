import { useContext } from "react";
import { Container } from "./styles/descricaoStyles";
import { Context } from "context/context";
import { fontNunito400, fontNunito700 } from "fonts";

interface DescricaoProps {
    titulo: string;
    descricao: string,
    buttons: boolean
}

export function Descricao({ titulo, descricao, buttons }: DescricaoProps) {
    const { setLinkActiveNow } = useContext(Context)

    return (
        <Container className="Descricao">
            <h1 className={fontNunito700.className}>{titulo}</h1>
            <p className={fontNunito400.className}>{descricao}</p>
            {buttons === true ? <div>
                <button onClick={() => setLinkActiveNow(2)}>Pessoa Usuária</button>
                <button onClick={() => setLinkActiveNow(3)}>Profissional</button>
            </div> : null}
        </Container>
    )
}