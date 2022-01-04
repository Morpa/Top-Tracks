import Button from '../Button'
import { Heading } from '../Heading'
import * as S from './styles'

export const ErrorPage = () => (
  <S.Wrapper>
    <S.Image src="/img/error.png" alt="Um robo quebrado" />

    <Heading color="white" lineBottom lineColor="secondary" size="medium">
      Algo deu errado. Tente novamente mais tarde!
    </Heading>

    <Button as="a" href="/">
      Voltar página inicial
    </Button>
  </S.Wrapper>
)
