import { useState } from 'react'
import {
  Award,
  BriefcaseBusiness,
  ChevronRight,
  Download,
  FlaskConical,
  FolderKanban,
  Mail,
  MapPin,
  MessageSquareText,
  UserRound,
} from 'lucide-react'
import { about, certifications, journey, profile, projects, skillGroups, stats } from '../data/profile'
import { Card, Chip, GithubIcon, LinkedinIcon, Reveal } from './ui'
import CertViewer from './CertViewer'
import ProjectViewer from './ProjectViewer'

export const domainOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
}

const btnSolid =
  'inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-ink transition hover:opacity-85'
const btnOutline =
  'inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-4 py-2.5 text-sm font-semibold text-fg transition hover:bg-chip'

export function Header() {
  const [photoOk, setPhotoOk] = useState(true)
  const { email, linkedin, github } = profile.links
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')

  return (
    <Reveal>
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="size-36 shrink-0 overflow-hidden rounded-2xl border border-line bg-panel shadow-sm sm:size-44">
          {photoOk ? (
            <img
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              className="size-full object-cover"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <span className="flex size-full items-center justify-center text-4xl font-bold text-muted">{initials}</span>
          )}
        </div>

        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Open to OJT / Internship
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">{profile.name}</h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4 shrink-0" /> {profile.location}
          </p>
          <p className="mt-3 text-lg text-soft">{profile.headline}</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {email && (
              <a href={`mailto:${email}`} className={btnSolid}>
                <Mail className="size-4" /> Send Email
              </a>
            )}
            {profile.resume && (
              <a href={profile.resume} download className={btnOutline}>
                <Download className="size-4" /> Resume
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer" className={btnOutline}>
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className={btnOutline}>
                <GithubIcon className="size-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </header>
    </Reveal>
  )
}

export function About() {
  return (
    <Card id="about" icon={UserRound} title="About">
      <div className="space-y-4 leading-relaxed text-soft">
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse rounded-xl border border-line bg-chip px-3 py-3">
            <dt className="mt-0.5 text-xs leading-snug text-muted">{s.label}</dt>
            <dd className="text-2xl font-bold text-fg">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  )
}

export function TechStack() {
  return (
    <Card id="skills" icon={FlaskConical} title="Tech Stack" delay={60}>
      <div className="space-y-5">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-2.5 text-sm font-semibold text-fg">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export function Experience() {
  return (
    <Card id="journey" icon={BriefcaseBusiness} title="Experience & Education" delay={120}>
      <ol className="relative ml-2 space-y-7 border-l border-line">
        {journey.map((j, i) => (
          <li key={j.title} className="relative pl-6">
            <span
              className={`absolute top-1 -left-[7px] size-3.5 rounded-full border-2 ${
                i === 0 ? 'border-fg bg-fg' : 'border-line bg-panel'
              }`}
            />
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-snug text-fg">{j.title}</h3>
              <span className="shrink-0 pt-0.5 text-xs text-muted">{j.when}</span>
            </div>
            {j.place && <p className="mt-0.5 text-sm text-muted">{j.place}</p>}
            <p className="mt-1.5 text-sm leading-relaxed text-soft">{j.detail}</p>
          </li>
        ))}
      </ol>
    </Card>
  )
}

export function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Card id="projects" icon={FolderKanban} title="Projects">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((p) => {
          const link = p.links.live || p.links.code
          return (
            <button
              key={p.name}
              type="button"
              onClick={() => setOpen(p)}
              className="group flex h-full cursor-pointer flex-col rounded-xl border border-line bg-panel p-4 text-left transition hover:-translate-y-0.5 hover:border-muted/40 hover:shadow-md"
            >
              <div className="flex w-full items-start justify-between gap-2">
                <h3 className="font-semibold text-fg">{p.name}</h3>
                <ChevronRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <p className="mt-1 flex-1 text-sm leading-snug text-muted">{p.tagline}</p>
              <span className="mt-3 inline-flex max-w-full items-center gap-1.5 truncate rounded-md border border-line bg-chip px-2 py-1 font-mono text-xs text-soft">
                <span className={`size-1.5 shrink-0 rounded-full ${link ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                {link ? domainOf(link) : 'Live demo soon'}
              </span>
            </button>
          )
        })}
      </div>
      <ProjectViewer project={open} onClose={() => setOpen(null)} />
    </Card>
  )
}

export function Certifications() {
  const [viewing, setViewing] = useState(null)
  return (
    <Card id="certifications" icon={Award} title="Certifications" delay={60}>
      <ul className="space-y-3">
        {certifications.map((c) => {
          const body = (
            <>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug text-fg">{c.name}</h3>
                <p className="mt-0.5 text-sm text-muted">
                  {c.issuer} · {c.date}
                </p>
              </div>
              {c.image && (
                <ChevronRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-fg" />
              )}
            </>
          )
          const cls = 'flex w-full items-center gap-3 rounded-xl border border-line bg-panel p-4 text-left'
          return (
            <li key={c.name}>
              {c.image ? (
                <button
                  type="button"
                  onClick={() => setViewing(c)}
                  className={`group ${cls} cursor-pointer transition hover:border-muted/40 hover:shadow-md`}
                >
                  {body}
                </button>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </li>
          )
        })}
      </ul>
      <CertViewer cert={viewing} onClose={() => setViewing(null)} />
    </Card>
  )
}

export function Contact() {
  const { email, linkedin, github } = profile.links
  const rows = [
    email && { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    linkedin && { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/jeslerguzman', href: linkedin },
    github && { icon: GithubIcon, label: 'GitHub', value: github.replace('https://', ''), href: github },
  ].filter(Boolean)

  return (
    <Card id="contact" icon={MessageSquareText} title="Contact">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.7fr] lg:items-center">
        <p className="leading-relaxed text-soft">
          Actively seeking an OJT / internship, and open to junior developer roles and freelance projects. The fastest
          way to reach me is by email.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {rows.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target={r.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-line bg-panel p-4 transition hover:border-muted/40 hover:shadow-md"
            >
              <r.icon className="size-5 shrink-0 text-fg" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-fg">{r.label}</span>
                <span className="block truncate text-xs text-muted">{r.value}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line pt-6 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind CSS.
    </footer>
  )
}
