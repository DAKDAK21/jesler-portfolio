import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  FlaskConical,
  FolderKanban,
  Goal,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  UserRound,
} from 'lucide-react'
import { about, certifications, goals, journey, profile, projects, skillGroups, stats } from '../data/profile'
import { Card, Chip, GithubIcon, InstagramIcon, LinkedinIcon, Reveal } from './ui'
import CertViewer from './CertViewer'

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
  const [resumeOpen, setResumeOpen] = useState(false)
  const { email } = profile.links
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
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">{profile.name}</h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4 shrink-0" /> {profile.location}
          </p>
          <p className="mt-3 text-lg text-soft">{profile.headline}</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {profile.resume && (
              <button type="button" onClick={() => setResumeOpen(true)} className={`${btnSolid} cursor-pointer`}>
                <FileText className="size-4" /> View Resume
              </button>
            )}
            {email && (
              <a href={`mailto:${email}`} className={btnOutline}>
                <Mail className="size-4" /> Send Email
              </a>
            )}
          </div>
        </div>
      </header>
      <CertViewer
        cert={
          resumeOpen && profile.resume
            ? { ...profile.resume, name: `${profile.name}: Resume`, portrait: true, alt: `Resume of ${profile.name}` }
            : null
        }
        onClose={() => setResumeOpen(false)}
      />
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

// Each card opens the project's site directly in a new tab.
export function Projects() {
  return (
    <Card id="projects" icon={FolderKanban} title="Projects">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((p) => {
          const link = p.links.live || p.links.code
          const inner = (
            <>
              <div className="flex w-full items-start justify-between gap-2">
                <h3 className="font-semibold text-fg">{p.name}</h3>
                {link && (
                  <ArrowUpRight className="size-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                )}
              </div>
              <p className="mt-1 flex-1 text-sm leading-snug text-muted">{p.tagline}</p>
              <span className="mt-3 inline-flex max-w-full items-center gap-1.5 truncate rounded-md border border-line bg-chip px-2 py-1 font-mono text-xs text-soft">
                <span className={`size-1.5 shrink-0 rounded-full ${link ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                {link ? domainOf(link) : 'Live demo soon'}
              </span>
            </>
          )
          const cls = 'group flex h-full flex-col rounded-xl border border-line bg-panel p-4 text-left'
          return link ? (
            <a
              key={p.name}
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`${cls} transition hover:-translate-y-0.5 hover:border-muted/40 hover:shadow-md`}
            >
              {inner}
            </a>
          ) : (
            <div key={p.name} className={cls}>
              {inner}
            </div>
          )
        })}
      </div>
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
                  onClick={() => setViewing({ ...c, bare: true })}
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

function ColumnTitle({ icon: Icon, children }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-fg">
      <Icon className="size-5 text-muted" /> {children}
    </h2>
  )
}

const tile = 'rounded-xl border border-line bg-panel p-4'
const linkTile = `group flex items-center gap-3 ${tile} transition hover:border-muted/40 hover:shadow-md`

// Goals, social links and contact, side by side at the bottom of the page.
export function Contact() {
  const { email, phone, linkedin, github, instagram } = profile.links
  const socials = [
    linkedin && { icon: LinkedinIcon, label: 'LinkedIn', href: linkedin },
    github && { icon: GithubIcon, label: 'GitHub', href: github },
    instagram && { icon: InstagramIcon, label: 'Instagram', href: instagram },
  ].filter(Boolean)
  const openChat = () => window.dispatchEvent(new Event('open-chat'))

  return (
    <Reveal>
      <section id="contact" className="scroll-mt-6 rounded-2xl border border-line bg-panel p-6 shadow-sm sm:p-7">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <ColumnTitle icon={Goal}>Goals</ColumnTitle>
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g} className={`${tile} text-sm leading-relaxed text-soft`}>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle icon={Link2}>Social Links</ColumnTitle>
            <div className="space-y-3">
              {socials.map((x) => (
                <a key={x.label} href={x.href} target="_blank" rel="noreferrer" className={linkTile}>
                  <x.icon className="size-5 shrink-0 text-fg" />
                  <span className="flex-1 text-sm font-medium text-fg">{x.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColumnTitle icon={MessageSquareText}>Contact</ColumnTitle>
            <div className={tile}>
              <p className="text-sm leading-relaxed text-soft">
                Actively seeking an OJT / internship opportunity. Open to junior developer roles and freelance projects
                too.
              </p>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="group mt-2 inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-fg"
                >
                  Get in touch <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3 xl:pt-9">
            {email && (
              <a href={`mailto:${email}`} className={linkTile}>
                <Mail className="size-5 shrink-0 text-fg" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-fg">Email</span>
                  <span className="block truncate text-xs text-muted">{email}</span>
                </span>
                <ChevronRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5" />
              </a>
            )}
            {phone && (
              <a href={`tel:+63${phone.replace(/\D/g, '').replace(/^0/, '')}`} className={linkTile}>
                <Phone className="size-5 shrink-0 text-fg" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-fg">Let's Talk</span>
                  <span className="block truncate text-xs text-muted">{phone}</span>
                </span>
                <ChevronRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5" />
              </a>
            )}
            <button type="button" onClick={openChat} className={`${linkTile} w-full cursor-pointer text-left`}>
              <MessageCircle className="size-5 shrink-0 text-fg" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-fg">Quick questions?</span>
                <span className="block truncate text-xs text-muted">Ask my assistant</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line pt-6 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name} - All rights reserved.
    </footer>
  )
}
