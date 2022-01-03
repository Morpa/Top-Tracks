import { getToken } from '~/utils/auth'

const request = async (url: URL) => {
  const token = await getToken()

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

  return await request(url)
}

export const getTopTracks = async (id: string) => {
  const search = new URLSearchParams({
    market: 'CA'
  })
  const url = new URL(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?${search}`
  )

  return await request(url)
}
