# 🚀 Step-by-Step Deployment Guide

## Your Info
- GitHub: https://github.com/app4clients
- Email: support@app4clients.com

---

## PART 1: Upload to GitHub

### Step 1: Create Repository on GitHub
1. Go to: https://github.com/new
2. Repository name: `billtracker-website`
3. Description: `All-in-One Bill Tracker - Official Website`
4. Set to **Public**
5. ❌ Do NOT check "Add a README"
6. ❌ Do NOT choose a .gitignore template
7. ❌ Do NOT choose a license
8. Click **"Create repository"**

### Step 2: Open Terminal in Your Project Folder
- If you're using VS Code: Terminal → New Terminal
- If you're using a file explorer: Right-click in the project folder → "Open in Terminal"

### Step 3: Run These Commands (copy-paste one by one)

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit - All-in-One Bill Tracker website"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/app4clients/billtracker-website.git
```

```bash
git push -u origin main
```

⚠️ If asked to login, use your GitHub credentials or Personal Access Token.

✅ Done! Your code is now on GitHub at:
https://github.com/app4clients/billtracker-website

---

## PART 2: Connect Netlify to GitHub

### Step 1: Go to Netlify
1. Open: https://app.netlify.com
2. Click **"Sign up"** if you don't have an account
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Netlify to access your GitHub

### Step 2: Import Your Site
1. After login, click **"Add new site"** (or "Sites" → "Add new site")
2. Select **"Import an existing project"**
3. Select **"Deploy with GitHub"**
4. If asked, click **"Authorize Netlify"** for GitHub
5. Find and click on **"app4clients"** (your organization)
6. Find and click on **"billtracker-website"** repository

### Step 3: Configure Build Settings
Netlify will auto-detect `netlify.toml` — just verify:

| Setting | Value |
|---------|-------|
| Branch to deploy | `main` |
| Build command | `npm run build` |
| Publish directory | `dist` |

⚠️ If not auto-detected, enter them manually.

### Step 4: Deploy!
1. Click **"Deploy site"**
2. Wait ~30-60 seconds
3. ✅ Your site is LIVE!

Netlify gives you a URL like:
```
https://random-name-12345.netlify.app
```

### Step 5: Customize Your URL
1. In Netlify dashboard → **Site settings**
2. Click **"Domain management"**
3. Click **"Change site name"**
4. Type: `allinonebilltracker` (or any name you like)
5. Click **Save**

Your new URL:
```
https://allinonebilltracker.netlify.app
```

---

## PART 3: How to Update Your Website

After making changes to your code, run these commands:

```bash
git add .
```

```bash
git commit -m "Updated logo and pricing"
```

```bash
git push
```

Netlify will **automatically** rebuild and deploy in ~30 seconds! 🔄

---

## Quick Reference

| What | Command / URL |
|------|--------------|
| GitHub repo | https://github.com/app4clients/billtracker-website |
| Netlify dashboard | https://app.netlify.com |
| Update website | `git add . && git commit -m "Update" && git push` |

---

## ⚡ Alternative: One-Click Deploy (No GitHub)

If you just want to deploy RIGHT NOW without GitHub:

1. Run `npm run build` in terminal
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder onto the page
4. Done in 10 seconds!

(But you'll need to re-upload manually each time you make changes)
