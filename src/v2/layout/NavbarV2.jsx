import { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink, useLocation } from "react-router-dom"

// scroll: uses react-scroll on home page
// href: always a router/page link
const NAV_LINKS = [
  { label: "Home",     type: "scroll", to: "hero" },
  { label: "About",    type: "scroll", to: "about" },
  { label: "Building", type: "page",   to: "/building" },
  { label: "Coding",   type: "page",   to: "/coding" },
  { label: "Contact",  type: "scroll", to: "contact" },
]

export default function NavbarV2() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/" || location.pathname === ""

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  const linkClass = "text-sm font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors duration-200 cursor-pointer"
  const mobileLinkClass = "font-display text-lg font-semibold text-[#111111] hover:opacity-50 transition-opacity cursor-pointer"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#E5E5E5] transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo — always a router link back to home */}
        <RouterLink
          to="/"
          className="font-display text-base font-bold tracking-tight hover:opacity-50 transition-opacity duration-200"
        >
          Orion Cable
        </RouterLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, type, to }) => (
            <li key={label}>
              {type === "page" ? (
                <RouterLink to={to} className={linkClass}>
                  {label}
                </RouterLink>
              ) : isHomePage ? (
                <ScrollLink
                  to={to}
                  smooth
                  duration={800}
                  offset={-64}
                  className={linkClass}
                >
                  {label}
                </ScrollLink>
              ) : (
                <RouterLink to={`/#${to}`} className={linkClass}>
                  {label}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#111111] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#111111] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#111111] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-72 border-b border-[#E5E5E5]" : "max-h-0"}`}>
        <ul className="px-6 py-4 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, type, to }) => (
            <li key={label}>
              {type === "page" ? (
                <RouterLink to={to} onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                  {label}
                </RouterLink>
              ) : isHomePage ? (
                <ScrollLink
                  to={to}
                  smooth
                  duration={800}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {label}
                </ScrollLink>
              ) : (
                <RouterLink to={`/#${to}`} onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                  {label}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
