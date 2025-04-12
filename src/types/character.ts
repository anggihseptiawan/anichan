export interface CharacterList {
  character: Character
  role: string
  favorites: number
  voice_actors: VoiceActor[]
}

export interface Character {
  mal_id: number
  url: string
  images: CharacterImages
  name: string
}

export interface CharacterImages {
  jpg: Jpg
  webp: Webp
}

export interface Jpg {
  image_url: string
}

export interface Webp {
  image_url: string
  small_image_url: string
}

export interface VoiceActor {
  person: Person
  language: string
}

export interface Person {
  mal_id: number
  url: string
  images: PersonImages
  name: string
}

export interface PersonImages {
  jpg: Jpg
}
