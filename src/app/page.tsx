import { Card } from "~/components/card"
import { PaginationList } from "~/components/pagination-list"
import { http } from "~/lib/http"
import type { AnimeDetail } from "~/types/anime"
import type { APIResponse } from "~/types/api"
import { tryCatch } from "~/utils/tryCatch"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ type: string; page: string }>
}) {
  const type = (await searchParams).type
  const page = (await searchParams).page
  const { data: animeSeasonList, error } = await tryCatch<
    APIResponse<AnimeDetail[]>
  >(
    http<APIResponse<AnimeDetail[]>>(
      `seasons/now?limit=5&page=${type === "anime" ? page || 1 : 1}`
    ).then((r) => r.data)
  )
  const { data: mangaList, error: errorMangaList } = await tryCatch<
    APIResponse<AnimeDetail[]>
  >(
    http<APIResponse<AnimeDetail[]>>(
      `/top/manga?limit=5&page=${type === "manga" ? page || 1 : 1}`
    ).then((r) => r.data)
  )

  if (error || errorMangaList) return <p>Error!</p>

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between">
          <h1 className="capitalize text-xl sm:text-2xl font-semibold mb-2">
            {animeSeasonList.data[0].season} {animeSeasonList.data[0].year}{" "}
            Anime
          </h1>
        </div>
        <Card list={animeSeasonList.data} />
        <PaginationList
          page={type === "anime" ? +page || 1 : 1}
          last={animeSeasonList.pagination.last_visible_page}
          type="anime"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="capitalize text-xl sm:text-2xl font-semibold mb-2">
            Manga
          </h1>
        </div>
        <Card list={mangaList.data} isManga />
        <PaginationList
          page={type === "manga" ? +page || 1 : 1}
          last={mangaList.pagination.last_visible_page}
          type="manga"
        />
      </div>
    </div>
  )
}
