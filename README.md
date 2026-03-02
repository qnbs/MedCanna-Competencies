
# MedCanna Competencies Guide / MedCanna Kompetenzleitfaden

> **Disclaimer / Haftungsausschluss**
> This application is for **educational purposes only**. It does **not** constitute medical advice. Always consult licensed healthcare professionals and verify information against the original publication and your local laws before making clinical decisions. Cannabis regulations vary by jurisdiction.
>
> Diese Anwendung dient **ausschließlich Bildungszwecken**. Sie stellt **keine** medizinische Beratung dar. Konsultieren Sie stets medizinisches Fachpersonal und überprüfen Sie die Informationen anhand der Originalpublikation und Ihrer lokalen Gesetze.

---

## Live Demo

**[https://qnbs.github.io/MedCanna-Competencies/](https://qnbs.github.io/MedCanna-Competencies/)**

---

## Overview / Überblick

The **MedCanna Competencies Guide** is an interactive, educational web application designed to help healthcare professionals, students, and researchers master the medical cannabis competencies outlined in the 2025 consensus statement by **Zolotov Y et al.** published in *JAMA Network Open*.

Der **MedCanna Kompetenzleitfaden** ist eine interaktive Webanwendung, die medizinisches Fachpersonal bei der Beherrschung der Kompetenzen für medizinisches Cannabis unterstützt.

### Features / Funktionen

| Feature | Description |
|---|---|
| **Curriculum Explorer** | Navigate through all 6 core competency domains and 26 subcompetencies |
| **Clinical Simulator** | Longitudinal patient cases (EHR style) for dosing, product selection, monitoring |
| **Plant Pharmacology Guide** | Cannabinoids, terpenes, flavonoids reference with entourage effect data |
| **AI Tutor** | Google Gemini-powered assistant grounded in the consensus statement |
| **Quiz Mode** | Domain-specific MCQs with detailed explanations |
| **Multi-Language** | Full EN/DE localization |

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/qnbs/MedCanna-Competencies.git
cd MedCanna-Competencies
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run preview
```

---

## How to Set the Gemini API Key

The AI Tutor requires a **Google Gemini API key**. For security, keys are **never** embedded in the build — they are entered at runtime and stored encrypted in your browser's IndexedDB.

1. Visit [Google AI Studio](https://aistudio.google.com/apikey) and create an API key
2. *(Recommended)* Restrict the key to `*.github.io` in the API key settings
3. Open the app → **Settings** → **Gemini API Key** section
4. Paste your key and click **Save**

The key stays in your browser only. Clearing site data removes it.

---

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow that deploys automatically.

### Setup (one-time)

1. Go to **Settings → Pages** in your GitHub repository
2. Under **Build and deployment**, select **Source: GitHub Actions**
3. Push to `main` — the workflow triggers automatically
4. Your site is live at `https://<owner>.github.io/MedCanna-Competencies/`

### Manual deploy

Go to **Actions → Deploy to GitHub Pages → Run workflow**.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| **Blank page after deploy** | Check that `base` in `vite.config.ts` matches your repo name (`/MedCanna-Competencies/`) |
| **Assets not loading (404)** | Ensure GitHub Pages source is set to "GitHub Actions", not "Deploy from branch" |
| **AI Tutor says "key missing"** | Open Settings and enter your Gemini API key |
| **SPA routes return 404** | The `public/404.html` handles this — ensure it's in the build output |

---

## Tech Stack

- **React 19** + **TypeScript 5.8** + **Vite 6**
- **Recharts** (data visualization)
- **Lucide React** (icons)
- **Google Generative AI SDK** (`@google/genai`)
- **Tailwind CSS** (utility-first styling)
- **IndexedDB** (secure client-side key storage)

---

## Citation

> Zolotov Y, Temple LM, Isralowitz R, et al. Developing medical cannabis competencies: a consensus statement. JAMA Netw Open. 2025;8(10):e2535049. doi:10.1001/jamanetworkopen.2025.35049

---

## License

[MIT](LICENSE)
