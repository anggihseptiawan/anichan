import Link from "next/link"
import type { AnimeDetail } from "~/types/anime"

export const Card = ({
  list,
  isManga,
}: {
  list: AnimeDetail[]
  isManga?: boolean
}) => (
  <div className="mb-6">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {list.map((item, idx) => (
        <Link href={`/${isManga ? "manga" : "anime"}/${item.mal_id}`} key={idx}>
          <figure>
            <img
              src={item.images.webp.large_image_url}
              className="w-full aspect-[3/4.6] object-cover rounded-sm mb-2"
              alt={item.title}
            />
            <figcaption className="text-lg tracking-tight">
              {item.title}
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  </div>
)
