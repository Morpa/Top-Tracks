import { Link } from 'remix'
import { Heading } from '../Heading'
import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <Link to="/">
      <Heading size="huge" lineBottom color="white" lineColor="secondary">
        TOP TRACKS
      </Heading>
    </Link>
  </S.Wrapper>
)

export default Navbar
