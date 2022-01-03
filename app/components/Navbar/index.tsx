import { Link } from 'remix'
import { Heading } from '../Heading'
import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <Link to="/">
      <Heading size="huge">TOP TRACKS</Heading>
    </Link>
  </S.Wrapper>
)

export default Navbar
