import { Container } from '~/components/Container'
import { Navbar } from '~/components/Navbar'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => (
  <Container>
    <Navbar />
    {children}
  </Container>
)
