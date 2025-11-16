import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observers = navItems.map((item) => {
      const el = document.getElementById(item.id)
      if (!el) return null
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(item.id)
          })
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="text-xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Dipuranjan
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  active === item.id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:hello@dipuranjan.dev" className="p-2 rounded-full hover:bg-gray-100" aria-label="Email"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-base text-left py-2 ${active === item.id ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
