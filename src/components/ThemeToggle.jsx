import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const current = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(current)

  // Follow the device setting until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: light)')
    if (!mq) return
    const onChange = (e) => {
      let saved = null
      try {
        saved = localStorage.getItem('theme')
      } catch {}
      if (saved) return
      const next = e.matches ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      setTheme(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`rounded-full border border-line bg-panel p-2.5 text-muted shadow-sm transition hover:text-fg ${className}`}
    >
      {theme === 'dark' ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
    </button>
  )
}
