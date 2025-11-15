# Deploying to GitHub Pages

## Option 1: Deploy from the `static-site` folder (Recommended)

### Step 1: Initialize Git in the static-site folder (if not already done)
```bash
cd static-site
git init
```

### Step 2: Create a GitHub repository
1. Go to GitHub.com and create a new repository (e.g., `indus-routes-website`)
2. **Do NOT** initialize it with a README, .gitignore, or license

### Step 3: Add all files and commit
```bash
cd static-site
git add .
git commit -m "Initial commit - Indus Routes static website"
```

### Step 4: Add remote and push
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Option 2: Deploy from root directory with `static-site` as subfolder

If you want to keep everything in one repository:

### Step 1: Create a `.nojekyll` file (important for GitHub Pages)
```bash
cd static-site
touch .nojekyll
git add .nojekyll
```

### Step 2: Follow Steps 2-4 from Option 1

### Step 3: Enable GitHub Pages with custom folder
1. Go to **Settings** → **Pages**
2. Select **main** branch
3. Select **/static-site** as the folder
4. Click **Save**

---

## Quick Deploy Script

You can also use this script to deploy:

```bash
#!/bin/bash
cd static-site
git add .
git commit -m "Update website"
git push origin main
```

---

## Important Notes:

1. **Make sure `index.html` is in the root** of the folder you're deploying
2. **All paths should be relative** (which they already are: `css/style.css`, `img/...`, etc.)
3. **GitHub Pages may take a few minutes** to build and deploy your site
4. **Check the Actions tab** in your GitHub repo if deployment fails

---

## Troubleshooting:

- If images don't load: Check that all image paths are relative (start with `img/` not `/img/`)
- If CSS doesn't load: Verify CSS paths are relative
- If you see a 404: Make sure `index.html` is in the root of the deployed folder
- If you need to force refresh: Add `?v=2` to your CSS/JS links or clear browser cache



