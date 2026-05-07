import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { useLocation } from "react-router-dom"

const NAV_LINKS = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Building", to: "building" },
  { label: "Coding", to: "coding" },
  { label: "Contact", to: "contact" },
]

export default function NavbarV2() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isDetailPage = location.pathname.startsWith("/v2/works/")

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#E5E5E5] transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        {isDetailPage ? (
          <a
            href="/v2"
            className="font-display text-base font-bold tracking-tight hover:opacity-50 transition-opacity duration-200"
          >
            Orion Cable
          </a>
        ) : (
          <Link
            to="hero"
            smooth
            duration={800}
            className="font-display text-base font-bold tracking-tight cursor-pointer hover:opacity-50 transition-opacity duration-200"
          >
            Orion Cable
          </Link>
        )}

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) =>
            isDetailPage ? (
              <li key={to}>
                <a
                  href={`/v2#${to}`}
                  className="text-sm font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={to}>
                <Link
                  to={to}
                  smooth
                  duration={800}
                  offset={-64}
                  className="text-sm font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile hamburger — three lines that animate to × */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[#111111] transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#111111] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#111111] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 border-b border-[#E5E5E5]" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              {isDetailPage ? (
                <a
                  href={`/v2#${to}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-lg font-semibold text-[#111111] hover:opacity-50 transition-opacity"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={to}
                  smooth
                  duration={800}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-lg font-semibold text-[#111111] hover:opacity-50 transition-opacity cursor-pointer"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
