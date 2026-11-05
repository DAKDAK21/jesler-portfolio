import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Database,
  ExternalLink,
  GraduationCap,
  LayoutTemplate,
  Mail,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { about, journey, profile, projects, skillGroups, stats } from '../data/profile'
import { GithubIcon, LinkedinIcon, Reveal, SectionTitle, tone } from './ui'

const groupIcons = { layout: LayoutTemplate, server: Server, database: Database, wrench: Wrench }

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

export function About() {
  return (
    <Section id="about">
      <SectionTitle index="01" kicker="about me" title="Building systems people actually use" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-400">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.openTo.map((o) => (
              <span key={o} className="rounded-full border border-line bg-panel px-3 py-1 text-sm text-zinc-300">
                {o}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl border border-line bg-panel p-5 transition hover:border-zinc-700">
                <p className="text-gradient font-mono text-3xl font-bold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle index="02" kicker="skills" title="Front to back, and the database in between" />
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const t = tone[g.color]
          const Icon = groupIcons[g.icon]
          return (
            <Reveal key={g.title} delay={i * 80}>
              <div className={`h-full rounded-2xl border border-line bg-panel p-6 transition ${t.ring}`}>
                <div className="flex items-center gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-xl ${t.icon}`}>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className={`rounded-lg border px-3 py-1.5 font-mono text-[13px] ${t.chip}`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function ProjectLinks({ links }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
        >
          Live demo <ExternalLink className="size-4" />
        </a>
      )}
      {links.code && (
        <a
          href={links.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-white/5"
        >
          <GithubIcon className="size-4" /> Source
        </a>
      )}
    </div>
  )
}

function FeaturedProject({ p }) {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-3xl border border-line bg-panel">
        <div className="h-1.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500" />
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-violet-300">
              <Sparkles className="size-3.5" /> Featured project
            </p>
            <h3 className="mt-3 text-3xl font-bold text-white">{p.name}</h3>
            <p className="mt-1 text-cyan-300">{p.tagline}</p>
            <p className="mt-5 leading-relaxed text-zinc-400">{p.description}</p>

            <ul className="mt-6 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-line bg-ink/60 p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">My role</p>
              <p className="mt-1 text-zinc-200">{p.role}</p>
            </div>
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5">
              <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-amber-300">
                <Award className="size-4" /> Result
              </p>
              <p className="mt-1 text-zinc-200">{p.result}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Built with</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <ProjectLinks links={p.links} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  return (
    <Section id="projects">
      <SectionTitle index="03" kicker="projects" title="Things I've built" />
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.name} p={p} />
        ))}
        {others.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 transition hover:border-zinc-700">
                  <Rocket className="size-6 text-pink-400" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-cyan-300">{p.tagline}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300">
                        {s}
                      </li>
                    ))}
                  </ul>
                  {(p.links.live || p.links.code) && (
                    <div className="mt-5">
                      <ProjectLinks links={p.links} />
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

export function Journey() {
  return (
    <Section id="journey">
      <SectionTitle index="04" kicker="journey" title="Education & milestones" />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="rounded-2xl border border-line bg-panel p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <GraduationCap className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-white">{profile.courseFull}</h3>
            {profile.school && <p className="mt-1 text-zinc-400">{profile.school}</p>}
            {profile.schoolYears && <p className="mt-1 font-mono text-xs text-cyan-300">{profile.schoolYears}</p>}
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Focus on web development, databases and building real systems for real clients.
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-8 border-l border-line pl-8">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={i * 80}>
              <li className="relative">
                <span className="absolute top-1.5 -left-[2.4rem] size-3.5 rounded-full border-2 border-ink bg-gradient-to-br from-violet-400 to-cyan-400" />
                <p className="font-mono text-xs text-cyan-400">{j.when}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{j.title}</h3>
                <p className="mt-1 leading-relaxed text-zinc-400">{j.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export function Contact() {
  const { linkedin, github, email } = profile.links
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-6 py-14 text-center sm:px-12">
          <div className="glow pointer-events-none absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-violet-600" />
          <div className="relative">
            <p className="font-mono text-sm text-cyan-400">
              <span className="text-zinc-600">05.</span> what's next?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              Let's build something <span className="text-gradient">together.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
              I'm looking for OJT, junior developer roles and freelance projects. If you have one, or just want to talk,
              my inbox is open.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:brightness-110"
                >
                  <Mail className="size-5" /> Email me
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${
                    email
                      ? 'border border-line text-zinc-200 hover:border-zinc-600 hover:bg-white/5'
                      : 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:brightness-110'
                  }`}
                >
                  <LinkedinIcon /> LinkedIn <ArrowUpRight className="size-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-white/5"
                >
                  <GithubIcon /> GitHub <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  )
}
