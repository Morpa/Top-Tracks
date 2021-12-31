import { Heading } from '../Heading'
import * as S from './styles'

export const ErrorPage = () => (
  <S.Wrapper>
    <S.Image src="/img/error.png" alt="Um robo quebrado" />

    <Heading color="white" lineBottom lineColor="secondary" size="medium">
      Algo deu errado. Tente novamente mais tarde!
    </Heading>
  </S.Wrapper>
)
