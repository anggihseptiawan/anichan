import Form from "next/form"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination"
import { Button } from "./ui/button"

export const PaginationList = ({
  page,
  last,
  type,
}: {
  page: number
  last: number
  type: "anime" | "manga"
}) => (
  <Pagination>
    <PaginationContent className="flex flex-wrap">
      <PaginationItem>
        <Form action="/">
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="page" value={1} />
          <Button type="submit" variant="outline" className="cursor-pointer">
            First
          </Button>
        </Form>
      </PaginationItem>
      <PaginationItem>
        <div className="flex gap-1">
          {new Array(Math.min(last, 3)).fill(0).map((_, idx) => (
            <Form action="/" key={idx}>
              <input type="hidden" name="type" value={type} />
              <div>
                <input
                  type="hidden"
                  name="page"
                  value={idx + Math.max(page - 3, 1) + 1}
                />
                <PaginationLink
                  isActive={page === idx + Math.max(page - 3, 1) + 1}
                >
                  <button className="cursor-pointer" type="submit">
                    {idx + Math.max(page - 3, 1) + 1}
                  </button>
                </PaginationLink>
              </div>
            </Form>
          ))}
        </div>
      </PaginationItem>
      {page > 3 && (
        <PaginationItem>
          <div className="flex gap-1">
            {new Array(Math.min(last, 2)).fill(0).map((_, idx) => (
              <Form action="/" key={idx}>
                <input type="hidden" name="type" value={type} />
                <div>
                  <input type="hidden" name="page" value={idx + page + 1} />
                  <PaginationLink isActive={page === idx + page + 1}>
                    <button className="cursor-pointer" type="submit">
                      {idx + page + 1}
                    </button>
                  </PaginationLink>
                </div>
              </Form>
            ))}
          </div>
        </PaginationItem>
      )}
      <PaginationItem>
        <Form action="/">
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="page" value={last} />
          <Button type="submit" variant="outline" className="cursor-pointer">
            Last ({last})
          </Button>
        </Form>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)
