import { useEffect, useRef } from 'react'
import { BadgeCheck, Download, X } from 'lucide-react'

// Shows a certificate image in a pop-up on the same page.
export default function CertViewer({ cert, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!cert) return
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
  }, [cert, onClose])

  if (!cert) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
    >
      <div
        className="pop-in w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3 border-b border-line px-5 py-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold leading-snug text-fg">{cert.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              {cert.issuer && <BadgeCheck className="size-4 shrink-0 text-emerald-500" />}
              {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
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

        <div className={`bg-chip p-3 sm:p-5 ${cert.portrait ? 'max-h-[72dvh] overflow-y-auto' : ''}`}>
          <img
            src={cert.image}
            alt={cert.alt || `Certificate: ${cert.name}`}
            className={`mx-auto rounded-lg border border-line bg-white ${
              cert.portrait ? 'w-full max-w-2xl' : 'max-h-[65dvh] w-auto object-contain'
            }`}
          />
        </div>

        {cert.pdf && (
          <div className="flex justify-end border-t border-line px-5 py-3">
            <a
              href={cert.pdf}
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm font-medium text-fg transition hover:border-muted/40 hover:bg-chip"
            >
              <Download className="size-4" /> Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
