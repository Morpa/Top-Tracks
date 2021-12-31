import { Container } from '~/components/Container'
import Navbar from '~/components/Navbar'

export type BaseTemplateProps = {
  children: React.ReactNode
  hasNavbar?: boolean
}

export const Base = ({ children, hasNavbar = false }: BaseTemplateProps) => (
  <Container>
    {hasNavbar && <Navbar />}
    {children}
  </Container>
)
