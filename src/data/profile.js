// All the text on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Jesler Guzman',
  firstName: 'Jesler',
  role: 'Aspiring Web Developer',
  course: 'BS Information Technology',
  courseFull: 'Bachelor of Science in Information Technology',
  school: 'STI College Caloocan',
  schoolYears: '2023 – Expected graduation: August 2027',
  headline: 'BSIT Student · Aspiring Web Developer',
  location: 'Valenzuela City, Metro Manila, Philippines',
  tagline: 'I build web apps with React, Node.js and MySQL, and I keep learning more with every project.',
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
  "I'm a fourth-year BSIT student at STI College Caloocan, learning web development one project at a time. I enjoy working on both what users see and the code behind it, and I'm looking for an OJT where I can grow with a real team.",
  'For our capstone, I was one of the developers of TraiSki, a learning management system for a senior high school. During Capstone 2, I handled frontend and backend work: building and fixing features in the React pages and in the Express and MySQL API. Our team leader created the design, and I polished it and made it work.',
  "I care about software that saves people work. During our defense, the panel pointed out that one of our features still left most of the work to the teacher, so we reworked it until the system did it for them. That's the kind of developer I want to be.",
]

export const stats = [
  { value: '130+', label: 'Commits to TraiSki' },
  { value: '4', label: 'User portals built' },
  { value: '75+', label: 'Database migrations' },
  { value: '90', label: 'Capstone grade' },
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
    items: ['Git & GitHub', 'Vercel', 'ESLint', 'Figma (wireframes)', 'VS Code'],
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
    role: 'Frontend and backend developer during Capstone 2 (React, Express, MySQL). The design was made by our team leader',
    team: ['Jesler Guzman', 'Felix Gold Velez', 'Lorenz Carceler', 'Richmond Jabez Panganiban'], // capstone group
    result: 'Defended on October 31, 2026 and passed with minor revisions and a grade of 90.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'JWT', 'Playwright', 'Render'],
    // Screenshots in public/projects/traiski/ (name.jpg large, name-sm.jpg thumbnail). People's names are blurred.
    screenshots: [
      { name: 'login', caption: 'One login page for students, teachers and admins' },
      { name: 'student-dashboard', caption: 'Student dashboard: school news, subjects, calendar and tasks' },
      { name: 'student-modules', caption: 'A subject’s modules, grouped by term' },
      { name: 'student-assignments', caption: 'Assignments with start and due dates and scores' },
      { name: 'teacher-dashboard', caption: 'Teacher dashboard: classes, calendar and a to-do list' },
      { name: 'teacher-assignments', caption: 'Every assignment, with how many students handed it in' },
      { name: 'teacher-gradebook', caption: 'Gradebook with class stats, Excel export and printing' },
      { name: 'teacher-mastery', caption: 'Mastery: which competencies a class needs help with' },
      { name: 'teacher-peer-learning', caption: 'Peer Learning: class discussions the teacher moderates' },
      { name: 'admin-dashboard', caption: 'Admin dashboard: what needs attention, plus school-wide numbers' },
      { name: 'admin-create-account', caption: 'Creating a student or teacher account' },
      { name: 'admin-classes', caption: 'Sections, subjects and enrollment in one place' },
      { name: 'admin-reports', caption: 'Reports on enrollment and how each class is doing' },
      { name: 'admin-slides', caption: 'Dashboard slides the admin posts for school news' },
    ],
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
      'Rebuilt in 2026 as a tap-to-order restaurant POS: cart, cash keypad with live change and a printable receipt (the original version is still playable)',
    ],
    role: 'Co-developer (pair project)',
    team: ['Jesler Guzman', 'Sean Wesley Santos'],
    note: 'Play it · School project 2022', // shown instead of the link address
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { live: '/projects/mcdollibee/index.html', code: '' }, // the original 2022 page, in public/projects/mcdollibee/
  },
]

// Certificates and training. An entry with `courses` is shown as one card that opens a pop-up
// with every course. Each course has an `image` (pop-up viewer) and `pdf` (download) in public/certs/.
export const certifications = [
  {
    name: 'AWS Skill Builder',
    issuer: 'AWS Training & Certification',
    date: 'Nov 2026',
    tag: 'Cloud',
    summary: 'Cloud training courses with completion certificates',
    courses: [
      { name: 'Builder Labs: Introduction to AWS Cloud', short: 'AWS Cloud', date: 'Nov 10, 2026', image: '/certs/aws-builder-labs-intro-cloud.jpg', pdf: '/certs/aws-builder-labs-intro-cloud.pdf' },
      { name: 'Introduction to Amazon EC2', short: 'EC2', date: 'Nov 5, 2026', image: '/certs/aws-intro-ec2.jpg', pdf: '/certs/aws-intro-ec2.pdf' },
      { name: 'Introduction to Amazon Virtual Private Cloud (VPC)', short: 'VPC', date: 'Nov 5, 2026', image: '/certs/aws-intro-vpc.jpg', pdf: '/certs/aws-intro-vpc.pdf' },
      { name: 'Introduction to Amazon Simple Storage Service (S3)', short: 'S3', date: 'Nov 10, 2026', image: '/certs/aws-intro-s3.jpg', pdf: '/certs/aws-intro-s3.pdf' },
      { name: 'Introduction to AWS Lambda', short: 'Lambda', date: 'Nov 10, 2026', image: '/certs/aws-intro-lambda.jpg', pdf: '/certs/aws-intro-lambda.pdf' },
      { name: 'Introduction to AWS Identity and Access Management (IAM)', short: 'IAM', date: 'Nov 10, 2026', image: '/certs/aws-intro-iam.jpg', pdf: '/certs/aws-intro-iam.pdf' },
      { name: 'Lab - Introduction to Amazon DynamoDB', short: 'DynamoDB', date: 'Nov 10, 2026', image: '/certs/aws-lab-intro-dynamodb.jpg', pdf: '/certs/aws-lab-intro-dynamodb.pdf' },
      { name: 'Introduction to Amazon API Gateway', short: 'API Gateway', date: 'Nov 10, 2026', image: '/certs/aws-intro-api-gateway.jpg', pdf: '/certs/aws-intro-api-gateway.pdf' },
      { name: 'Introduction to Amazon CloudFront', short: 'CloudFront', date: 'Nov 10, 2026', image: '/certs/aws-intro-cloudfront.jpg', pdf: '/certs/aws-intro-cloudfront.pdf' },
      { name: 'Introduction to AWS Key Management Service', short: 'KMS', date: 'Nov 10, 2026', image: '/certs/aws-intro-kms.jpg', pdf: '/certs/aws-intro-kms.pdf' },
      { name: 'Performing a Basic Audit of your AWS Environment', short: 'Security audit', date: 'Nov 10, 2026', image: '/certs/aws-basic-audit.jpg', pdf: '/certs/aws-basic-audit.pdf' },
    ],
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

// Photos for the moving strip at the bottom. Files are in public/gallery/:
// name-sm.jpg is the small strip picture (480px tall) and name.jpg the large one for the pop-up.
// w and h are the small picture's size so the strip doesn't jump while it loads.
export const gallery = [
  { name: 'defense-panel', w: 360, h: 480, alt: 'Our team with the panel after the capstone presentation' },
  { name: 'cafe-coding', w: 270, h: 480, alt: 'Coding with the team at a café' },
  { name: 'pictorial-group', w: 320, h: 480, alt: 'Class pictorial in black suits' },
  { name: 'team-outside', w: 640, h: 480, alt: 'The team outside with a school representative' },
  { name: 'pictorial-trio', w: 320, h: 480, alt: 'Pictorial with classmates' },
  { name: 'study-session', w: 924, h: 480, alt: 'Working on the project together at school' },
  { name: 'pictorial-close', w: 320, h: 480, alt: 'Close-up group shot from the pictorial' },
  { name: 'defense-team', w: 640, h: 480, alt: 'The team and panel in front of the presentation screen' },
  { name: 'pictorial-fun', w: 320, h: 480, alt: 'A fun group shot from the pictorial' },
  { name: 'lab', w: 853, h: 480, alt: 'Testing on a phone in the school lab' },
  { name: 'pictorial-class', w: 320, h: 480, alt: 'The whole group at the pictorial' },
  { name: 'pictorial-duo', w: 320, h: 480, alt: 'Two friends at the pictorial' },
  { name: 'pictorial-solo', w: 320, h: 480, alt: 'Solo shot from the pictorial' },
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
