import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { profile } from '../data/profile'
import { answer, greeting, suggestions } from './chatbot-knowledge'

const time = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

function Avatar({ size = 'size-8' }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full ${size}`}>
      <img src={profile.photo} alt="" className="block size-full rounded-full border border-line object-cover" />
    </span>
  )
}

function Bubble({ m, onLink }) {
  if (m.from === 'user') {
    return (
      <div className="flex justify-end">
        <p className="max-w-[80%] rounded-2xl rounded-br-md bg-fg px-3.5 py-2 text-sm text-ink">
          {m.text}
        </p>
      </div>
    )
  }
  return (
    <div className="flex items-end gap-2">
      <Avatar size="size-7" />
      <div className="max-w-[85%]">
        <div className="rounded-2xl rounded-bl-md border border-line bg-chip px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line text-soft">
          {m.text}
        </div>
        {m.links?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {m.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={l.href.startsWith('#') ? onLink : undefined}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-fg transition hover:bg-chip"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
        <p className="mt-1 pl-1 text-[10px] text-muted">{m.at}</p>
      </div>
    </div>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [hint, setHint] = useState(false)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [{ from: 'bot', text: greeting, at: time() }])
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const timer = useRef(null)

  // Show the "Any questions?" hint a few seconds after the page loads.
  useEffect(() => {
    const t = setTimeout(() => setHint(true), 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => () => clearTimeout(timer.current), [])

  const ask = (text) => {
    const q = text.trim()
    if (!q || typing) return
    setInput('')
    setMessages((m) => [...m, { from: 'user', text: q, at: time() }])
    setTyping(true)
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...answer(q), at: time() }])
      setTyping(false)
    }, 650)
  }

  const asked = new Set(messages.filter((m) => m.from === 'user').map((m) => m.text))
  const chips = suggestions.filter((s) => !asked.has(s)).slice(0, 4)

  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <section
          role="dialog"
          aria-label={`Chat with ${profile.firstName}'s assistant`}
          className="chat-panel flex h-[min(34rem,calc(100dvh-6.5rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/30 sm:w-96"
        >
          <header className="flex items-center gap-3 border-b border-line px-4 py-3">
            <span className="relative block shrink-0">
              <Avatar size="size-9" />
              <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-panel bg-emerald-400" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-fg">{profile.firstName}'s Assistant</p>
              <p className="text-xs text-emerald-500">Online · replies instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-lg p-1.5 text-muted transition hover:bg-chip hover:text-fg"
            >
              <X className="size-5" />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m, i) => (
              <Bubble key={i} m={m} onLink={() => setOpen(false)} />
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <Avatar size="size-7" />
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-line bg-chip px-4 py-3">
                  <span className="chat-dot size-1.5 rounded-full bg-muted" />
                  <span className="chat-dot size-1.5 rounded-full bg-muted" />
                  <span className="chat-dot size-1.5 rounded-full bg-muted" />
                </div>
              </div>
            )}
          </div>

          {chips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-line px-4 pt-3">
              {chips.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  disabled={typing}
                  className="rounded-full border border-line px-3 py-1 text-xs text-soft transition hover:bg-chip disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault()
              ask(input)
            }}
            className="flex items-center gap-2 p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about his skills, projects, OJT…"
              aria-label="Your question"
              maxLength={200}
              className="min-w-0 flex-1 rounded-xl border border-line bg-chip px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-muted/60 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send"
              className="rounded-xl bg-fg p-2.5 text-ink transition hover:opacity-85 disabled:opacity-40"
            >
              <Send className="size-4" />
            </button>
          </form>
        </section>
      )}

      <div className="flex items-center gap-3">
        {hint && !open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="chat-panel hidden rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-fg shadow-lg sm:block"
          >
            Any questions? 💬
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setOpen((v) => !v)
            setHint(false)
          }}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
          className="relative flex size-14 items-center justify-center rounded-full bg-fg text-ink shadow-xl shadow-black/20 transition hover:scale-105"
        >
          {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
          {!open && hint && <span className="absolute top-0.5 right-0.5 size-3 rounded-full border-2 border-ink bg-emerald-400" />}
        </button>
      </div>
    </div>
  )
}
