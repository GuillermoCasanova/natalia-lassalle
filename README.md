# Natalia Lassalle — Portfolio Website

Bilingual portfolio site for artist Natalia Lassalle Morillo. The frontend is a [SvelteKit](https://kit.svelte.dev/) app that pulls content from [Sanity CMS](https://www.sanity.io/) and deploys to [Vercel](https://vercel.com/). Content is managed in a separate Sanity Studio located in the `cms/` directory.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | SvelteKit 2, Svelte 4, Vite 5 |
| CMS | Sanity Studio 3 (`cms/`) |
| Content API | GROQ queries via `@sanity/client` |
| Rich text | `@portabletext/svelte` |
| Deployment | `@sveltejs/adapter-vercel` (Node.js 24 runtime on Vercel) |
| Email | Gmail OAuth2 via `nodemailer` + `googleapis` |

## Features

- **Bilingual routing** — English (`/en`) and Spanish (`/es`) with automatic content fallbacks
- **Static pre-rendering** — Pages are pre-built at deploy time for fast load times
- **Modular page sections** — Home, about, work, CV, texts, contact, and current pages assembled from Sanity section documents
- **Project detail pages** — Dynamic routes at `/[lang]/work/[slug]` with modular project sections (header, intro, images, video breaks, copy)
- **Contact form** — Server-side email endpoint at `/api/send-mail`
- **SEO** — Meta tags via `svelte-meta-tags` and Sanity-managed SEO fields

## Project Structure

```
natalia/
├── cms/                    # Sanity Studio (content management)
│   ├── schemas/            # Document types, page sections, objects
│   ├── sanity.config.js    # Studio configuration
│   └── desk-structure.js   # Custom desk navigation
├── src/
│   ├── components/         # Svelte UI components
│   ├── lib/
│   │   ├── sanity/         # Locale-aware GROQ helpers & image URLs
│   │   ├── server/         # Server-only Sanity client & email
│   │   └── stores/         # Svelte stores (language state)
│   ├── params/
│   │   └── lang.js         # Route param matcher (en | es)
│   ├── routes/
│   │   ├── [lang=lang]/    # Localized pages
│   │   └── api/send-mail/  # Contact form API
│   └── styles/             # Global CSS (base, grid, breakpoints)
├── svelte.config.js
├── vite.config.js
└── .env.example
```

## Routes

| Path | Description |
| --- | --- |
| `/` | Redirects to `/en` |
| `/[lang]` | Home page |
| `/[lang]/about` | About page |
| `/[lang]/work` | Work index |
| `/[lang]/work/[slug]` | Individual project |
| `/[lang]/cv` | CV / experience |
| `/[lang]/texts` | Writings |
| `/[lang]/contact` | Contact page |
| `/[lang]/current` | Current work |
| `/api/send-mail` | POST — contact form submission (not pre-rendered) |

Supported languages: `en`, `es`

## Prerequisites

- **Node.js** 23.7.0 (see `.nvmrc` — run `nvm use` if you use nvm)
- A Sanity project with read access (project ID and dataset)
- Gmail OAuth credentials (only required for the contact form)

## Getting Started

### 1. Install dependencies

```bash
# Frontend
npm install

# CMS (Sanity Studio)
cd cms && npm install && cd ..
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Scope | Description |
| --- | --- | --- |
| `SANITY_PROJECT_ID` | Server | Sanity project ID |
| `SANITY_DATASET` | Server | Sanity dataset (default: `production`) |
| `SANITY_TOKEN` | Server | Sanity read token for build-time fetching |
| `PUBLIC_SANITY_PROJECT_ID` | Public | Same project ID, exposed to the client for image URLs |
| `PUBLIC_SANITY_DATASET` | Public | Same dataset, exposed to the client |
| `client_id` | Server | Gmail OAuth client ID |
| `client_secret` | Server | Gmail OAuth client secret |
| `redirect_uri` | Server | Gmail OAuth redirect URI |
| `refresh_token` | Server | Gmail OAuth refresh token |
| `auth_user` | Server | Gmail address used to send mail |
| `auth_user_pass` | Server | Gmail app password (if required) |

The Sanity variables are required for local development and production builds. Email variables are only needed if you want the contact form to work.

### 3. Run the development servers

**Frontend** (default: http://localhost:5173):

```bash
npm run dev
```

**CMS** (Sanity Studio, default: http://localhost:3333):

```bash
cd cms && npm run dev
```

## Available Scripts

### Frontend (root)

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build (pre-renders all pages) |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check with `svelte-check` |
| `npm run lint` | Run Prettier and ESLint |
| `npm run format` | Format code with Prettier |

### CMS (`cms/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start Sanity Studio locally |
| `npm run build` | Build the Studio for deployment |
| `npm run deploy` | Deploy Studio to Sanity hosting |

## Content Management

The Sanity Studio lives in `cms/` and connects to project `43ajij5z` (dataset: `production`). The desk is organized around:

- **Settings** — Site-wide navigation, SEO, and analytics (`site-settings`)
- **Site Footer** — Footer links and email blocks (`footer-settings`)
- **Home Page** — Singleton home page with section layout (`page-home`)
- **Documents** — Projects, pages, posts, navigation, tags, modals, and more

Page and project content uses modular **section documents** (hero headers, rich text, project lists, experience lists, etc.) referenced from parent page layouts. The `@sanity/language-filter` plugin enables per-field English/Spanish editing for projects, pages, and posts.

After publishing content in Sanity, rebuild and redeploy the frontend to reflect changes (pages are pre-rendered at build time).

## Internationalization

Language is determined by the URL segment (`/en/...` or `/es/...`). The route param matcher in `src/params/lang.js` restricts values to `en` and `es`.

GROQ queries in `src/lib/sanity/locale-client.js` handle language selection with fallbacks: target language → English → first available. Navigation labels, rich text, project fields, and page sections all use this pattern.

## Deployment

The site uses `@sveltejs/adapter-vercel` with the Node.js 24 runtime on Vercel (Vercel's current default — supported majors are 20.x, 22.x, and 24.x). Local development targets Node 23.7.0 via `package.json` engines and `.nvmrc`. Deploy by connecting the repository to Vercel and setting the environment variables listed above in the project dashboard.

Build command:

```bash
npm run build
```

The build pre-renders all localized routes and project pages. Missing linked pages during pre-render are logged as warnings rather than failing the build (`handleMissingId: 'ignore'` in `svelte.config.js`).

The contact form endpoint (`/api/send-mail`) runs as a serverless function and is excluded from pre-rendering.

## Contact Form

The contact form posts JSON to `/api/send-mail`, which sends email through Gmail using OAuth2. Required request body shape:

```json
{
  "receivers": "recipient@example.com",
  "formData": {
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Hello, I would like to get in touch."
  }
}
```

All Gmail OAuth environment variables must be configured for this endpoint to work in production.

## Path Aliases

Configured in `svelte.config.js`:

| Alias | Path |
| --- | --- |
| `$lib` | `src/lib` |
| `$components` | `src/lib/components` |
| `$stores` | `src/lib/stores` |
| `$utils` | `src/lib/utils` |

## License

Private — see `cms/package.json` for CMS authorship details.
