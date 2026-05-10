# Vercel Migration Design

## Goal

Migrate the personal website from a DigitalOcean droplet (Express + CRA dev server via PM2) to Vercel's free Hobby tier, using a static React build and a single serverless function for the contact form.

## Current Architecture

- **Client**: Create React App on port 3030, served by react-scripts dev server in production
- **Server**: Express on port 3002 with a single route `POST /contactMe` that sends email via nodemailer + Gmail OAuth2
- **Deployment**: Flightplan deploys to a DigitalOcean droplet, runs both via PM2 + concurrently
- **Dev proxy**: `setupProxy.js` proxies `/contactMe` from CRA dev server to Express

## Target Architecture

- **Frontend**: Static React build (`client/build/`) served by Vercel's CDN
- **API**: Single Vercel serverless function at `api/contactMe.js` replacing the entire Express server
- **No PM2, no concurrently, no Express server running**

## Changes

### 1. Add `vercel.json` (project root)

```json
{
  "buildCommand": "cd client && npm run build",
  "outputDirectory": "client/build",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The `rewrites` rule ensures SPA routing works (all paths serve `index.html` so React Router handles them). Vercel automatically discovers serverless functions in the `api/` directory.

### 2. Create `api/contactMe.js`

A Vercel serverless function handler that:
- Accepts `POST` with JSON body `{ name, emailAddress, emailMessage }`
- Creates the nodemailer transport inside the handler (avoids stale OAuth tokens across cold starts)
- Sends email via Gmail OAuth2 using environment variables
- Returns `{ message: "Email sent successfully!" }` on success
- Returns error JSON on failure or missing fields

Environment variables required on Vercel: `EMAIL`, `OAUTH_CLIENT_ID`, `OAUTH_CLIENT_SECRET`, `OAUTH_ACCESS_TOKEN`, `OAUTH_REFRESH_TOKEN`

Dependencies (`nodemailer`) must be installed at the project root or the function must bundle it. Since Vercel serverless functions use the root `package.json` dependencies, `nodemailer` needs to be added there.

### 3. Update `client/src/components/contact/ContactMeForm.js`

Change the axios POST URL from `/contactMe` to `/api/contactMe`.

### 4. Delete `client/src/setupProxy.js`

No longer needed. Vercel automatically routes `/api/*` to serverless functions.

### 5. Delete `server/` directory

The entire Express server is replaced by the single serverless function.

### 6. Delete `flightplan.js`

DigitalOcean deployment is no longer used.

### 7. Update root `package.json`

- Add `nodemailer` as a dependency (needed by the serverless function)
- Remove `concurrently` (no longer running two servers)
- Remove `flightplan` from devDependencies
- Remove `dotenv` (Vercel injects env vars automatically)
- Update/remove scripts (`client`, `server`, `production`)

### 8. Update `.gitignore`

Add any Vercel-specific entries if needed (`.vercel/` directory).

## What Stays Unchanged

- All client components, pages, styles, and routing
- All `client/package.json` dependencies
- The GitHub API call in `ProjectsPagination.js`
- Gmail OAuth2 email sending mechanism

## Vercel Free Tier Limits

- 100GB bandwidth/month
- Serverless function execution: 10s timeout
- 1000 builds/month
- The contact form sends a single email per request — well within limits

## Deployment Steps (post-implementation)

1. Push changes to GitHub
2. Connect repo to Vercel
3. Configure the 5 environment variables in Vercel dashboard
4. Deploy
5. Optionally configure custom domain (brandon-nolan.ca) in Vercel
6. Decommission DigitalOcean droplet
