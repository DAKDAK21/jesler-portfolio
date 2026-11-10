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
  'For our capstone, I was one of the main developers of TraiSki, a learning management system for a senior high school. I worked across the whole stack: the React frontend, the Express API, the MySQL database and the deployment.',
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
    items: ['Git & GitHub', 'Render', 'Vercel', 'AWS (EC2, VPC, S3, Lambda, IAM, DynamoDB)', 'Playwright (E2E tests)', 'Postman', 'ESLint', 'Figma', 'VS Code'],
  },
]

export const projects = [
  {
    name: 'TraiSki LMS',
    featured: true,
    tagline: 'Capstone project: a learning management system for a senior high school',
    description:
      'It is a full learning management system made for San Rafael Technological and Vocational High School (SRTVHS) so classes can continue online when classrooms are too hot to use. Four portals (Student, Teacher, Admin and Super Admin) cover modules, quizzes, assignments, grading, messaging and school records.',
    highlights: [
      'Quizzes that build themselves from the module content and are scored by the server, with results released automatically',
      'Rubric grading: the teacher enters one score and the system fills in the criteria breakdown and feedback',
      'Per-student deadlines, late-work control and scheduled open/close times for activities',
      'Security: bcrypt passwords, JWT sessions, optional authenticator-app 2FA, login activity and audit logs',
      'Admin tools: bulk account creation from Excel, class record export, archiving instead of deleting',
    ],
    role: 'Full-stack developer (frontend, backend, database and deployment)',
    team: ['Jesler Guzman', 'Felix Gold Velez', 'Lorenz Carceler', 'Richmond Jabez Panganiban'], // capstone group
    result: 'Defended on October 31, 2026 and passed with minor revisions and a grade of 90.',
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
  {
    name: 'McDollibee POS Simulator',
    featured: false,
    tagline: 'A fast-food cashier that takes orders and prints a receipt',
    description:
      'A point-of-sale simulator for a made-up fast-food restaurant, built in Grade 12 (ICT-201). It shows a menu of desserts, meals, drinks and combo meals, takes each order and quantity, checks that the cash is enough, then prints a receipt with the total and change.',
    highlights: [
      'Menu, prices and orders stored in arrays and objects',
      'Running receipt that adds up the total of every order',
      'Payment check that asks again when the cash is not enough, then computes the change',
      'Receipt built and added to the page with JavaScript',
      'Updated in 2026: a self-order kiosk design with food drawings, mash-up menu names and tap-to-order cards',
    ],
    role: 'Co-developer (pair project)',
    team: ['Jesler Guzman', 'Sean Wesley Santos'],
    note: 'Play it · School project 2022', // shown instead of the link address
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { live: '/projects/mcdollibee/index.html', code: '' }, // the original 2022 page, in public/projects/mcdollibee/
  },
]

// Certificates. Optional `image` (shown in a pop-up viewer) and `pdf` (download), both in public/certs/.
export const certifications = [
  {
    name: 'Builder Labs: Introduction to AWS Cloud',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-builder-labs-intro-cloud.jpg',
    pdf: '/certs/aws-builder-labs-intro-cloud.pdf',
  },
  {
    name: 'Introduction to AWS Identity and Access Management (IAM)',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-iam.jpg',
    pdf: '/certs/aws-intro-iam.pdf',
  },
  {
    name: 'Introduction to Amazon Simple Storage Service (S3)',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-s3.jpg',
    pdf: '/certs/aws-intro-s3.pdf',
  },
  {
    name: 'Introduction to AWS Lambda',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-lambda.jpg',
    pdf: '/certs/aws-intro-lambda.pdf',
  },
  {
    name: 'Introduction to Amazon API Gateway',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-api-gateway.jpg',
    pdf: '/certs/aws-intro-api-gateway.pdf',
  },
  {
    name: 'Lab - Introduction to Amazon DynamoDB',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-lab-intro-dynamodb.jpg',
    pdf: '/certs/aws-lab-intro-dynamodb.pdf',
  },
  {
    name: 'Introduction to Amazon CloudFront',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-cloudfront.jpg',
    pdf: '/certs/aws-intro-cloudfront.pdf',
  },
  {
    name: 'Introduction to AWS Key Management Service',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-intro-kms.jpg',
    pdf: '/certs/aws-intro-kms.pdf',
  },
  {
    name: 'Performing a Basic Audit of your AWS Environment',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    image: '/certs/aws-basic-audit.jpg',
    pdf: '/certs/aws-basic-audit.pdf',
  },
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
    date: 'In progress', // change to the month you receive it, e.g. 'Dec 2026'
    tag: 'Robotics',
    image: '',
    pdf: '',
  },
]

// Shown at the bottom of the page.
export const goals = [
  'Complete my OJT and grow into a full-stack developer who ships software people rely on every day.',
  'Keep improving my skills in software development and contribute to projects that make a real difference.',
]

// Shown as a timeline, newest first.
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
    detail: 'Built for SRTVHS so the school can run its online classes, starting November 2026.',
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
