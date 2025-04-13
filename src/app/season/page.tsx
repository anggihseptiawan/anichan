import { Card } from "~/components/card"
import { http } from "~/lib/http"
import { AnimeDetail } from "~/types/anime"
import { APIResponse } from "~/types/api"
import { tryCatch } from "~/utils/tryCatch"

export default async function Page() {
  const { data, error } = await tryCatch<APIResponse<AnimeDetail[]>>(
    http<APIResponse<AnimeDetail[]>>(`seasons/upcoming`).then((r) => r.data)
  )

  if (error) return <p>Couldn&apos;t populate schedule!</p>

  return (
    <div>
      <div className="sm:w-1/2 mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-2">Upcoming Season</h1>
        <p>
          Stay up-to-date with the upcoming anime. Never miss an episode of your
          favorite shows!
        </p>
      </div>
      <div className="py-6">
        <Card list={data.data} isNotLink />
      </div>
    </div>
  )
}
