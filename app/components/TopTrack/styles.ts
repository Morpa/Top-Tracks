import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};
    text-decoration: none;
    padding: ${theme.spacings.small};
    position: relative;
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    color: ${theme.colors.white};

    svg {
      width: 4rem;
    }
  `}
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  width: 12rem;
  height: 12rem;
`
export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`
