import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

// Pop-up for a project with screenshots: a picture viewer on top, then what the project is and what I did.
export default function ProjectDetails({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const closeRef = useRef(null)
  const shots = project?.screenshots || []
  const count = shots.length
  const go = (step) => setIndex((i) => (i + step + count) % count)

  useEffect(() => {
    if (!project) return
    setIndex(0)
    const prev = document.activeElement
    closeRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count)
      else if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [project, onClose, count])

  if (!project) return null
  const shot = shots[index]
  const base = '/projects/traiski/'

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="pop-in flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3 border-b border-line px-5 py-4">
          <div className="min-w-0 flex-1">
            <h3 id="project-title" className="text-lg font-semibold leading-snug text-fg">
              {project.name}
            </h3>
            <p className="mt-0.5 text-sm text-muted">{project.tagline}</p>
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

        <div className="overflow-y-auto">
          {/* Screenshot viewer */}
          <figure className="border-b border-line bg-chip p-3 sm:p-5">
            <div className="relative">
              <img
                key={shot.name}
                src={`${base}${shot.name}.jpg`}
                alt={`${project.name} screenshot: ${shot.caption}`}
                className="pop-in mx-auto max-h-[55dvh] w-auto rounded-lg border border-line bg-black object-contain"
              />
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous screenshot"
                    className="absolute top-1/2 left-1 -translate-y-1/2 rounded-full border border-line bg-panel/90 p-2 text-fg shadow-lg transition hover:bg-panel sm:left-2"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next screenshot"
                    className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full border border-line bg-panel/90 p-2 text-fg shadow-lg transition hover:bg-panel sm:right-2"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}
            </div>
            <figcaption className="mt-3 text-center text-sm text-soft" aria-live="polite">
              {shot.caption} <span className="text-muted">· {index + 1} of {count}</span>
            </figcaption>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:justify-center">
              {shots.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
                  aria-current={i === index || undefined}
                  className={`shrink-0 overflow-hidden rounded-md border-2 transition ${
                    i === index ? 'border-fg' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={`${base}${s.name}-sm.jpg`} alt="" loading="lazy" className="h-12 w-auto sm:h-14" />
                </button>
              ))}
            </div>
          </figure>

          {/* What it is and what I did */}
          <div className="grid gap-6 px-5 py-5 sm:px-6 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-soft">
              <p>{project.description}</p>
              {project.highlights?.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold text-fg">What the system does</h4>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="space-y-4 text-sm">
              {project.role && (
                <div>
                  <h4 className="mb-1 font-semibold text-fg">My part</h4>
                  <p className="leading-relaxed text-soft">{project.role}.</p>
                </div>
              )}
              {project.team?.length > 0 && (
                <div>
                  <h4 className="mb-1 font-semibold text-fg">Team</h4>
                  <p className="leading-relaxed text-soft">{project.team.join(', ')}</p>
                </div>
              )}
              {project.result && (
                <div>
                  <h4 className="mb-1 font-semibold text-fg">Result</h4>
                  <p className="leading-relaxed text-soft">{project.result}</p>
                </div>
              )}
              {project.stack?.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold text-fg">Tech used in the project</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span key={t} className="rounded-md border border-line bg-chip px-2 py-0.5 text-xs text-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-ink transition hover:opacity-85"
                >
                  Open the live site <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
