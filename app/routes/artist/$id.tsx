import { json, LoaderFunction } from 'remix'
import { SpotifyApi } from '~/services/spotify'

export const loader: LoaderFunction = async ({ params }) => {
  const tracks = await SpotifyApi.getTopTracks(params.id as string)

  return json(tracks)
}
