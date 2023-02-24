import { main_descricao_Props } from "types"
import { Descricao } from "./descricao"
import { RenderImage } from "./renderImage"
import { Container } from "./styles/MainStyles"

export function Main({ titulo, descricao, buttons = true }: main_descricao_Props) {
    return (
        <Container>
            <Descricao titulo={titulo} descricao={descricao} buttons={buttons} />
            <RenderImage />
        </Container>
    )
}