import Link from "next/link"
import { Card } from "~/components/card"
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
    AnimeDetail[]
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
        <Card list={animeSeasonList} />
      </div>
      <div className="mb-6">
        <div className="flex justify-between">
          <h1 className="capitalize text-2xl font-semibold mb-2">Manga</h1>
          <Link href="/season">View All</Link>
        </div>
        <Card list={mangaList} />
      </div>
    </div>
  )
}
