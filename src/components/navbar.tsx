import Link from "next/link"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import Form from "next/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export const Navbar = () => (
  <div className="flex justify-between px-8 py-4">
    <div className="flex gap-12">
      <span>Anichan</span>
      <nav className="flex gap-4">
        <Link href="/browse">Browse</Link>
        <Link href="/genre">Genre</Link>
        <Link href="/recommendation">Recommendation</Link>
        <Link href="/review">Review</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/season">Season</Link>
      </nav>
    </div>
    <Form action="/search" className="flex gap-2">
      <Select name="term" defaultValue="anime">
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Term" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="anime">Anime</SelectItem>
          <SelectItem value="manga">Manga</SelectItem>
        </SelectContent>
      </Select>
      <div className="relative">
        <Search className="absolute top-2 right-2" size={20} stroke="gray" />
        <Input
          placeholder="Search anime or manga"
          className="w-60"
          name="title"
        />
      </div>
    </Form>
  </div>
)
