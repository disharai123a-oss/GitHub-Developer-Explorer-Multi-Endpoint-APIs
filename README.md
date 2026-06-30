# GitHub Developer Explorer

A simple web app that uses the **GitHub REST API** to look up any GitHub user and explore their profile, repositories, and language statistics — all in one clean dashboard.

## Features

- 🔍 **Search any GitHub user** by username
- 👤 **Profile overview** — avatar, name, bio, followers, following, and public repo count
- 📦 **Repository listing** — name, language, stars, and forks for every repo
- 🔃 **Sort repositories** by star count or name
- 🔎 **Live repository search/filter** as you type
- 📊 **Language distribution chart** — visualizes repo languages as a pie chart using Chart.js
- ⚠️ **Error handling** — alerts for invalid usernames and GitHub API rate limits

## Tech Stack

- HTML5
- CSS3 (responsive, flexbox-based layout)
- Vanilla JavaScript (Fetch API, async/await)
- [Chart.js](https://www.chartjs.org/) for data visualization
- [GitHub REST API](https://docs.github.com/en/rest)

## Project Structure

```
├── index.html      # App markup and layout
├── style.css       # Styling and responsive design
├── script.js       # API calls, rendering, sorting, filtering, chart logic
└── README.md
```

## Getting Started

No build tools or dependencies to install — it's a static site.

1. Clone the repository
   ```bash
   git clone https://github.com/disharai123a-oss/GitHub-Developer-Explorer-Multi-Endpoint-APIs.git
   ```
2. Open `index.html` in your browser

That's it — start typing a GitHub username and hit **Search**.

## How It Works

1. Enter a GitHub username and click **Search**.
2. The app fetches the user's profile via `GET /users/{username}`.
3. It then fetches up to 100 of their repositories via `GET /users/{username}/repos`.
4. Repository data is rendered as cards and summarized in a language pie chart.
5. Use the search box or sort dropdown to filter/reorder repositories in real time.

## Notes

- This app uses the **unauthenticated** GitHub API, which has a rate limit of 60 requests/hour per IP. If you hit the limit, you'll see an alert — try again later.
- Built collaboratively as a team project, with each section of the codebase contributed by a different member.

## License

This project is open source and available under the [MIT License](LICENSE).
