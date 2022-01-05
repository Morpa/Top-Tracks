import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
  `}
`

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`
