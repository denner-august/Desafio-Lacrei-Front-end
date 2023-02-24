import { Descricao } from "./descricao"
import { RenderImage } from "./renderImage"
import { Container } from "./styles/MainStyles"

export function Main() {
    return (
        <Container>
            <Descricao titulo="Boas vindas a Lacrei Saúde" descricao="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+" buttons={true} />
            <RenderImage />
        </Container>
    )
}