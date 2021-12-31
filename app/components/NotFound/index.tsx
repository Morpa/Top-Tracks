import Button from '../Button'
import { Heading } from '../Heading'
import * as S from './styles'

export const NotFound = () => (
  <S.Wrapper>
    <S.Image src="/img/notfound.png" alt="Um cachorrinho dormindo" />

    <Heading color="white" lineBottom lineColor="secondary" size="medium">
      Página não encontrada
    </Heading>

    <Button as="a" href="/">
      Voltar página inicial
    </Button>
  </S.Wrapper>
)
