import styled, { css } from 'styled-components'

import * as TextFieldStyles from '../../components/TextField/styles'
import * as ButtonStyles from '../../components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.small} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} auto ${theme.spacings.xsmall};
    }
  `}
`
