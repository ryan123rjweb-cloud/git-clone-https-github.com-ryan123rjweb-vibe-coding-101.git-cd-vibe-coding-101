# 🏈 GridironSpread | Football Spread Ranker & Edge Analytics

A modern, responsive football spread confidence ranking dashboard and algorithmic suggestion tool. Designed for NFL pick'em pools, confidence pools, and sports betting spread analysis.

---

## ⚡ Features

- **Confidence Pool Ranking (1–16)**:
  - Assign confidence point values (1 to 16) to each matchup.
  - Automatic collision resolution (smooth rank swapping).
  - Pick against the spread (ATS) for Favorites or Underdogs.

- **Algorithmic Suggestion Engine**:
  - Calculates line value edge comparing market spreads with projected power ratings.
  - **Key Number Detection**: Analyzes critical margin landings (such as 3 and 7, plus half-point hooks like 2.5 and 3.5).
  - Visual edge badges: `Top Lock`, `Value Pick`, `Value Dog`.
  - **"Why?" Rationale Breakdown**: Deep dive into situational angles, efficiency metrics, and injury/rest edges for each matchup.

- **One-Click Auto-Rank (`⚡ Auto-Rank by Suggestions`)**:
  - Instantly evaluates every matchup in the week, selects the model-favored side, and ranks them in descending order of confidence edge.

- **Interactive Score Simulator & Grader**:
  - Test your confidence pool score against simulated realistic NFL scores or enter actual final scores to calculate ATS win rate, pushes, and total points won.

- **Multi-Week & Custom Matchups**:
  - Preloaded with full week matchups, spreads, and totals.
  - Ability to add, edit, or adjust custom matchups and live sportsbook line movements.

- **Export & Share**:
  - One-click copy formatted summary for Discord, Reddit, or office pool chats.
  - JSON import/export and browser `localStorage` autosave.

---

## 🚀 Quick Start (Running Locally)

This project has **zero build dependencies** and runs natively in any modern browser:

1. Open the project folder:
   ```
   C:\Users\ryanj\.gemini\antigravity\scratch\football-spread-ranker
   ```
2. Double-click `index.html` (or right-click and open with Chrome, Edge, Firefox, or Safari).

---

## 📤 Pushing to Your GitHub Repository

To push this project to your GitHub account ([`ryan123rjweb-cloud`](https://github.com/ryan123rjweb-cloud)):

1. Open a terminal (PowerShell or Git Bash) inside the project directory:
   ```bash
   cd "C:\Users\ryanj\.gemini\antigravity\scratch\football-spread-ranker"
   ```

2. Stage and commit all files:
   ```bash
   git add .
   git commit -m "feat: Football spread ranker and AI suggestion engine"
   git branch -M main
   ```

3. Connect your GitHub repository (replace `<YOUR-REPO-NAME>` with the repository you created):
   ```bash
   git remote add origin https://github.com/ryan123rjweb-cloud/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

---

## 🌐 Free Instant Hosting on GitHub Pages

Once pushed to GitHub, you can publish this app for free as a public website:

1. Go to your repository on GitHub (`https://github.com/ryan123rjweb-cloud/<YOUR-REPO-NAME>`).
2. Click **Settings** ➔ **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, your website will be live at:
   ```
   https://ryan123rjweb-cloud.github.io/<YOUR-REPO-NAME>/
   ```

---

## 🛠️ Tech Stack

- **HTML5 & Modern CSS3**: Custom glassmorphism, responsive grid layout, and sports dashboard dark mode.
- **Vanilla JavaScript (ES6+)**: Zero framework overhead, instantaneous performance, localStorage persistence, and mathematical spread edge calculation.
