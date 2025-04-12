export interface Streaming {
  name: string
  url: string
}

export interface AnimeDetail {
  mal_id: number
  url: string
  images: { jpg: Image; webp: Image }
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  streaming: Streaming[]
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: Broadcast
  producers: Demographic[]
  licensors: Demographic[]
  studios: Demographic[]
  genres: Demographic[]
  explicit_genres: unknown[]
  themes: Demographic[]
  demographics: Demographic[]
}

export interface Aired {
  from: Date
  to: null
  prop: Prop
  string: string
}

export interface Prop {
  from: From
  to: From
}

export interface From {
  day: number | null
  month: number | null
  year: number | null
}

export interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export interface Demographic {
  mal_id: number
  type: Type
  name: string
  url: string
}

export type Type = "anime"

export interface Image {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Title {
  type: string
  title: string
}

export interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images
}

export interface Images {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}
