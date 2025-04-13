import { http } from "~/lib/http"
import { Demographic } from "~/types/anime"
import { APIResponse } from "~/types/api"
import { tryCatch } from "~/utils/tryCatch"

export default async function Page() {
  const { data, error } = await tryCatch<APIResponse<Demographic[]>>(
    http<APIResponse<Demographic[]>>(`genres/anime`).then((r) => r.data)
  )

  if (error) return <p>Couldn&apos;t populate genre!</p>

  return (
    <div>
      <div className="md:w-1/2 mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-2">Anime Genres</h1>
        <p>
          Explore anime by your favorite genres. From action-packed adventures
          to heartfelt romances.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 py-4">
        {data.data.map((genre, idx) => (
          <a
            key={idx}
            href={genre.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-violet-700 rounded-md px-2 py-4">
              <p className="font-semibold text-center">{genre.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
