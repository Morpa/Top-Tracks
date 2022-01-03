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

export type SearchResult = {
  artists: {
    items: Artists[]
  }
}
