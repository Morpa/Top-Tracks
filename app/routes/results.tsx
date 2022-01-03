import { LoaderFunction, json, useLoaderData, Link } from 'remix'
import { ArtistCard } from '~/components/ArtistCard'
import { Grid } from '~/components/Grid'
import { getSearch } from '~/services/spotify/Spotify.api'
import { SearchResult } from '~/services/spotify/Spotify.types'
import { Base } from '~/templates/Base'

export const loader: LoaderFunction = async ({ request }) => {
  const search = new URL(request.url).searchParams
  const result = await getSearch(search.get('query'))

  return json(result)
}

export default function () {
  const data = useLoaderData<SearchResult>()
  return (
    <Base>
      <Grid>
        {data.artists.items
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
