import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    text-decoration: none;
    border-radius: ${theme.border.radius};
  `}
`

export const ImageBox = styled.div`
  min-height: 14rem;
  position: relative;
  width: 100%;
  background: #f6f7f8;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 19rem;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xxsmall};
  `}
`

export const Info = styled.span`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.medium};
    max-width: calc(100% - 2.5rem);
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`
