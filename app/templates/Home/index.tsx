import { Search } from '@styled-icons/material-outlined'
import { useState } from 'react'
import Button from '~/components/Button'
import { TextField } from '~/components/TextField'
import * as S from './styles'

export const Home = () => {
  const [query, setQuery] = useState('')

  const handleInput = (value: string) => {
    setQuery(value)
  }

  return (
    <S.Wrapper>
      <form action="results">
        <TextField
          name="query"
          placeholder="Enter the name of the artist you want to search for"
          onInputChange={(value) => handleInput(value)}
          icon={<Search />}
        />
        <Button fullWidth size="large" type="submit" disabled={!query}>
          Search
        </Button>
      </form>
    </S.Wrapper>
  )
}
