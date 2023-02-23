import { Container } from '@/styles/Home'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { Main } from 'components/main'
import { ContextProvider } from 'context/context'

export default function Home() {
  return (
    <ContextProvider>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ContextProvider>

  )
}
