import { useState } from 'react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './ui'

function Avatar() {
  const [failed, setFailed] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')

  return (
    <div className="relative order-first mx-auto size-44 sm:size-56 lg:order-none lg:size-64">
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-500 via-cyan-400 to-pink-500 opacity-80 blur-[2px]" />
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-[2rem] bg-panel">
        {failed ? (
          <span className="text-gradient font-mono text-6xl font-bold">{initials}</span>
        ) : (
          <img
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            className="size-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}

function Terminal() {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-line bg-panel/80 font-mono text-[13px] shadow-2xl shadow-violet-950/30 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-amber-400/80" />
        <span className="size-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-xs text-zinc-500">~/jesler</span>
      </div>
      <div className="space-y-1 p-4 leading-relaxed">
        <p>
          <span className="text-emerald-400">$</span> <span className="text-zinc-300">whoami</span>
        </p>
        <p className="text-zinc-400">
          {'{ '}
          <span className="text-violet-300">role</span>: <span className="text-amber-200">"{profile.role}"</span>,{' '}
          <span className="text-violet-300">stack</span>: [<span className="text-amber-200">"React"</span>,{' '}
          <span className="text-amber-200">"Node"</span>, <span className="text-amber-200">"MySQL"</span>]{' }'}
        </p>
        <p>
          <span className="text-emerald-400">$</span> <span className="caret text-zinc-300">open --to work</span>
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute -top-24 left-1/4 size-96 rounded-full bg-violet-600" />
      <div className="glow pointer-events-none absolute top-20 right-0 size-80 rounded-full bg-cyan-500" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to OJT, junior roles and freelance work
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hi, I'm {profile.firstName}.
            <br />
            <span className="text-gradient">{profile.role}.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">{profile.tagline}</p>

          <p className="mt-3 flex items-center gap-1.5 text-sm text-zinc-500">
            <MapPin className="size-4" /> {profile.course} student · {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:brightness-110"
            >
              View my work
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-white/5"
              >
                <Download className="size-4" /> Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-white/5"
            >
              Contact me
            </a>
            <div className="flex items-center gap-1 pl-1">
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                >
                  <LinkedinIcon />
                </a>
              )}
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                >
                  <GithubIcon />
                </a>
              )}
            </div>
          </div>

          <Terminal />
        </div>

        <Avatar />
      </div>
    </section>
  )
}
