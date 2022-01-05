import { useEffect, useRef, useState } from 'react'
import { Pause } from '@styled-icons/ionicons-solid/Pause'
import { Play } from '@styled-icons/ionicons-solid/Play'

import * as S from './styles'

export type TopTrackProps = {
  title: string
  image_url: string
  spotify_url: string
  external_urls: {
    spotify: string
  }
}

export const TopTrack = ({
  image_url,
  title,
  spotify_url,
  external_urls
}: TopTrackProps) => {
  const audioRef = useRef<HTMLAudioElement>()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.pause()
    audioRef.current.src = spotify_url
  }, [spotify_url])

  const handlePlay = () => {
    if (playing) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setPlaying(!playing)
  }

  return (
    <S.Wrapper>
      <S.ImageWrapper onClick={handlePlay}>
        <S.Image src={image_url} alt={title} />
        <S.IconsWrapper>
          {playing ? (
            <Pause aria-label="Pause Button" />
          ) : (
            <Play aria-label="Play Button" />
          )}
        </S.IconsWrapper>
      </S.ImageWrapper>
      <S.Link href={external_urls.spotify}>{title}</S.Link>
    </S.Wrapper>
  )
}
