import { Link } from 'remix'
import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <Link to="/">
      <img
        src="/img/logo.png"
        alt="Um círculo com as cores do Brasil"
        aria-label="frontend-br"
      />
    </Link>
  </S.Wrapper>
)

export default Navbar
