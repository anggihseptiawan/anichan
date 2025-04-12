import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-10 px-8">
      <div className="container mx-auhref px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold mb-4 flex items-center"
            >
              <span className="text-anime-secondary">Ani</span>
              <span className="text-anime-accent">chan</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for anime streaming. Watch the latest
              episodes of your favorite shows, discover new series, and join our
              community of anime lovers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/browse"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  href="/genres"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Genres
                </Link>
              </li>
              <li>
                <Link
                  href="/upcoming"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Anichan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
