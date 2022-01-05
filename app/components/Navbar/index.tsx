import { Heading } from '../Heading'
import * as S from './styles'

export const Navbar = () => (
  <S.Wrapper>
    <S.Link href="/">
      <Heading size="huge" lineBottom color="white" lineColor="secondary">
        TOP TRACKS
      </Heading>
    </S.Link>
  </S.Wrapper>
)
