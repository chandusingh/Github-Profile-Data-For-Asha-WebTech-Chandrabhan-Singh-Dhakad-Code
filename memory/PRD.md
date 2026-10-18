# PRD — Asha WebTech × Chandrabhan Singh Dhakad

## Original problem statement
"i have added my two github profile code, make it in very very good desing, add all available stactics data, add all contact information, add all services we provide, add all our websites on both profile
https://github.com/Asha-WebTech-IT-Solutions
https://github.com/chandusingh
Our All Websites & Solutions: ashawebtechitsolutions.com, codelumeitsolution.com, webboxsoftware.com, futurewebdevs.com, webdevprovider.in, marketingtech.in, vanshtechnologies.in, algotrivo.com, codetunix.com, chandrabhansingh.in, ashawebtechitsolutions.in, leadmappo.com, rigorfield.com"
Follow-up: deliver both README files AND a website; README style colorful & vibrant; both profiles list all websites; website shows only some client sites, all apps, extensions, custom web apps, all own websites.

## Architecture
- Frontend-only React SPA (framer-motion, lenis). Data in src/data/content.js.
- README markdown in /app/readmes (copied to frontend/public/readmes for copy/download).
- Real website screenshots saved in frontend/public/shots (script: /app/scripts/shots.py).

## Implemented (2026-10-18)
- Two colorful GitHub READMEs: header, typing SVG, contact badges, stats badges, 13 websites, services, 13 apps, 3 extensions, CRMs/admin panels, client work, tech stack, GitHub stats, socials. Org profile uses org-compatible badges + founder stats (readme-stats cards don't support orgs).
- Website: kinetic masked hero + 3D tilt screenshot stack, marquee, count-up stats, two profile cards w/ live GitHub stats, 13 website cards, services bento, apps/extensions, custom web apps, selected clients, README copy/download, contact.
- Contact data sourced from ashawebtechitsolutions.com & chandrabhansingh.in.

## Backlog
- P1: Contact form with email delivery; SEO meta/OG image
- P2: Full client portfolio page with filters
