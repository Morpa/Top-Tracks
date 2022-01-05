import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const TopTracksGrid = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 25rem;

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xxlarge};
    `}
  `}
`
