import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10" style={{ background: "linear-gradient(180deg, #BBBBBB, #FFFFFF)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="max-w-7xl mx-auto px-3 py-2 sm:py-2 flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity relative z-20">
          <img
            src={logo}
            alt="Ned-ops"
            style={{ height: "clamp(48px, 8vw, 56px)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-2 sm:gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path
                  ? 'text-amber-600 font-medium'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              style={{ fontSize: "clamp(12px, 0.8vw + 6px, 16px)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Burger button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="sm:hidden absolute left-0 right-0 border-t border-gray-200 shadow-lg" style={{ background: "#fff" }}>
            <div className="flex flex-col px-4 py-2">
              {navLinks.filter(link => link.path !== '/').map((link, i, arr) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors text-lg py-3 ${
                    i !== arr.length - 1 ? 'border-b border-gray-100' : ''
                  } ${
                    location.pathname === link.path
                      ? 'text-amber-600 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
    </header>
  )
}