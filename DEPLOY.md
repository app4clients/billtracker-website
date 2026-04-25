# 🚀 Netlify Auto-Deploy Setup Guide

Follow these steps to auto-deploy your website to Netlify every time you push changes to GitHub.

---

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `billtracker-website` (or any name you like)
3. Set to **Public** or **Private** (both work with Netlify)
4. **Do NOT** initialize with README (we already have files)
5. Click **Create repository**

---

## Step 2: Upload Your Project to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - BillTracker website"

# Connect to GitHub (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Connect Netlify to GitHub

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up / Log in with your **GitHub account**
3. Click **"Add new site" → "Import an existing project"**
4. Select **"Deploy with GitHub"**
5. Find and select your `billtracker-website` repository
6. Netlify will auto-detect the `netlify.toml` config ✅
7. Click **"Deploy site"**

---

## Step 4: Wait ~30 seconds... Done! 🎉

Netlify will:
- ✅ Run `npm run build`
- ✅ Publish the `dist/` folder
- ✅ Give you a free URL like `https://random-name-12345.netlify.app`

---

## Step 5 (Optional): Customize Your URL

In Netlify dashboard:
1. Go to **Site settings → Domain management**
2. Click **Change site name**
3. Pick a name like: `billtracker.netlify.app`

Or add your own custom domain (e.g., `billtracker.app`)

---

## 🔄 How Auto-Deploy Works

From now on, every time you:

```bash
# 1. Edit files (e.g., change logo in config.ts)

# 2. Push to GitHub
git add .
git commit -m "Updated logo"
git push
```

Netlify will **automatically** rebuild and redeploy your site in ~30 seconds! 🚀

---

## 📝 Quick Reference

| What | Where |
|------|-------|
| Change logo/text/URLs | Edit `src/config.ts` |
| Change design/layout | Edit `src/App.tsx` |
| Deploy settings | Edit `netlify.toml` |
| Site URL | Netlify dashboard → Domain management |
| Build logs | Netlify dashboard → Deploys tab |

---

## ⚡ Even Faster: One-Click Deploy

If you don't want GitHub auto-deploy and just want to deploy RIGHT NOW:

1. Run `npm run build` locally
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Done in 10 seconds!

(But you'll need to re-upload manually each time you make changes)
