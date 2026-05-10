# Vercel Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the personal website from DigitalOcean (Express + CRA dev server) to Vercel's free tier using a static React build and a single serverless function.

**Architecture:** The Express server (one route: `POST /contactMe`) becomes a Vercel serverless function at `api/contactMe.js`. The React app builds statically and is served by Vercel's CDN. SPA routing is handled via rewrites in `vercel.json`.

**Tech Stack:** React (CRA), Vercel serverless functions (Node.js), nodemailer + Gmail OAuth2

---

### Task 1: Create the serverless function

**Files:**
- Create: `api/contactMe.js`

This is the core of the migration — converting the Express route to a Vercel serverless function.

- [ ] **Step 1: Create `api/` directory and serverless function**

Create `api/contactMe.js` with the following content:

```js
const mailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const from = req.body.emailAddress;
    const message = req.body.emailMessage;
    const name = req.body.name;

    if (!from || !message || !name) {
        return res.status(400).json({
            error: "Missing one of the following required attributes. emailMessage, name or emailAddress"
        });
    }

    const email = process.env.EMAIL;

    const gmail = mailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            type: "OAuth2",
            user: email,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            accessToken: process.env.OAUTH_ACCESS_TOKEN,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
    });

    try {
        await gmail.sendMail({
            from: from,
            to: email,
            subject: 'Personal Site Email From (' + from + ')',
            text: message + '\n\nSincerely,\n\n' + name
        });
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
```

Key differences from the original `server/routes/emailClient.js`:
- Uses Vercel's `(req, res)` handler signature instead of Express router
- Transport is created inside the handler (avoids stale tokens across cold starts)
- Uses async/await instead of callbacks
- Returns proper JSON error on non-POST methods
- Environment variables are injected by Vercel automatically (no `dotenv` needed)

- [ ] **Step 2: Verify the file was created correctly**

Run: `cat api/contactMe.js`
Expected: The file content above

---

### Task 2: Create `vercel.json`

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Create `vercel.json` at project root**

```json
{
  "buildCommand": "cd client && npm run build",
  "outputDirectory": "client/build",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- `buildCommand`: Builds the React app from the `client/` directory
- `outputDirectory`: Tells Vercel where the static files live
- `rewrites`: SPA fallback — all routes serve `index.html` so React Router handles them
- Vercel auto-discovers `api/` directory for serverless functions

- [ ] **Step 2: Verify the file was created correctly**

Run: `cat vercel.json`
Expected: Valid JSON matching above

---

### Task 3: Update root `package.json`

**Files:**
- Modify: `package.json`

The root `package.json` needs `nodemailer` as a dependency (Vercel serverless functions use root deps). Remove dependencies that are no longer needed.

- [ ] **Step 1: Update root `package.json`**

Replace the entire file content with:

```json
{
  "name": "personal-website",
  "version": "1.0.0",
  "license": "UNLICENSED",
  "dependencies": {
    "nodemailer": "^6.4.14"
  }
}
```

Changes:
- Added `nodemailer` (needed by the serverless function)
- Removed `concurrently` (no longer running two servers)
- Removed `dotenv` (Vercel injects env vars automatically)
- Removed all scripts (Vercel handles build/start)
- Removed `flightplan` from devDependencies

- [ ] **Step 2: Verify `package.json` is valid JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('package.json'))"` 
Expected: No output (valid JSON)

---

### Task 4: Update the client API call

**Files:**
- Modify: `client/src/components/contact/ContactMeForm.js:47`

Change the axios POST URL from `/contactMe` to `/api/contactMe`. Vercel routes `/api/*` to serverless functions automatically.

- [ ] **Step 1: Update the API endpoint in `ContactMeForm.js`**

In `client/src/components/contact/ContactMeForm.js`, change line 47 from:

```js
                '/contactMe',
```

to:

```js
                '/api/contactMe',
```

- [ ] **Step 2: Verify the change**

Run: `grep -n "api/contactMe" client/src/components/contact/ContactMeForm.js`
Expected: A single match at line 47

---

### Task 5: Delete obsolete files

**Files:**
- Delete: `client/src/setupProxy.js`
- Delete: `server/` directory (entire)
- Delete: `flightplan.js`

These are no longer needed after the migration.

- [ ] **Step 1: Delete `client/src/setupProxy.js`**

Run: `rm client/src/setupProxy.js`

The dev proxy was only needed to forward `/contactMe` to the Express server. Vercel handles this routing automatically in production. For local development, you can use `vercel dev` which provides the same proxy behavior.

- [ ] **Step 2: Delete the `server/` directory**

Run: `rm -rf server/`

The entire Express server is replaced by `api/contactMe.js`.

- [ ] **Step 3: Delete `flightplan.js`**

Run: `rm flightplan.js`

DigitalOcean deployment is no longer used.

- [ ] **Step 4: Verify files are deleted**

Run: `ls server/ client/src/setupProxy.js flightplan.js 2>&1`
Expected: "No such file or directory" for all three

---

### Task 6: Update `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add Vercel directory and remove server references**

In `.gitignore`, add `.vercel/` and remove the `/server/node_modules` line. The final file should be:

```
# dependencies
/node_modules
/client/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# config
.env

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# vercel
.vercel
```

Changes:
- Added `.vercel` (Vercel's local project config directory)
- Removed `/server/node_modules` (server directory deleted)
- Removed `/server/.env` (server directory deleted)

- [ ] **Step 2: Verify `.gitignore` looks correct**

Run: `cat .gitignore`
Expected: The content above

---

### Task 7: Install dependencies and verify build

**Files:**
- None (verification only)

- [ ] **Step 1: Install root dependencies**

Run: `npm install`
Expected: Installs `nodemailer` at root level. No errors.

- [ ] **Step 2: Verify client dependencies are intact**

Run: `cd client && npm ls react react-dom axios 2>&1 | head -20`
Expected: All three packages listed with versions

- [ ] **Step 3: Test client build**

Run: `cd client && npm run build`
Expected: Build completes successfully with output in `client/build/`

- [ ] **Step 4: Verify build output exists**

Run: `ls client/build/index.html`
Expected: File exists

---

### Task 8: Commit all changes

**Files:**
- All modified/created/deleted files from Tasks 1-6

- [ ] **Step 1: Stage all changes**

Run: `git add -A`

- [ ] **Step 2: Review staged changes**

Run: `git diff --cached --stat`
Expected: Shows new files (api/contactMe.js, vercel.json), modified files (package.json, .gitignore, ContactMeForm.js), and deleted files (setupProxy.js, server/*, flightplan.js)

- [ ] **Step 3: Commit**

Run: `git commit -m "migrate: replace Express server with Vercel serverless function for free hosting"`

Expected: Commit succeeds

---

## Post-Implementation: Deploy to Vercel

These steps are done manually by the user (not in code):

1. **Push to GitHub**: `git push origin main`
2. **Connect to Vercel**: Go to vercel.com, import the GitHub repo
3. **Configure environment variables** in Vercel dashboard:
   - `EMAIL`
   - `OAUTH_CLIENT_ID`
   - `OAUTH_CLIENT_SECRET`
   - `OAUTH_ACCESS_TOKEN`
   - `OAUTH_REFRESH_TOKEN`
4. **Deploy**: Vercel will build and deploy automatically
5. **Configure custom domain** (optional): Point `brandon-nolan.ca` to Vercel
6. **Test the contact form**: Submit a test email to verify the serverless function works
7. **Decommission DigitalOcean droplet**: Once verified, cancel the droplet
