import { Footer } from "components/footer";
import { Header } from "components/header";
import { Main } from "components/main";

export default function Profissional() {
    return (
        <>
            <Header />
            <Main titulo="Profissional" descricao="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+" buttons={false} />
            <Footer />
        </>
    )
}