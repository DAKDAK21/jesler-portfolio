import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BriefcaseBusiness,
  ChevronRight,
  Cloud,
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
import { about, certifications, gallery, goals, journey, profile, projects, skillGroups, stats } from '../data/profile'
import { Card, Chip, GithubIcon, InstagramIcon, LinkedinIcon, Reveal } from './ui'
import CertViewer from './CertViewer'
import CertGroup from './CertGroup'

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
      <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-8 sm:text-left">
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
          <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="blink size-2 rounded-full bg-emerald-500" />
            Open to OJT / Internship
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">{profile.name}</h1>
          <p className="mt-1.5 flex items-center justify-center gap-1.5 text-sm text-muted sm:justify-start">
            <MapPin className="size-4 shrink-0" /> {profile.location}
          </p>
          <p className="mt-3 text-lg text-soft">{profile.headline}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-2.5 sm:justify-start">
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
          // column-reverse shows the number above its label; justify-end pins both to the top,
          // so every number lines up even when a label wraps to two lines
          <div key={s.label} className="flex flex-col-reverse justify-end rounded-xl border border-line bg-chip px-4 py-3.5">
            <dt className="mt-1 text-xs leading-snug text-muted">{s.label}</dt>
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
      {/* When the card is stretched to match the column beside it, spread the entries over the full height */}
      <ol className="relative ml-2 flex flex-1 flex-col justify-between gap-7 border-l border-line">
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
                <span className={`size-1.5 shrink-0 rounded-full ${link ? 'bg-emerald-500' : p.note ? 'bg-muted' : 'bg-amber-500'}`} />
                {p.note || (link ? domainOf(link) : 'Live demo soon')}
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

const certIcons = { Cloud, Robotics: Bot }

export function Certifications() {
  const [viewing, setViewing] = useState(null)
  const [group, setGroup] = useState(null)
  const CHIPS = 5
  return (
    <Card id="certifications" icon={Award} title="Certifications & Training" delay={60}>
      <ul className="space-y-3">
        {certifications.map((c) => {
          const Icon = certIcons[c.tag] || Award
          const opens = c.courses?.length || c.image
          const body = (
            <>
              <span className="flex size-11 shrink-0 items-center justify-center self-start rounded-xl border border-line bg-chip text-soft">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-snug text-fg">{c.name}</span>
                <span className="mt-0.5 block text-sm text-muted">
                  {c.courses ? (
                    <>
                      {c.courses.length} courses completed <span className="whitespace-nowrap">· {c.date}</span>
                    </>
                  ) : (
                    <>
                      {c.issuer} <span className="whitespace-nowrap">· {c.date}</span>
                    </>
                  )}
                </span>
                {c.courses && (
                  <span className="mt-2.5 flex flex-wrap gap-1.5">
                    {c.courses.slice(0, CHIPS).map((course) => (
                      <span key={course.short} className="rounded-md border border-line bg-chip px-2 py-0.5 text-xs text-soft">
                        {course.short}
                      </span>
                    ))}
                    {c.courses.length > CHIPS && (
                      <span className="rounded-md px-1 py-0.5 text-xs font-medium text-muted">+{c.courses.length - CHIPS} more</span>
                    )}
                  </span>
                )}
              </span>
              {opens && (
                <ChevronRight className="size-4 shrink-0 self-center text-muted transition group-hover:translate-x-0.5 group-hover:text-fg" />
              )}
            </>
          )
          const cls = 'flex w-full items-start gap-3.5 rounded-xl border border-line bg-panel p-4 text-left'
          return (
            <li key={c.name}>
              {opens ? (
                <button
                  type="button"
                  onClick={() => (c.courses ? setGroup(c) : setViewing({ ...c, bare: true }))}
                  aria-label={c.courses ? `${c.name}: see all ${c.courses.length} course certificates` : undefined}
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
      <CertGroup group={group} onClose={() => setGroup(null)} />
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

// A strip of photos that slides on its own (paused while hovered). Black and white until
// you point at a photo; tapping one opens it large, in color.
export function Gallery() {
  const [viewing, setViewing] = useState(null)
  const [byPointer, setByPointer] = useState(false)
  const strip = [...gallery, ...gallery] // drawn twice so the loop has no gap
  const close = () => {
    setViewing(null)
    // The viewer hands focus back to the photo; after a mouse or tap, let go of it so the strip keeps moving
    if (byPointer) setTimeout(() => document.activeElement?.blur(), 0)
  }
  return (
    <Card id="gallery">
      <div className="marquee -mx-6 overflow-hidden mask-x-from-90% mask-x-to-100% sm:-mx-7">
        <ul className="marquee-track flex w-max">
          {strip.map((g, i) => {
            const copy = i >= gallery.length
            return (
              <li key={`${g.name}-${i}`} className="pr-3" aria-hidden={copy || undefined}>
                <button
                  type="button"
                  tabIndex={copy ? -1 : 0}
                  onClick={(e) => {
                    setByPointer(e.detail > 0) // detail is 0 when opened with Enter or Space
                    setViewing({ image: `/gallery/${g.name}.jpg`, name: g.alt, alt: g.alt, bare: true })
                  }}
                  aria-label={`Open photo: ${g.alt}`}
                  className="group block cursor-zoom-in overflow-hidden rounded-xl border border-line bg-chip"
                >
                  <img
                    src={`/gallery/${g.name}-sm.jpg`}
                    alt=""
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    decoding="async"
                    className="photo-bw h-44 w-auto sm:h-60"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <CertViewer cert={viewing} onClose={close} />
    </Card>
  )
}

export function Footer() {
  return (
    <footer className="mt-10 flex flex-wrap items-center justify-center gap-2.5 border-t border-line pt-6 text-center text-sm text-muted">
      <img src="/favicon.svg" alt="" width="24" height="24" className="size-6 shrink-0" />
      <span>
        © {new Date().getFullYear()} {profile.name} - All rights reserved.
      </span>
    </footer>
  )
}
