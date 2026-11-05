import { useEffect, useRef, useState } from 'react'

// Brand logos (Lucide 1.x no longer ships brand icons).
export function GithubIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

// Fades a block in the first time it scrolls into view.
export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function SectionTitle({ index, title, kicker }) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-sm text-cyan-400">
        <span className="text-zinc-600">{index}.</span> {kicker}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </Reveal>
  )
}

// Tailwind needs full class names written out, so colors are mapped here.
export const tone = {
  violet: {
    text: 'text-violet-300',
    chip: 'border-violet-500/25 bg-violet-500/10 text-violet-200',
    ring: 'hover:border-violet-500/50',
    icon: 'bg-violet-500/15 text-violet-300',
  },
  cyan: {
    text: 'text-cyan-300',
    chip: 'border-cyan-500/25 bg-cyan-500/10 text-cyan-200',
    ring: 'hover:border-cyan-500/50',
    icon: 'bg-cyan-500/15 text-cyan-300',
  },
  emerald: {
    text: 'text-emerald-300',
    chip: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200',
    ring: 'hover:border-emerald-500/50',
    icon: 'bg-emerald-500/15 text-emerald-300',
  },
  pink: {
    text: 'text-pink-300',
    chip: 'border-pink-500/25 bg-pink-500/10 text-pink-200',
    ring: 'hover:border-pink-500/50',
    icon: 'bg-pink-500/15 text-pink-300',
  },
}
