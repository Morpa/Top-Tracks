type Image = {
  height: number
  url: string
  width: number
}

type Artists = {
  id: string
  name: string
  images: Image[]
  popularity: number
}
export namespace Artists {
  export type LoaderData = {
    id: string
    name: string
    images: Image[]
    popularity: number
  }
}

export type SearchResult = {
  items: Artists[]
}

type Album = {
  images: Image[]
}

export type Tracks = {
  name: string
  preview_url: string
  album: Album
  spotify: string
}

export type TopTracks = {
  items: Tracks[]
}

export namespace Tracks {
  export type LoaderData = {
    id: string
    name: string
    preview_url: string
    album: Album
    spotify: string
    external_urls: {
      spotify: string
    }
  }
}
