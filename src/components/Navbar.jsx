import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-lg font-bold text-white">
          <span className="text-violet-400">&lt;</span>jesler<span className="text-cyan-400">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map(([label, href], i) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <span className="font-mono text-xs text-cyan-500">0{i + 1}.</span> {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 pb-4 md:hidden">
          {items.map(([label, href], i) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5"
              >
                <span className="font-mono text-xs text-cyan-500">0{i + 1}.</span> {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
