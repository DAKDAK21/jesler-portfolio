// The chatbot's answers. No AI and no server: each question is matched to a
// topic by keywords (English and Tagalog), and every answer is built from the
// data in profile.js, so it stays up to date when that file changes.
import { certifications, profile, projects, skillGroups } from '../data/profile'

const traiski = projects.find((p) => p.featured) || projects[0]

export const greeting = `Hi there! 👋 I'm ${profile.firstName}'s portfolio assistant. Ask me about his projects, skills, education or OJT availability, or tap a question below.`

export const suggestions = [
  'Tell me about TraiSki',
  'TraiSki collaborators',
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
  // Easter egg 🐐
  {
    id: 'goat',
    boost: 3,
    keywords: ['goat', 'g o a t', 'greatest of all time', 'greatest player', 'lebron', 'idol', 'favorite player', 'favourite player', 'paboritong player', 'basketball', 'nba', 'jordan', 'kobe', 'king james'],
    answer: () => ({
      text: 'The GOAT? LeBron James, no debate. 👑🏀',
    }),
  },
  {
    id: 'team',
    boost: 2,
    keywords: ['collaborator', 'collaborators', 'collaborative', 'collaborate', 'team', 'teammates', 'members', 'member', 'groupmates', 'group', 'who built', 'who made', 'who created', 'kasama', 'kagrupo', 'ka-grupo', 'kasama niya', 'sino gumawa', 'sino ang gumawa'],
    answer: () => ({
      text: traiski.team?.length
        ? `${traiski.name} was built by a team of ${traiski.team.length} as their capstone project:\n${traiski.team
            .map((n) => `• ${n}`)
            .join('\n')}\n\n${profile.firstName} worked on the frontend and backend during Capstone 2, building and fixing features in React and the Express and MySQL API. The design was made by their team leader.`
        : `${traiski.name} was a group capstone project.`,
      links: [traiski.links.live && { label: 'Open TraiSki', href: traiski.links.live }].filter(Boolean),
    }),
  },
  {
    id: 'traiski',
    keywords: ['traiski', 'capstone', 'lms', 'learning management', 'thesis', 'srtvhs', 'defense', 'defend'],
    answer: () => ({
      text: `${traiski.name} is the capstone project ${profile.firstName} built with his team. ${traiski.description}\n\nHighlights:\n${traiski.highlights
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
    id: 'pos',
    keywords: ['pos', 'mcdollibee', 'mcdo', 'jollibee', 'cashier', 'point of sale', 'first program', 'first project', 'santos', 'unang'],
    answer: () => {
      const pos = projects.find((p) => p.name.includes('POS'))
      return {
        text: `${pos.name} is one of ${profile.firstName}'s first programs, made in 2022 with his classmate ${pos.team?.[1] || ''}. ${pos.description}\n\nBuilt with ${pos.stack.join(', ')}.`,
        links: [
          pos.links.live && { label: 'Play the POS', href: pos.links.live },
          { label: 'See projects', href: '#projects' },
        ].filter(Boolean),
      }
    },
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'built', 'build', 'made', 'work', 'portfolio', 'gawa', 'ginawa', 'system'],
    answer: () => ({
      text: `Here's what ${profile.firstName} has built:\n${projects.map((p) => `• ${p.name} – ${p.tagline}`).join('\n')}\n\nAsk "Tell me about TraiSki" for the full story of his capstone.`,
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
    keywords: ['cert', 'certs', 'certificate', 'certificates', 'certification', 'certifications', 'aws', 'amazon', 'cloud', 'ec2', 'vpc', 's3', 'lambda', 'iam', 'dynamodb', 'cloudfront', 'kms', 'api gateway', 'audit', 'training', 'robot', 'cobot'],
    answer: () => ({
      text: `${profile.firstName}'s certificates and training:\n${certifications
        .map((c) =>
          c.courses
            ? `• ${c.name}: ${c.courses.length} courses completed, ${c.date} (${c.courses.map((course) => course.short).join(', ')})`
            : `• ${c.name} – ${c.issuer}, ${c.date}`,
        )
        .join('\n')}`,
      links: [{ label: 'See certificates', href: '#certifications' }],
    }),
  },
  {
    id: 'education',
    keywords: ['school', 'study', 'studies', 'student', 'course', 'education', 'college', 'university', 'graduate', 'graduation', 'year', 'sti', 'bsit', 'degree', 'aral', 'nag-aaral', 'paaralan'],
    answer: () => ({
      text: `${profile.firstName} is taking up a ${profile.courseFull} at ${profile.school}. He started in 2023 and is expected to graduate in August 2027. Before that, he finished Senior High School (TVL-ICT strand) at the same school in 2023.`,
      links: [{ label: 'See education', href: '#journey' }],
    }),
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'mail', 'reach', 'message', 'linkedin', 'github', 'call', 'connect', 'talk', 'kontak', 'paano', 'phone', 'number', 'mobile', 'cellphone', 'numero', 'text'],
    answer: () => ({
      text: `You can reach ${profile.firstName} here:${profile.links.email ? `\n• Email: ${profile.links.email}` : ''}${
        profile.links.phone ? `\n• Phone: ${profile.links.phone}` : ''
      }${
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
      text: `${profile.name} is a ${profile.course} student at ${profile.school} and an ${profile.role.toLowerCase()} who builds web apps with React, Node.js and MySQL. His biggest project so far is ${traiski.name}, a system built for a real school.`,
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
    if (t.boost) score *= t.boost
    if (score > bestScore) {
      best = t
      bestScore = score
    }
  }
  return best ? best.answer() : fallback()
}
