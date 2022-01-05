import pick from 'lodash.pick'
import invariant from 'tiny-invariant'
import { getToken } from '~/utils/auth'
import { Types } from '.'

const request = async (url: URL) => {
  const token = await getToken()
  invariant(url, 'Please provide an url as a string')

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return await response.json()
}

export const getSearch = async (query: string | null) => {
  const search = new URLSearchParams({
    q: query || '',
    type: 'artist'
  })
  const url = new URL(`https://api.spotify.com/v1/search?${search}`)

  const { artists } = await request(url)

  return artists.items.map((artist: Types.SearchResult) =>
    pick(artist, ['id', 'name', 'images', 'popularity'])
  )
}

export const getTopTracks = async (id: string) => {
  const search = new URLSearchParams({
    market: 'CA'
  })
  const url = new URL(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?${search}`
  )

  const { tracks } = await request(url)

  return tracks.map((track: Types.TopTracks) =>
    pick(track, ['id', 'name', 'external_urls', 'album', 'preview_url'])
  )
}
