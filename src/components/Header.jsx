import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/resume', label: 'Resume' },
]

export default function Header() {
  const location = useLocation()

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
        <nav className="flex gap-2 sm:gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path
                    ? 'text-amber-600 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              style={{ fontSize: "clamp(10px, 0.8vw + 6px, 14px)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}