# Trail Journal

A personal trail journal built with Jekyll, hosted on GitHub Pages.

---

## Setup (one time)

### 1. Prerequisites
Install Ruby and Jekyll on your machine:
- **Mac:** `brew install ruby` then `gem install jekyll bundler`
- **Windows:** Use [RubyInstaller](https://rubyinstaller.org/) then `gem install jekyll bundler`

### 2. Clone and run locally
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
bundle install
bundle exec jekyll serve
```
Open `http://localhost:4000` in your browser.

### 3. Deploy to GitHub Pages
Push to your `main` branch. GitHub Pages builds and publishes automatically.

In your repo Settings → Pages → set Source to `Deploy from branch` → `main` → `/ (root)`.

---

## Adding a new walk

### 1. Create a post file
Add a new file to `_posts/` named `YYYY-MM-DD-your-walk-title.md`

Copy the front matter from an existing post and update the fields:

```yaml
---
layout: walk
title: "Your Walk Title"
subtitle: "A one-line description."
date: 2026-06-15

tags:
  - Heysen Trail
  - Day Walk

hero_image: /assets/images/walks/your-walk-folder/hero.jpg
hero_caption: "Description of the hero image"

stats:
  distance: 12.4        # km
  duration: "2h 45"
  max_elevation: 95
  avg_hr: 118           # optional, remove if not recorded

trail_info:
  trail: "Trail Name"
  section: "Start → End"
  part_of: "Heysen Trail"
  region: "Fleurieu Peninsula"
  duration_range: "2 – 3 hours"
  difficulty: "Moderate"
  difficulty_score: 3   # 1–5
  dogs: "No"
  trail_type: "Linear (car shuttle)"
  start: "Starting point"
  end: "Ending point"
  best_season: "Autumn ✓"

gear:
  - "Item one"
  - "Item two"

gpx_path: /assets/gpx/your-walk.gpx   # optional
---
```

### 2. Add your images
Put photos in `assets/images/walks/your-walk-folder/`

Reference them in the post body like:
```html
<div class="photo-grid">
  <img src="/assets/images/walks/your-walk-folder/photo1.jpg" alt="Description">
  <img src="/assets/images/walks/your-walk-folder/photo2.jpg" alt="Description">
</div>
<p class="photo-caption">Left: Caption · Right: Caption</p>
```

For a full-width image add `class="wide"` to the `<img>` tag.

### 3. Add your GPX (optional)
Put the `.gpx` file in `assets/gpx/` and set the `gpx_path` in the front matter.
The map renders automatically.

### 4. Available content blocks

**Pull quote:**
```html
<div class="pullquote"><p>"Your quote here."</p></div>
```

**Section heading:** Use `## Heading` in Markdown

**Footer metadata line:**
```html
<p class="post-footer-meta">Camera: X · Film: Y · GPX: Z</p>
```

---

## File structure

```
trailjournal/
├── _config.yml              # Site settings — update title, author, url
├── _layouts/
│   ├── default.html         # Site shell (header, footer)
│   └── walk.html            # Walk post template
├── _posts/
│   └── YYYY-MM-DD-title.md  # One file per walk
├── assets/
│   ├── css/main.css         # All styles
│   ├── js/map.js            # GPX map renderer
│   ├── gpx/                 # GPX track files
│   └── images/walks/        # Walk photos (one subfolder per walk)
├── index.html               # Walk listing page
├── about.md                 # About page
└── Gemfile                  # Ruby dependencies
```

---

## Customising

- **Site name & author:** Edit `_config.yml`
- **Colours:** Edit the CSS variables at the top of `assets/css/main.css`
- **Fonts:** Change the Google Fonts import in `assets/css/main.css`
