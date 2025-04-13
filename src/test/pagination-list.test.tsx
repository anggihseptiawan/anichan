import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PaginationList } from "../components/pagination-list"

describe("Pagination Component", () => {
  it("should render 2 pagination number", () => {
    const totalPage = 2
    render(<PaginationList last={totalPage} page={1} type="anime" />)

    const buttons = screen.getAllByRole("pagination-button")
    expect(buttons.length).toBe(totalPage)
  })
})
