import { Footer } from "components/footer";
import { Header } from "components/header";
import { Main } from "components/main";

import { imagens } from "context/imagens";

import { Container } from '../styles/Usuaria_Profissioanal.styles'


export default function Profissional() {
    return (
        <Container>
            <Header />
            <Main titulo="Profissional" descricao="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+" buttons={false}
                imagem={imagens.imagem3} />

            <Footer />
        </Container>
    )
}