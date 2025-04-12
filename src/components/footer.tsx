import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-10 px-8">
      <div className="container mx-auhref px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/genre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Genre
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/season"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Season
                </Link>
              </li>
            </ul>
          </div>

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
