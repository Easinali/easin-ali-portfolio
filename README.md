# Premium Bilingual Personal Portfolio – Easin Ali

> **Data Management | MIS Reporting | ERP Operations | Inventory Management | Supply Chain**  
> Assistant Officer at **Paragon Group** | Pursuing MBA & PGD in Supply Chain Management

A production-ready, high-performance personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed specifically for corporate recruiters, HR managers, operational leadership, and professional networking.

---

## 🌟 Key Features

- **Corporate Dark Navy Aesthetic**: Modern executive palette (`#101827`, `#172338`, `#3B82F6`, `#75B8FF`) with clean typography (Inter + Hind Siliguri for authentic Bangla).
- **Dual Bilingual System (English & বাংলা)**:
  - Instant toggle in the navigation bar without full-page reload.
  - Synchronized translations across all sections, project details, form validation, and metadata.
  - Automatically persists user language preference in `localStorage`.
- **9 Dedicated Sections**:
  1. **Hero / Home**: Strong executive positioning, corporate badge, photo frame, and quick CTAs.
  2. **About Me**: Narrative connecting daily operational discipline at Paragon Group with strategic supply chain goals.
  3. **Professional Experience**: Detail of 7 workplace responsibilities at Paragon Group + transferable skills from previous computer & digital services enterprise.
  4. **Education**: Premium academic cards for ongoing MBA & PGD in Supply Chain Management.
  5. **Technical Skills**: Structured into Excel (12 core functions), MIS Reporting, ERP Operations, and Productivity Tools (no misleading percentages).
  6. **Project Portfolio**: 5 interactive project showcases with dedicated detail modals, methodology workflows, and downloadable sample templates.
  7. **Certifications & Training**: Structured records of ongoing and completed professional development.
  8. **Resume / CV**: Direct PDF download and in-browser view with bundled placeholder.
  9. **Contact & Connect**: Direct contact information + validated inquiry form with mailto client launch.
- **Strict Authenticity**:
  - Distinguishes actual workplace operations at Paragon Group from analytical simulations/case studies.
  - No synthetic/fake AI portraits replacing facial identity; uses a stylish placeholder frame with single-step photo drop-in.

---

## 📁 Directory Structure

```text
Website_Portfolio/
├── public/
│   ├── favicon.svg                       # Browser tab icon
│   ├── robots.txt                        # Search engine crawler directives
│   ├── sitemap.xml                       # SEO sitemap
│   ├── documents/
│   │   └── Easin_Ali_CV.pdf              # Your CV / Resume PDF file
│   └── images/
│       ├── profile.jpg                   # [Drop your photo here!]
│       ├── profile-placeholder.svg       # Clean monogram portrait fallback
│       └── projects/                     # High-res SVG project diagrams
│           ├── project-reconciliation.svg
│           ├── project-inventory.svg
│           ├── project-mis-dashboard.svg
│           ├── project-supply-chain.svg
│           └── project-data-management.svg
├── src/
│   ├── assets/                           # Static assets
│   ├── components/
│   │   ├── Navbar.tsx                    # Sticky responsive header + mobile menu
│   │   ├── LanguageSwitcher.tsx          # [ EN ] [ বাংলা ] pill toggle
│   │   ├── ProjectModal.tsx              # Interactive project deep-dive modal
│   │   ├── ContactForm.tsx               # Client-validated contact form
│   │   └── Footer.tsx                    # Corporate footer & back-to-top
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── ResumeSection.tsx
│   │   └── Contact.tsx
│   ├── data/                             # Centralized editable data files
│   │   ├── profileData.ts                # Name, contact info, social links
│   │   ├── experienceData.ts             # Work history, roles & dates
│   │   ├── educationData.ts              # Universities, sessions & courses
│   │   ├── skillsData.ts                 # Categorized skills & contexts
│   │   ├── projectsData.ts               # Case studies, challenges & deliverables
│   │   └── certificationsData.ts         # Training courses & providers
│   ├── translations/
│   │   ├── en.ts                         # Complete English dictionary
│   │   ├── bn.ts                         # Complete বাংলা Unicode dictionary
│   │   └── index.ts
│   ├── hooks/
│   │   └── useLanguage.tsx               # Language Context & persistent storage hook
│   ├── styles/
│   │   └── index.css                     # Tailwind directives & glassmorphism
│   ├── App.tsx
│   └── main.tsx
├── index.html                            # Semantic HTML5 & Open Graph metadata
├── package.json                          # Dependencies & scripts
├── tailwind.config.js                    # Brand colors & typography
├── tsconfig.json                         # TypeScript configuration
├── vercel.json                           # Vercel SPA deployment rules
└── vite.config.ts                        # Vite configuration
```

---

## 🚀 Quick Start (Running Locally)

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) and npm installed.

### 2. Install Dependencies
```bash
cd Website_Portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
This generates the optimized production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Customization & Personalization Guide

### 1. How to Add Your Real Portrait Photo
1. Select a high-resolution, professional portrait photograph of yourself.
2. Rename the image file to: `profile.jpg`.
3. Place it inside the folder:
   ```text
   Website_Portfolio/public/images/profile.jpg
   ```
4. Refresh the webpage. The site will immediately detect and display your real photograph. If missing, it smoothly falls back to the clean monogram placeholder.

### 2. How to Update Your CV / Resume (PDF)
1. Export your latest resume as a PDF.
2. Name the file: `Easin_Ali_CV.pdf`.
3. Save it into:
   ```text
   Website_Portfolio/public/documents/Easin_Ali_CV.pdf
   ```
4. Both the **"Download My CV"** and **"View Resume Online"** buttons will automatically serve your updated document.

### 3. How to Update Personal Details & Contact Info
Open `src/data/profileData.ts` to update:
- Email address (`email`)
- Phone number (`phone`, `phoneDisplay`)
- LinkedIn profile link (`linkedinUrl`)
- Location (`location`, `locationBn`)

### 4. How to Update Work History & Education
- **Experience Dates & Details**: Edit `src/data/experienceData.ts`.
- **Institutions & Academic Sessions**: Edit `src/data/educationData.ts`.
- **Certificates & Training**: Edit `src/data/certificationsData.ts`.

### 5. How to Edit or Add Translations
- **English content**: `src/translations/en.ts`
- **Bangla content**: `src/translations/bn.ts`

---

## 🌐 Free Deployment Guide (Vercel & Netlify)

You can publish this portfolio completely free of cost with a fast global CDN and free SSL certificate.

### Method 1: Deploy on Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Easin Ali Portfolio"
   git branch -M main
   # Create a new repository on https://github.com/new
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and Sign Up / Log In using your GitHub account.
   - Click **"Add New..."** → **"Project"**.
   - Select your portfolio repository from the list and click **"Import"**.

3. **Configure Project Settings**:
   - **Framework Preset**: Vite (detected automatically).
   - **Root Directory**: Select `Website_Portfolio` (if the repo root is the parent) or `./`.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Click **"Deploy"**.

4. **Your Live URL**:
   Within 60 seconds, Vercel will provide a live, free HTTPS URL (e.g. `https://easin-ali-portfolio.vercel.app`).

---

### Method 2: Deploy on Netlify

1. Go to [netlify.com](https://www.netlify.com/) and Sign Up / Log In.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Authorize GitHub and select your repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `Website_Portfolio/dist` (or `dist`)
5. Click **"Deploy Site"**. Your free `.netlify.app` domain is live immediately.

---

## 🧪 Quality Verification Checklist

- [x] TypeScript strict type checks pass (`tsc` zero errors).
- [x] Production build passes cleanly with Vite.
- [x] Responsive layout verified for Desktop, Tablet, and Mobile screens.
- [x] Instant bilingual switching (English ⇄ বাংলা) without page reloads.
- [x] Local storage persistence of language preference.
- [x] Project details modal with overview, challenges, methodology, and metrics.
- [x] Downloadable sample schema template generation.
- [x] Verified CV PDF download and viewing.
- [x] Client-side form validation with bilingual error messages.
- [x] Pre-configured SEO meta tags, Open Graph cards, sitemap, and robots.txt.

---

## 📄 License
Created for **Easin Ali**. All personal data and professional records are proprietary to Easin Ali and Paragon Group.

