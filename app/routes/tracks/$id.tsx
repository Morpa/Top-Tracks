import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { TopTracksGrid } from '~/components/TopTracksGrid'
import { TopTrack } from '~/components/TopTrack'
import { SpotifyApi, Types } from '~/services/spotify'
import { Base } from '~/templates/Base'

export const loader: LoaderFunction = async ({ params }) => {
  const tracks = await SpotifyApi.getTopTracks(params.id as string)

  return json(tracks)
}

export const meta: MetaFunction = () => {
  return {
    title: 'Top Tracks Results'
  }
}

export default function () {
  const data = useLoaderData<Types.Tracks.LoaderData[]>()
  return (
    <Base>
      <TopTracksGrid>
        {data.slice(0, 5).map((track) => (
          <TopTrack
            key={track.id}
            title={track.name}
            image_url={track.album.images[0].url}
            spotify_url={track.preview_url}
            external_urls={track.external_urls}
          />
        ))}
      </TopTracksGrid>
    </Base>
  )
}
