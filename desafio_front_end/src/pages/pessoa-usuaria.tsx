import { Footer } from "components/footer";
import { Header } from "components/header";
import { Main } from "components/main";

export default function Pessoa_usuaria() {
    return (
        <>
            <Header />
            <Main titulo="Pessoa Usuária" descricao="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
                buttons={false} />
            <Footer />
        </>
    )
}