export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ term: string; title: string }>
}) {
  const term = (await searchParams).term
  const title = (await searchParams).title
  console.log(term, title)

  return (
    <div className="pb-6 min-h-72">
      <p>Showing 1 result for {title}</p>
    </div>
  )
}
