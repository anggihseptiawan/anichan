import { Card } from "~/components/card"
import { http } from "~/lib/http"
import type { APIResponse } from "~/types/api"
import type { AnimeDetail } from "~/types/anime"
import { tryCatch } from "~/utils/tryCatch"

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ term: string; title: string }>
}) {
  const term = (await searchParams).term
  const title = (await searchParams).title

  const { data, error } =
    term === "anime"
      ? await tryCatch<AnimeDetail[]>(
          http<APIResponse<AnimeDetail[]>>(`anime?q=${title}`).then(
            (r) => r.data.data
          )
        )
      : await tryCatch<AnimeDetail[]>(
          http<APIResponse<AnimeDetail[]>>(`anime?q=${title}`).then(
            (r) => r.data.data
          )
        )

  if (error) return <p>Coudln&apos;t get the data</p>

  return (
    <div className="pb-6 min-h-72">
      <p className="mb-2">
        Showing {data.length} result for{" "}
        <span className="font-semibold">&quot;{title}&quot;</span>{" "}
      </p>
      <Card list={data} />
    </div>
  )
}
