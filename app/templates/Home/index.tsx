import Button from '~/components/Button'
import { TextField } from '~/components/TextField'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Form action="results">
        <TextField
          name="query"
          placeholder="Enter the name of the artist you want to search for"
        />
        <Button fullWidth type="submit">
          Search
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}
