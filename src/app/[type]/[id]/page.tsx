import { Dot } from "lucide-react"
import { Button } from "~/components/ui/button"
import { http } from "~/lib/http"
import type { APIResponse } from "~/types/api"
import type { AnimeDetail } from "~/types/anime"
import { tryCatch } from "~/utils/tryCatch"
import { CharacterList } from "~/types/character"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; type: "anime" | "manga" }>
}) {
  const id = (await params).id
  const type = (await params).type
  const { data, error } = await tryCatch<AnimeDetail>(
    http<Omit<APIResponse<AnimeDetail>, "pagination">>(
      `${type}/${id}/full`
    ).then((r) => r.data.data)
  )
  const { data: characters, error: errorCharacters } = await tryCatch<
    CharacterList[]
  >(
    http<Omit<APIResponse<CharacterList[]>, "pagination">>(
      `${type}/${id}/characters`
    ).then((r) => r.data.data.filter((_, idx) => idx < 10))
  )

  if (error || errorCharacters) return <p>Could&apos; find the data!</p>

  return (
    <div className="space-y-6">
      <div className="relative w-full aspect-[12/4.5] min-h-max">
        <img
          src={
            type === "anime"
              ? data.trailer.images.maximum_image_url
              : data.images.webp.large_image_url
          }
          className="absolute inset-0 w-full aspect-[12/4.5] object-cover rounded-lg"
          alt={data.title}
        />
        <div className="absolute bottom-2 left-2 w-1/2 h-1/3  min-h-max bg-white/40 backdrop-filter backdrop-blur-md rounded-md p-6">
          <div>
            <h2 className="text-4xl tracking-tight font-bold mb-4">
              {data.title}
            </h2>
            <div className="flex gap-1 mb-2">
              <span>{data.type}</span> <Dot /> <span>{data.year}</span> <Dot />{" "}
              <span>⭐️ {data.score}</span> <Dot /> <span>{data.rating}</span>
            </div>
            <div className="mb-3">
              <span className="font-medium">Genre: </span>
              <span>
                {data.genres.map((item) => item.name).join(", ")}
              </span>{" "}
            </div>
            {type === "anime" && (
              <div className="flex gap-3">
                {data.streaming.map((stream, idx) => (
                  <a
                    href={stream.url}
                    className="cursor-pointer"
                    key={idx}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>{stream.name}</Button>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
        <p>{data.synopsis}</p>
      </div>
      {type === "anime" && (
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-2">Trailer</h3>
          <iframe
            src={data.trailer.embed_url}
            className="aspect-video w-full sm:w-1/3 rounded-md overflow-hidden"
          ></iframe>
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold mb-2">Characters</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2">
          {characters.map((character, idx) => (
            <div className="relative overflow-hidden rounded-md" key={idx}>
              <img
                src={character.character.images.webp.image_url}
                alt={character.character.name}
                className="rounded-md w-full object-cover aspect-[1/1.5]"
              />
              <div className="absolute w-full left-0 bottom-0 bg-indigo-950 text-white text-center rounded-xs p-2 h-[36px]">
                <span>{character.character.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {type === "anime" && (
        <div>
          <h3 className="text-xl font-semibold mb-2">More Detail</h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <div className="sm:w-1/5">
              <p>
                <span className="font-medium">Episode: </span>{" "}
                {data.episodes || "-"}
              </p>
              <p>
                <span className="font-medium">Status: </span> {data.status}
              </p>
              <p>
                <span className="font-medium">Aired: </span> {data.aired.string}
              </p>
              <p>
                <span className="font-medium">Duration: </span> {data.duration}
              </p>
            </div>
            <div className="sm:w-1/5">
              <p>
                <span className="font-medium">Rank: </span> {data.aired.string}
              </p>
              <p>
                <span className="font-medium">Popularity: </span>{" "}
                {data.popularity.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Members: </span>{" "}
                {data.members.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Favorite: </span>{" "}
                {data.favorites.toLocaleString()}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Season: </span> {data.season}
              </p>
              <p>
                <span className="font-medium">Producers: </span>{" "}
                {data.producers.map((item) => item.name).join(", ")}
              </p>
              <p>
                <span className="font-medium">Licensors: </span>{" "}
                {data.licensors.map((item) => item.name).join(", ") || "-"}
              </p>
              <p>
                <span className="font-medium">Studios: </span>{" "}
                {data.studios.map((item) => item.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
