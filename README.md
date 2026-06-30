# GitHub Developer Explorer

A simple web app that uses the **GitHub REST API** to look up any GitHub user and explore their profile, repositories, and language statistics — all in one clean dashboard.

## Features

- 🔍 **Search any GitHub user** by username
- 👤 **Profile overview** — avatar, name, bio, followers, following, and public repo count
- 📦 **Repository listing** — name, language, stars, and forks for every repo
- 🔃 **Sort repositories** by star count or name
- 🔎 **Filter repositories** by name in real time
- 📊 **Language breakdown chart** — pie chart of languages used across repos, powered by Chart.js
- ⚠️ **Error handling** — alerts for invalid usernames and GitHub API rate limits
- 📱 **Responsive design** — works smoothly on mobile and desktop

## Tech Stack

- **HTML5** — page structure and markup
- **CSS3** — gradient backgrounds, card layouts, hover effects, and responsive media queries
- **JavaScript (Vanilla)** — async/await fetch calls, DOM manipulation, sorting and filtering logic
- **[Chart.js](https://www.chartjs.org/)** — language usage pie chart
- **GitHub REST API** — `/users/{username}` and `/users/{username}/repos` endpoints

## How It Works

1. Enter a GitHub username and click **Search**.
2. The app fetches the user's profile data from the GitHub API and renders it (avatar, bio, follower stats, etc.).
3. It then fetches all public repositories and displays them as cards with language, stars, and forks.
4. Use the **search box** to filter repositories by name, or the **sort dropdown** to order them by stars or name.
5. A **pie chart** visualizes the distribution of programming languages across the user's repositories.

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your browser — no build step or server required.
3. Enter any GitHub username and explore!

```bash
git clone https://github.com/disharai123a-oss/GitHub-Developer-Explorer-Multi-Endpoint-APIs.git
cd GitHub-Developer-Explorer-Multi-Endpoint-APIs
open index.html
```

## Project Structure

```
├── index.html      # Page structure and layout
├── style.css       # Styling, layout, and responsive design
├── script.js       # API calls, rendering, sorting, filtering, and charting logic
└── README.md
```

## Notes

- This app uses the unauthenticated GitHub REST API, which has a rate limit of 60 requests per hour per IP address. If you hit the limit, you'll see an alert and can try again later.
- No API key or backend is required — everything runs client-side in the browser.

## License

This project is open source and available for personal and educational use.
