# Tib0-portfolio

This project is a showcase made with ❤️‍🔥, 👓 and 💻. It is a customizable portfolio. It display my professional path. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I used the following library to achieve my goals:
 - React
 - Gray Matter
 - DaisyUI
 - tsParticles

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Particles

Display a moving web behind hero section.

## Data stored in md files

I've used Gray Matter to read from markdown files. We used this library to behave as a headless CMS.

## Use of local storage

I store locally a value wether dark mode is activated or not.

## Hooks

I've used three hooks here to gain informations about device used, theme selected (light or dark) and to factorize local storage usage.

## Serving

The site is served from Netlify.

## TODO

- [x] Serve
- [x] Fixing Theme switch
- [x] Compress images
- [ ] https://nextjs.org/docs/pages/building-your-application/routing/custom-error
- [ ] custom @netlify/plugin-lighthouse
- [ ] Solve mobile issue with contact section
  - [ ] Look into removing images from avatar
  - [ ] control styling specific for mobile 
- [ ] Fill md


## Thanks

vercel sample blog
free code camps hooks article
daisyui
tsparticles
