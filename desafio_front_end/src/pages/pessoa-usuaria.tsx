import { Footer } from "components/footer";
import { Header } from "components/header";
import { Main } from "components/main";

import { imagens } from "context/imagens";

import { Container } from '../styles/Usuaria_Profissioanal.styles'

export default function Pessoa_usuaria() {

    return (
        <Container>
            <Header />
            <Main titulo="Pessoa Usuária" descricao="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
                buttons={false} imagem={imagens.imagem2} />
            <Footer />
        </Container>
    )
}