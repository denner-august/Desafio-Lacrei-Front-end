import { Container } from '@/styles/Home'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { Main } from 'components/main'

export default function Home() {
  return (

    <Container>
      <Header />
      <Main titulo='Boas vindas a Lacrei Saúde' descricao="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+" buttons={true} />
      <Footer />
    </Container>

  )
}
