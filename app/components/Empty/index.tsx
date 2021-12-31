import Button from '../Button'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

export const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.png"
      alt="Um computador com uma lupa a frente"
      role="img"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Button as="a" href="/jobs">
        Voltar
      </Button>
    )}
  </S.Wrapper>
)
