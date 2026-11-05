import { useEffect, useRef } from 'react'
import { Award, CheckCircle2, ExternalLink, X } from 'lucide-react'
import { Chip, GithubIcon } from './ui'

// Project details in a pop-up on the same page.
export default function ProjectViewer({ project: p, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!p) return
    const prev = document.activeElement
    closeRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [p, onClose])

  if (!p) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.name}
    >
      <div
        className="pop-in flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-line bg-panel shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3 border-b border-line px-6 py-5">
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold text-fg">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-muted transition hover:bg-chip hover:text-fg"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="space-y-6 overflow-y-auto px-6 py-5">
          <p className="leading-relaxed text-soft">{p.description}</p>

          {p.highlights?.length > 0 && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-fg">Highlights</h4>
              <ul className="space-y-2.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-soft">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(p.role || p.result) && (
            <div className="grid gap-3 sm:grid-cols-2">
              {p.role && (
                <div className="rounded-xl border border-line bg-chip p-4">
                  <p className="text-xs font-medium tracking-wide text-muted uppercase">My role</p>
                  <p className="mt-1 text-sm text-fg">{p.role}</p>
                </div>
              )}
              {p.result && (
                <div className="rounded-xl border border-line bg-chip p-4">
                  <p className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted uppercase">
                    <Award className="size-3.5" /> Result
                  </p>
                  <p className="mt-1 text-sm text-fg">{p.result}</p>
                </div>
              )}
            </div>
          )}

          <div>
            <h4 className="mb-3 text-sm font-semibold text-fg">Built with</h4>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2.5 border-t border-line px-6 py-4">
          {!p.links.live && !p.links.code && <p className="mr-auto text-sm text-muted">Live demo link coming soon.</p>}
          {p.links.code && (
            <a
              href={p.links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-fg transition hover:bg-chip"
            >
              <GithubIcon className="size-4" /> Source
            </a>
          )}
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-ink transition hover:opacity-85"
            >
              Visit site <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
