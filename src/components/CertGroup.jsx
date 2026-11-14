import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BadgeCheck, X } from 'lucide-react'
import CertViewer from './CertViewer'

// Pop-up with every course in a certificate group (for example AWS Skill Builder).
// Tapping a course opens its certificate in the normal viewer on top.
export default function CertGroup({ group, onClose }) {
  const [viewing, setViewing] = useState(null)
  const closeRef = useRef(null)
  const viewingRef = useRef(null)
  viewingRef.current = viewing

  useEffect(() => {
    if (!group) return
    const prev = document.activeElement
    closeRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'
    // The certificate viewer handles Escape while it is open; only close the list otherwise
    const onKey = (e) => e.key === 'Escape' && !viewingRef.current && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [group, onClose])

  // The viewer unlocks page scrolling when it closes; keep it locked while this list is still open
  useEffect(() => {
    if (group && !viewing) document.documentElement.style.overflow = 'hidden'
  }, [group, viewing])

  if (!group) return null

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-group-title"
      >
        <div
          className="pop-in flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start gap-3 border-b border-line px-5 py-4">
            <div className="min-w-0 flex-1">
              <h3 id="cert-group-title" className="text-lg font-semibold leading-snug text-fg">
                {group.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <BadgeCheck className="size-4 shrink-0 text-emerald-500" />
                {group.courses.length} courses completed · {group.issuer}
              </p>
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

          <ul className="grid gap-3 overflow-y-auto bg-chip p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
            {group.courses.map((c) => (
              <li key={c.name}>
                <button
                  type="button"
                  onClick={() => setViewing({ ...c, bare: true })}
                  className="group flex h-full w-full cursor-pointer items-center overflow-hidden rounded-xl border border-line bg-panel text-left transition hover:-translate-y-0.5 hover:border-muted/40 hover:shadow-md sm:flex-col sm:items-stretch"
                >
                  {/* Phones: small picture on the left. Larger screens: picture on top. */}
                  <img
                    src={c.image}
                    alt=""
                    width="1268"
                    height="980"
                    loading="lazy"
                    className="aspect-1268/980 w-28 shrink-0 border-r border-line bg-white object-cover sm:w-full sm:border-r-0 sm:border-b"
                  />
                  <span className="flex min-w-0 flex-1 flex-col p-3">
                    <span className="text-sm font-semibold leading-snug text-fg">{c.name}</span>
                    <span className="mt-1 text-xs text-muted">{c.date}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CertViewer cert={viewing} onClose={() => setViewing(null)} />
    </>,
    document.body,
  )
}
