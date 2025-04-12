import Link from "next/link"
import { http } from "~/lib/http"
import { AnimeDetail, APIResponse } from "~/types/api"
import { tryCatch } from "~/utils/tryCatch"

export default async function Home() {
  const { data: animeSeasonList, error } = await tryCatch<AnimeDetail[]>(
    http<APIResponse<AnimeDetail[]>>("seasons/now?limit=5").then(
      (r) => r.data.data
    )
  )
  const { data: mangaList, error: errorMangaList } = await tryCatch<
    Omit<AnimeDetail, "season">[]
  >(http<APIResponse<AnimeDetail[]>>("manga?limit=5").then((r) => r.data.data))
  if (error || errorMangaList) return <p>Error!</p>

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between">
          <h1 className="capitalize text-2xl font-semibold mb-2">
            {animeSeasonList[0].season} {animeSeasonList[0].year} Anime
          </h1>
          <Link href="/season">View All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {animeSeasonList.map((anime) => (
            <Link href="" key={anime.mal_id}>
              <figure>
                <img
                  src={anime.images.webp.large_image_url}
                  className="w-full aspect-[3/4.6] object-cover mb-2"
                  alt={anime.title}
                />
                <figcaption className="text-lg tracking-tight">
                  {anime.title}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between">
          <h1 className="capitalize text-2xl font-semibold mb-2">Manga</h1>
          <Link href="/season">View All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {mangaList.map((manga) => (
            <Link href="" key={manga.mal_id}>
              <figure>
                <img
                  src={manga.images.webp.large_image_url}
                  className="w-full aspect-[3/4.6] object-cover mb-2"
                  alt={manga.title}
                />
                <figcaption className="text-lg tracking-tight">
                  {manga.title}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
