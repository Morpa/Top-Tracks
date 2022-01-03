import styled, { css } from 'styled-components'

import * as TextFieldStyles from '../../components/TextField/styles'
import * as ButtonStyles from '../../components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;

    ${TextFieldStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const Form = styled.form``
