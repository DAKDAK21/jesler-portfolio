// All the text on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Jesler Guzman',
  firstName: 'Jesler',
  role: 'Full-Stack Developer',
  course: 'BS Information Technology',
  courseFull: 'Bachelor of Science in Information Technology',
  school: 'STI College Caloocan',
  schoolYears: '2023 – Expected graduation: August 2027',
  headline: 'BSIT Student · Full-Stack Developer',
  location: 'Valenzuela City, Metro Manila, Philippines',
  tagline: 'I build web apps end to end, from the database schema to the last pixel of the UI.',
  photo: '/profile.jpg', // put your photo in public/profile.jpg
  resume: { image: '/resume.jpg', pdf: '/resume.pdf' }, // shown in a pop-up; set to null to hide the button
  openTo: ['OJT / Internship', 'Junior developer roles', 'Freelance projects'],
  links: {
    linkedin: 'https://www.linkedin.com/in/jeslerguzman/',
    github: 'https://github.com/DAKDAK21',
    instagram: 'https://www.instagram.com/jes_gzm/',
    email: 'jesler.guzman210@gmail.com',
    phone: '0976 636 7027', // shown in Contact; tap to call on phones
  },
}

export const about = [
  "I'm a BSIT student who enjoys building complete systems, not just pages. I like taking a real problem from a real client and turning it into something people actually use every day.",
  'For our Capstone, I was one of the main developers of TraiSki, a learning management system for a senior high school. I worked across the whole stack: the React frontend, the Express API, the MySQL database and the deployment.',
  "I care about software that saves people work. When our defense panel told us a feature was \"computerized, not automated,\" we rebuilt it so the system does the work for the teacher. That's the kind of developer I want to be.",
]

export const stats = [
  { value: '130+', label: 'commits on TraiSki' },
  { value: '4', label: 'user portals built' },
  { value: '75+', label: 'database migrations' },
  { value: '90', label: 'capstone defense grade' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    color: 'violet',
    icon: 'layout',
    items: ['React', 'JavaScript (ES6+)', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Axios', 'Responsive design'],
  },
  {
    title: 'Backend',
    color: 'cyan',
    icon: 'server',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT authentication', 'bcrypt', 'Authenticator app (2FA)', 'Nodemailer', 'File uploads (Sharp)'],
  },
  {
    title: 'Database',
    color: 'emerald',
    icon: 'database',
    items: ['MySQL', 'SQL', 'Schema design', 'Migrations', 'Backups & restore', 'Excel import / export'],
  },
  {
    title: 'Tools & DevOps',
    color: 'pink',
    icon: 'wrench',
    items: ['Git & GitHub', 'Render', 'Vercel', 'AWS (EC2, VPC basics)', 'Playwright (E2E tests)', 'Postman', 'ESLint', 'Figma', 'VS Code'],
  },
]

export const projects = [
  {
    name: 'TraiSki LMS',
    featured: true,
    tagline: 'Capstone 2: a learning management system for a senior high school',
    description:
      'A full learning management system built for San Rafael Technological and Vocational High School (SRTVHS) so classes can continue online when classrooms are too hot to use. Four portals (Student, Teacher, Admin and Super Admin) cover modules, quizzes, assignments, grading, messaging and school records.',
    highlights: [
      'Quizzes that build themselves from the module content and are scored by the server, with results released automatically',
      'Rubric grading: the teacher enters one score and the system fills in the criteria breakdown and feedback',
      'Per-student deadlines, late-work control and scheduled open/close times for activities',
      'Security: bcrypt passwords, JWT sessions, optional authenticator-app 2FA, login activity and audit logs',
      'Admin tools: bulk account creation from Excel, class record export, archiving instead of deleting',
    ],
    role: 'Full-stack developer: frontend, backend, database and deployment',
    team: ['Jesler Guzman', 'Felix Gold Velez', 'Lorenz Carceler', 'Richmond Jabez Panganiban'], // capstone group
    result: 'Defended Oct 31, 2026. Passed with minor revisions, grade 90.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'JWT', 'Playwright', 'Render'],
    links: {
      live: 'https://srtvhs-elms.website',
      code: '', // the TraiSki repo is private, so no public source link
    },
  },
  {
    name: 'This portfolio',
    featured: false,
    tagline: 'The site you are looking at',
    description:
      'A fast, responsive personal site built with React, Vite and Tailwind CSS and deployed on Vercel. All content comes from a single data file, so it is easy to keep up to date.',
    highlights: [],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    links: { live: 'https://jesler-portfolio.vercel.app', code: 'https://github.com/DAKDAK21/jesler-portfolio' },
  },
]

// Certificates. Optional `image` (shown in a pop-up viewer) and `pdf` (download), both in public/certs/.
export const certifications = [
  {
    name: 'Introduction to Amazon Virtual Private Cloud (VPC)',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-vpc.jpg',
    pdf: '/certs/aws-intro-vpc.pdf',
  },
  {
    name: 'Introduction to Amazon EC2',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-ec2.jpg',
    pdf: '/certs/aws-intro-ec2.pdf',
  },
  {
    name: 'Collaborative Robot Programming Level III',
    issuer: 'St. Amatiel Technological Institute',
    date: 'Sep 2026',
    tag: 'Robotics',
    image: '',
    pdf: '',
  },
]

// Shown as a timeline, newest first.
// Shown at the bottom of the page.
export const goals = [
  'Complete my OJT and grow into a full-stack developer who ships software people rely on every day.',
  'Keep improving my skills in software development and contribute to projects that make a real difference.',
]

export const journey = [
  {
    when: '2026',
    title: 'OJT / Internship: actively seeking',
    detail: 'Available for a 480-hour OJT starting February 2027. On-site, hybrid or remote.',
    current: true,
  },
  {
    when: '2026',
    title: 'Capstone developer: TraiSki LMS',
    place: 'Defended October 2026',
    detail: 'Passed with minor revisions and a grade of 90. Finished all of the panel\'s revisions within days.',
  },
  {
    when: '2026',
    title: 'Real client, real users',
    place: 'SRTVHS',
    detail: 'SRTVHS planned to start using TraiSki for its online classes in November 2026.',
  },
  {
    when: '2023 – 2027',
    title: 'BS Information Technology',
    place: 'STI College Caloocan',
    detail:
      'Expected graduation August 2027. Coursework in databases, systems analysis and design, web development, networking, OOP and information security.',
  },
  {
    when: '2023',
    title: 'Senior High School, TVL-ICT',
    place: 'STI College Caloocan',
    detail: 'Information and Communications Technology strand. Member of the IT student organization.',
  },
  {
    when: '2022',
    title: 'Hello World! 👋',
    detail: 'Wrote my first program and started learning to code.',
  },
]
