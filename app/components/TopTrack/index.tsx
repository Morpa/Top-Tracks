import { useState } from 'react'
import { Pause } from '@styled-icons/ionicons-solid/Pause'
import { Play } from '@styled-icons/ionicons-solid/Play'

import * as S from './styles'

export type TopTrackProps = {
  title: string
  image_url: string
  spotify_url: string
}

export const TopTrack = ({ image_url, title, spotify_url }: TopTrackProps) => {
  const [playing, setPlaying] = useState(false)

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={image_url} alt={title} />
        <S.IconsWrapper>{playing ? <Pause /> : <Play />}</S.IconsWrapper>
      </S.ImageWrapper>
      <S.Link href={spotify_url}>{title}</S.Link>
    </S.Wrapper>
  )
}
