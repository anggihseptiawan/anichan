interface Items {
  count: number
  total: number
  per_page: number
}

interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: Items
}

export interface APIResponse<T> {
  pagination: Pagination
  data: T
}

export interface Streaming {
  name: string
  url: string
}
