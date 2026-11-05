// The chatbot's answers. No AI and no server: each question is matched to a
// topic by keywords (English and Tagalog), and every answer is built from the
// data in profile.js, so it stays up to date when that file changes.
import { certifications, profile, projects, skillGroups } from '../data/profile'

const traiski = projects.find((p) => p.featured) || projects[0]

export const greeting = `Hi there! 👋 I'm ${profile.firstName}'s portfolio assistant. Ask me about his projects, skills, education or OJT availability, or tap a question below.`

export const suggestions = [
  'Tell me about TraiSki',
  "What's his tech stack?",
  'Is he available for OJT?',
  'Certifications',
  'Education',
  'How can I contact him?',
]

const contactLinks = [
  profile.links.email && { label: 'Email', href: `mailto:${profile.links.email}` },
  profile.links.linkedin && { label: 'LinkedIn', href: profile.links.linkedin },
  profile.links.github && { label: 'GitHub', href: profile.links.github },
].filter(Boolean)

const topics = [
  {
    id: 'traiski',
    keywords: ['traiski', 'capstone', 'lms', 'learning management', 'thesis', 'srtvhs', 'defense', 'defend'],
    answer: () => ({
      text: `${traiski.name} is ${profile.firstName}'s capstone: ${traiski.description}\n\nHighlights:\n${traiski.highlights
        .slice(0, 4)
        .map((h) => `• ${h}`)
        .join('\n')}\n\nHis role: ${traiski.role}. ${traiski.result}`,
      links: [
        traiski.links.live && { label: 'Open TraiSki', href: traiski.links.live },
        { label: 'See project section', href: '#projects' },
      ].filter(Boolean),
    }),
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'built', 'build', 'made', 'work', 'portfolio', 'gawa', 'ginawa', 'system'],
    answer: () => ({
      text: `Here's what ${profile.firstName} has built:\n${projects.map((p) => `• ${p.name}: ${p.tagline}`).join('\n')}\n\nAsk "Tell me about TraiSki" for the full story of his capstone.`,
      links: [{ label: 'See projects', href: '#projects' }],
    }),
  },
  {
    id: 'skills',
    keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'language', 'languages', 'framework', 'react', 'node', 'express', 'mysql', 'database', 'frontend', 'backend', 'marunong', 'alam'],
    answer: () => ({
      text: `${profile.firstName}'s tech stack:\n${skillGroups.map((g) => `• ${g.title}: ${g.items.slice(0, 6).join(', ')}`).join('\n')}`,
      links: [{ label: 'See skills', href: '#skills' }],
    }),
  },
  {
    id: 'ojt',
    keywords: ['ojt', 'intern', 'internship', 'available', 'availability', 'hire', 'hiring', 'job', 'start', 'hours', 'trainee', 'open to', 'trabaho', 'pwede'],
    answer: () => ({
      text: `Yes! ${profile.firstName} is looking for an OJT / internship (480 hours, required by his course). He's also open to junior developer roles and freelance projects, on-site, hybrid or remote around Metro Manila.\n\nThe fastest way to reach him is by email.`,
      links: contactLinks.slice(0, 2),
    }),
  },
  {
    id: 'certs',
    keywords: ['cert', 'certs', 'certificate', 'certificates', 'certification', 'certifications', 'aws', 'cloud', 'ec2', 'vpc', 'training', 'robot', 'cobot'],
    answer: () => ({
      text: `${profile.firstName}'s certificates:\n${certifications.map((c) => `• ${c.name} (${c.issuer}, ${c.date})`).join('\n')}`,
      links: [{ label: 'See certificates', href: '#certifications' }],
    }),
  },
  {
    id: 'education',
    keywords: ['school', 'study', 'studies', 'student', 'course', 'education', 'college', 'university', 'graduate', 'graduation', 'year', 'sti', 'bsit', 'degree', 'aral', 'nag-aaral', 'paaralan'],
    answer: () => ({
      text: `${profile.firstName} is taking up ${profile.courseFull} at ${profile.school} (${profile.schoolYears}). Before that he finished Senior High School (TVL-ICT strand) at the same school in 2023.`,
      links: [{ label: 'See education', href: '#journey' }],
    }),
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'mail', 'reach', 'message', 'linkedin', 'github', 'call', 'connect', 'talk', 'kontak', 'paano'],
    answer: () => ({
      text: `You can reach ${profile.firstName} here:${profile.links.email ? `\n• Email: ${profile.links.email}` : ''}${
        profile.links.linkedin ? '\n• LinkedIn: linkedin.com/in/jeslerguzman' : ''
      }${profile.links.github ? `\n• GitHub: ${profile.links.github.replace('https://', '')}` : ''}`,
      links: contactLinks,
    }),
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'located', 'live', 'based', 'city', 'saan', 'taga', 'valenzuela', 'manila'],
    answer: () => ({
      text: `${profile.firstName} is based in Valenzuela City, Metro Manila, Philippines. He's open to on-site, hybrid or remote work.`,
    }),
  },
  {
    id: 'about',
    keywords: ['who', 'about', 'yourself', 'himself', 'introduce', 'background', 'sino', 'tell me about him', 'jesler'],
    answer: () => ({
      text: `${profile.name} is a ${profile.course} student at ${profile.school} and a ${profile.role.toLowerCase()} who builds web apps end to end, from the database to the UI. His biggest project so far is ${traiski.name}, a system built for a real school.`,
      links: [{ label: 'Read more', href: '#about' }],
    }),
  },
  {
    id: 'resume',
    keywords: ['resume', 'cv'],
    answer: () =>
      profile.resume
        ? { text: `Here's ${profile.firstName}'s resume.`, links: [{ label: 'Download resume', href: profile.resume.pdf }] }
        : {
            text: `${profile.firstName} can send his resume by email. Just ask him!`,
            links: contactLinks.slice(0, 1),
          },
  },
  {
    id: 'site',
    keywords: ['this site', 'this website', 'chatbot', 'bot', 'how was this', 'made this'],
    answer: () => ({
      text: `This portfolio was built by ${profile.firstName} with React, Vite and Tailwind CSS and is hosted on Vercel. I'm a simple keyword-based assistant that runs right in your browser, with no AI service behind me.`,
    }),
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'ty', 'salamat', 'great', 'nice', 'cool', 'awesome'],
    answer: () => ({ text: `You're welcome! 😊 Anything else you'd like to know about ${profile.firstName}?` }),
  },
  {
    id: 'hello',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'kumusta', 'kamusta', 'musta', 'yo'],
    answer: () => ({ text: `Hello! 👋 What would you like to know about ${profile.firstName}?` }),
  },
]

const fallback = () => ({
  text: `Sorry, I'm not sure about that one. I can tell you about ${profile.firstName}'s projects, skills, education, certificates or OJT availability. For anything else, email him directly!`,
  links: contactLinks.slice(0, 1),
})

const normalize = (s) =>
  ` ${s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `

// Picks the topic whose keywords appear most often in the question.
export function answer(question) {
  const q = normalize(question)
  let best = null
  let bestScore = 0
  for (const t of topics) {
    let score = 0
    for (const k of t.keywords) {
      if (q.includes(` ${k} `) || (k.length > 4 && q.includes(k))) score += k.includes(' ') ? 2 : 1
    }
    // Small topics (greetings, thanks) only win when nothing else matches.
    if (t.id === 'hello' || t.id === 'thanks') score *= 0.5
    if (score > bestScore) {
      best = t
      bestScore = score
    }
  }
  return best ? best.answer() : fallback()
}
