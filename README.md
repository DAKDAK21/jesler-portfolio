# Jesler Guzman: Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All text, skills, projects and links are in `src/data/profile.js`.
Put your photo at `public/profile.jpg` (square works best). Until it exists,
the site shows your initials.

## Deploy on Vercel

1. Push this repo to GitHub.
2. On vercel.com, choose **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

Every push to the main branch redeploys the site.
