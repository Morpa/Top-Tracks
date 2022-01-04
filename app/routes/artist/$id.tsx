import { useEffect, useRef, useState } from 'react'
import { json, useLoaderData, Link, LoaderFunction } from 'remix'
import { SpotifyApi, Types } from '~/services/spotify'

export const loader: LoaderFunction = async ({ params }) => {
  const tracks = await SpotifyApi.getTopTracks(params.id as string)

  return json(tracks)
}

export const Tracks = () => {
  /* const [image] = props.album.images
  const audioRef = useRef()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.pause()
    audioRef.current.src = props.preview_url
  }, [props.preview_url])

  const data = useLoaderData<Types.SearchResult>()
  return <div>oi</div> */
}
