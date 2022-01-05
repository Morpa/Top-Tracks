import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    text-decoration: none;
    padding: ${theme.spacings.xxlarge};
    position: relative;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
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
      cursor: pointer;
    }
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
  `}
`

export const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  width: 12rem;
  height: 12rem;

  ${media.lessThan('medium')`
    width: 6rem;
    height: 6rem;
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-left: 10rem;

    ${media.lessThan('medium')`
      margin-left: ${theme.spacings.large};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
