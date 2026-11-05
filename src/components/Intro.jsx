import { useEffect, useState } from 'react'

// A short opening animation. It plays once per browser tab, can be skipped
// with a click or any key, and is skipped entirely for visitors who prefer
// reduced motion.
const KEY = 'intro-seen'

function shouldPlay() {
  try {
    if (sessionStorage.getItem(KEY)) return false
  } catch {}
  return !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export default function Intro() {
  const [stage, setStage] = useState(() => (shouldPlay() ? 'in' : 'done'))

  useEffect(() => {
    if (stage === 'done') return
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {}
    document.documentElement.style.overflow = 'hidden'
    const leave = setTimeout(() => setStage('out'), 1700)
    const skip = () => setStage('out')
    window.addEventListener('keydown', skip)
    return () => {
      clearTimeout(leave)
      window.removeEventListener('keydown', skip)
    }
  }, [stage === 'done'])

  useEffect(() => {
    if (stage !== 'out') return
    document.documentElement.style.overflow = ''
    const t = setTimeout(() => setStage('done'), 550)
    return () => clearTimeout(t)
  }, [stage])

  if (stage === 'done') return null

  return (
    <div
      onClick={() => setStage('out')}
      aria-hidden="true"
      className={`intro fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-ink ${
        stage === 'out' ? 'intro-out' : ''
      }`}
    >
      <div className="relative text-center">
        <p className="intro-logo font-mono text-4xl font-bold text-fg sm:text-6xl">
          <span className="text-muted">&lt;</span>
          <span className="intro-type">jesler</span>
          <span className="text-muted">/&gt;</span>
        </p>
        <div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full bg-line">
          <div className="intro-bar h-full rounded-full bg-fg" />
        </div>
        <p className="intro-sub mt-4 font-mono text-xs tracking-widest text-muted uppercase">
          Jesler Guzman · Portfolio
        </p>
      </div>
    </div>
  )
}
