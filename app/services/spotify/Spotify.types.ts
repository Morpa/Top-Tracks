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
