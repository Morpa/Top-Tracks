import * as S from './styles'

export type ArtistCardProps = {
  id: string
  title: string
  image_url: string
}

export const ArtistCard = ({ id, title, image_url }: ArtistCardProps) => (
  <S.Wrapper href={`artist/${id}`}>
    <S.ImageBox>
      <S.Image src={image_url} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>{title}</S.Info>
    </S.Content>
  </S.Wrapper>
)
