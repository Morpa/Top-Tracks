import { LoaderFunction, json, useLoaderData } from 'remix'
import { ArtistCard } from '~/components/ArtistCard'
import { Grid } from '~/components/Grid'
import { SpotifyApi } from '~/services/spotify'
import { Types } from '~/services/spotify'
import { Base } from '~/templates/Base'

export const loader: LoaderFunction = async ({ request }) => {
  const search = new URL(request.url).searchParams
  const result = await SpotifyApi.getSearch(search.get('query'))

  return json(result)
}

export default function () {
  const { artists } = useLoaderData<Types.SearchResult>()
  return (
    <Base>
      <Grid>
        {artists.items
          .filter(
            (artist) => artist.images.length > 0 && artist.popularity > 10
          )
          .map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              title={artist.name}
              image_url={artist.images[0].url}
            />
          ))}
      </Grid>
    </Base>
  )
}
