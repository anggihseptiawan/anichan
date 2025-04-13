import Link from "next/link"
import type { AnimeDetail } from "~/types/anime"

export const LinkOrNot = ({
  children,
  isNotLink,
  href,
}: {
  children: React.ReactNode
  isNotLink?: boolean
  href: string
}) => (isNotLink ? <div>{children}</div> : <Link href={href}>{children}</Link>)

export const Card = ({
  list,
  isManga,
  isNotLink,
}: {
  list: AnimeDetail[]
  isManga?: boolean
  isNotLink?: boolean
}) => (
  <div className="mb-2">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {list.map((item, idx) => (
        <div key={idx}>
          <LinkOrNot
            href={`/${isManga ? "manga" : "anime"}/${item.mal_id}`}
            isNotLink={!!isNotLink}
          >
            <figure className="relative">
              <img
                src={item.images.webp.large_image_url}
                className="w-full aspect-[3/4.6] object-cover rounded-sm mb-2"
                alt={item.title}
              />
              <div className="absolute top-1 right-1 bg-primary rounded-sm px-2 py-1">
                <span>⭐️ {item.score}</span>
              </div>
              <figcaption className="absolute bottom-1 left-1 right-1 bg-white/40 text-black backdrop-filter backdrop-blur-md p-2 rounded-sm font-semibold h-16 overflow-hidden sm:text-lg tracking-tight leading-6">
                {item.title}
              </figcaption>
            </figure>
          </LinkOrNot>
        </div>
      ))}
    </div>
  </div>
)
