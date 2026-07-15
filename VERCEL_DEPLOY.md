# Vercel Deployment

This site uses **static site generation (SSG)** on Vercel. Sanity is queried at build time only — visitors receive prebuilt HTML from the CDN.

## Environment variables

Set these in the Vercel project dashboard (**Settings → Environment Variables**):

| Variable | Required | Description |
|----------|----------|-------------|
| `SANITY_PROJECT_ID` | Yes | Sanity project ID (`43ajij5z`) |
| `SANITY_DATASET` | Yes | Dataset name (`production`) |
| `SANITY_TOKEN` | Yes | Sanity read token for build-time fetches |
| `PUBLIC_SANITY_PROJECT_ID` | Yes | Same project ID, used for client-side image URLs |
| `PUBLIC_SANITY_DATASET` | Yes | Same dataset, used for client-side image URLs |
| `client_id` | Yes | Gmail OAuth client ID (contact form) |
| `client_secret` | Yes | Gmail OAuth client secret |
| `redirect_uri` | Yes | Gmail OAuth redirect URI |
| `refresh_token` | Yes | Gmail OAuth refresh token |
| `auth_user` | Yes | Gmail sender address |
| `auth_user_pass` | Yes | Gmail app password (if used) |

Copy from [`.env.example`](.env.example) for local development.

## Automatic rebuilds on CMS changes

To refresh the site when content is published in Sanity (without a manual git push):

### 1. Create a Vercel Deploy Hook

1. Open the Vercel project → **Settings → Git → Deploy Hooks**
2. Create a hook named `sanity-rebuild` targeting the `main` branch
3. Copy the hook URL

### 2. Create a Sanity webhook

1. Open [sanity.io/manage](https://www.sanity.io/manage) → project `43ajij5z`
2. Go to **API → Webhooks → Create webhook**
3. Set URL to the Vercel Deploy Hook URL
4. Trigger on **Create**, **Update**, **Delete**
5. Filter to document types: `project`, `page`, `page-home`, `post`, `site-settings`, `footer-settings`, `modal`
6. Use POST method, no custom headers required

When an editor publishes in Sanity, Vercel rebuilds the site and all pages are regenerated with fresh CMS data.

## Local build

```bash
cp .env.example .env   # fill in values
npm run build
npm run preview
```

## Routes

- English: `/en`, `/en/work`, `/en/about`, etc.
- Spanish: `/es`, `/es/work`, `/es/about`, etc.
- Legacy URLs (`/work/foo`, `/?lang=es`) redirect to the new paths automatically.
