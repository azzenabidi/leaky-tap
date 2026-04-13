# 🍺 The Leaky Tap — Fan Website

> *"Hot Meals. Cold Ale. Warm Company."*

A fan-made website for **The Leaky Tap**, the fictional tavern from **Critical Role Campaign 2: The Mighty Nein**, located in the Outersteads of Zadash in the Dwendalian Empire.

![The Leaky Tap](https://img.shields.io/badge/Critical%20Role-Fan%20Site-D4820A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNUwxMiAyeiIgZmlsbD0iI0Q0ODIwQSIvPjwvc3ZnPg==)

---

## ✨ Features

- **Fully responsive** static website (HTML/CSS/JS — no framework)
- **Dark amber tavern aesthetic** with animated embers, fire glow, and candlelit atmosphere
- **Lore-accurate details** sourced from the Critical Role wiki and transcripts
- Sections: About · Menu · Rooms · Staff · Events · Find Us

## 🚀 Running Locally

### With Docker (recommended)

```bash
# Build and run
docker compose up --build

# Visit http://localhost:8080
```

### Without Docker

Just open `index.html` in a browser — it's a pure static site with no build step.

## 🐳 Docker Hub

The image is automatically built and pushed to Docker Hub on every push to `main`.

```bash
# Pull and run from Docker Hub
docker pull YOUR_DOCKERHUB_USERNAME/leaky-tap:latest
docker run -p 8080:80 YOUR_DOCKERHUB_USERNAME/leaky-tap:latest
```

## 🔧 Setup: GitHub Actions & Docker Hub

To enable automatic Docker image builds, add these **repository secrets** in GitHub:

| Secret | Value |
|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | A Docker Hub access token |

Go to: **Repository → Settings → Secrets and variables → Actions → New repository secret**

## 📁 Project Structure

```
leaky-tap/
├── index.html              # Main HTML
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Scroll & interaction logic
├── Dockerfile              # nginx:alpine image
├── nginx.conf              # Nginx server config
├── docker-compose.yml      # Local dev compose
├── .github/
│   └── workflows/
│       └── docker.yml      # CI/CD: build + push to Docker Hub
└── README.md
```

## ⚔️ Lore Credits

All Critical Role lore belongs to **Critical Role** and **Gilmore's Glorious Goods LLC**.
This is a fan tribute site — non-commercial, made with love by a Critter.

- Leaky Tap first appeared in **Campaign 2, Episode 9** ("Steam and Conversation")
- Barkeep: **Wessek the Trim** (white dragonborn)
- Owner: **Lauren Schvine** (formerly Claudia Sheed)
- Location: Eastern Outersteads, Zadash, Dwendalian Empire

---

*"But there's six of you."* — Wessek the Trim
