import { LoaderFunction, json, useLoaderData, MetaFunction } from 'remix'
import { ArtistCard } from '~/components/ArtistCard'
import { Grid } from '~/components/Grid'
import { NotFound } from '~/components/NotFound'
import { SpotifyApi } from '~/services/spotify'
import { Types } from '~/services/spotify'
import { Base } from '~/templates/Base'

export const loader: LoaderFunction = async ({ request }) => {
  const search = new URL(request.url).searchParams
  const result = await SpotifyApi.getSearch(search.get('query'))

  return json(result)
}

export const meta: MetaFunction = () => {
  return {
    title: 'Top Tracks Results'
  }
}

export default function () {
  const data = useLoaderData<Types.Artists.LoaderData[]>()

  return (
    <Base>
      {!data.length && <NotFound />}

      <Grid>
        {!!data.length &&
          data
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
