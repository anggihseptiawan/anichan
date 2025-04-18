"use client"
import Link from "next/link"
import { Input } from "./ui/input"
import { EllipsisIcon, Search } from "lucide-react"
import Form from "next/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { usePathname } from "next/navigation"

const SearchForm = () => (
  <Form action="/search" className="flex flex-col sm:flex-row gap-2">
    <Select name="term" defaultValue="anime">
      <SelectTrigger className="w-full sm:w-24">
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
        className="min-w-60 w-full"
        name="title"
      />
    </div>
  </Form>
)

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#16042f] text-white">
      <div className="flex gap-12">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight text-primary">
            Anichan
          </span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link
            href="/genre"
            className={`${pathname === "/genre" ? "text-primary" : ""}`}
          >
            Genre
          </Link>
          <Link
            href="/schedule"
            className={`${pathname === "/schedule" ? "text-primary" : ""}`}
          >
            Schedule
          </Link>
          <Link
            href="/season"
            className={`${pathname === "/season" ? "text-primary" : ""}`}
          >
            Season
          </Link>
        </nav>
      </div>
      <div className="hidden md:flex">
        <SearchForm />
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <EllipsisIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="space-y-4">
            <SheetTitle>Menu</SheetTitle>
            <div className="flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="/genre">Genre</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/schedule">Schedule</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/season">Season</Link>
              </SheetClose>
            </div>
            <SearchForm />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
