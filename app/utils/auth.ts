import dotenv from 'dotenv'

dotenv.config()

const state = {
  token: null,
  expires: 0
}

export const getToken = async () => {
  const now = Math.round(new Date().getTime() / 1000)
  const remaining = state.expires - now

  if (remaining <= 60) {
    state.token = null
    state.expires = 0
  }

  if (state.expires === 0) {
    const { access_token, expires_in } = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ':' +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
      }
    ).then((response) => response.json())

    state.token = access_token
    state.expires = now + expires_in
  }

  return state.token
}
