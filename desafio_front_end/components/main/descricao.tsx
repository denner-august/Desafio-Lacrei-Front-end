import { useContext } from "react";
import { Container } from "./styles/descricaoStyles";
import { Context } from "context/context";
import { fontNunito400, fontNunito700 } from "fonts";
import { main_descricao_Props } from "types";

export function Descricao({ titulo, descricao, buttons }: main_descricao_Props) {
    const { rotas } = useContext(Context)

    return (
        <Container className="Descricao">
            <h1 className={fontNunito700.className}>{titulo}</h1>
            <p className={fontNunito700.className}>{descricao}</p>
            {buttons === true ? <div>
                <button onClick={() => rotas(1)}>Pessoa Usuária</button>
                <button onClick={() => rotas(2)}>Profissional</button>
            </div> : null}
        </Container>
    )
}