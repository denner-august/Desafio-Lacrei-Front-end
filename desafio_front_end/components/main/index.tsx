import { main_descricao_Props } from "types"
import { Descricao } from "./descricao"
import { RenderImage } from "./renderImage"
import { Container } from "./styles/MainStyles"

import { imagens } from "context/imagens"


export function Main({ titulo, descricao, buttons = true, imagem = imagens.imagem1 }: main_descricao_Props) {

    return (
        <Container>
            <Descricao titulo={titulo} descricao={descricao} buttons={buttons} />
            <RenderImage imagem={imagem} />
        </Container>
    )
}