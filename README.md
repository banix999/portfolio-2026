# Creative Portfolio Website

Plain HTML, CSS and JavaScript. No build step. Open `index.html` in a browser to preview.

## Structure
```
index.html           page markup
css/styles.css       all styles
js/config.js         YOUR details + media paths (edit this one)
js/main.js           site behavior (nav, filters, lightbox, videos, 3D hero, form)
assets/images        photos, thumbnails, posters
assets/videos        mp4 files
assets/certificates  certificate images
assets/logos         brand/client logos
```

## 1. Add your details
Open `js/config.js` and set `name`, `email`, and the `socials` links (Instagram, YouTube, LinkedIn, TikTok, Facebook).
Also replace "Your Name" and "YN." in `index.html` (search for them), plus the title and description in `<head>`.

## 2. Add your media
Copy files into `assets/` and list them in `js/config.js` (see the examples at the bottom of that file).
Anything left empty shows a labelled placeholder.
- 5 portrait videos (9:16), 6 landscape videos (16:9), 16 photos (4:5), 12 grading pairs (16:9)
- Use compressed MP4 (H.264). GitHub blocks files over 100 MB and the web uploader limits files to 25 MB.

## 3. Make the contact form send
1. Create a free account at https://www.emailjs.com, add an email service and a template.
2. Template variables: `from_name`, `reply_to`, `subject`, `message`.
3. Put the Service ID, Template ID and Public Key in `CFG.emailjs` in `js/config.js`.
Until then the form shows an honest "not sent" message with an email fallback.

## 4. Upload to GitHub and publish
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
Then on GitHub: Settings > Pages > Source: "Deploy from a branch" > Branch: `main` / `(root)` > Save.
Your site will be at `https://YOUR-USERNAME.github.io/YOUR-REPO/` (or name the repo `YOUR-USERNAME.github.io` for the root URL).

## Notes
- The 3D hero loads Three.js (r128) and Inter from CDNs, so it needs internet.
- Animations respect the visitor's reduced-motion setting, except the tools and collaborations tickers.
