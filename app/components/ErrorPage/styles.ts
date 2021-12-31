import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '../Heading/styles'
import * as ButtonStyles from '../Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      ${HeadingStyles.Wrapper} {
        font-size: ${theme.font.sizes.medium};
      }
      ${ButtonStyles.Wrapper} {
        font-size: ${theme.font.sizes.xsmall};
      }
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      width:90%;
    `}
  `}
`
