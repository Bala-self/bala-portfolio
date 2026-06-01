<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=Balakrishnan%20M&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Full-Stack%20Developer%20%7C%20React%20%7C%20Node.js%20%7C%20Firebase&descAlignY=60&descSize=18&animation=fadeIn" width="100%" />

<!-- Typing SVG -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=800&color=A78BFA&center=true&vCenter=true&multiline=false&width=700&lines=🚀+Building+Premium+Web+Experiences;⚡+React+19+%2B+Node.js+%2B+MongoDB;🔥+Full-Stack+Interactive+Portfolio;✨+Firebase+Auth+%2B+Real-Time+Features;💡+Clean+Code+%7C+Bold+UI+%7C+Zero+Compromise" alt="Typing SVG" />
</a>

<br/>

<!-- Profile Badges -->
[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-bala--portfolio--psi.vercel.app-6366f1?style=for-the-badge&logoColor=white)](https://bala-portfolio-psi.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Bala--self-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Bala-self)
[![Status](https://img.shields.io/badge/Status-Active_Development-22c55e?style=for-the-badge&logoColor=white)]()

</div>

---

<div align="center">

<!-- Snake Animation -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" />
  <img alt="github-snake" src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" width="80%" />
</picture>

</div>

---

## ✨ Project Overview

<table>
<tr>
<td width="60%">

> **A premium, full-stack personal portfolio & blog platform** built with cutting-edge tools — featuring real-time Firebase authentication, a dynamic blog engine with admin controls, an animated UI, and a working contact form with email notifications.
>
> 🌐 **Deployed Live** → [bala-portfolio-psi.vercel.app](https://bala-portfolio-psi.vercel.app)

</td>
<td width="40%" align="center">

```
📁 bala-portfolio/
├── 🖥️  frontend/       ← React 19 + Vite
│   ├── 🎨 Tailwind CSS v4
│   └── 🔥 Firebase Auth SDK
│
├── ⚙️  backend/        ← Node.js + Express
│   ├── 🍃 MongoDB Atlas
│   └── 📧 Nodemailer
│
└── 🚀 vercel.json      ← Deployment config
```

</td>
</tr>
</table>

---

## 🌟 Features at a Glance

<div align="center">

| ⚡ Feature | 📋 Description |
|:---|:---|
| 🎨 **Premium UI** | Responsive layouts with custom hover scales, smooth transitions & fluid animations |
| 🔐 **Firebase Auth** | Secure user signup & sign-in with Firebase Authentication SDK |
| 📝 **Dynamic Blogging** | Public visitors view & like posts; Admin creates and deletes content |
| 📬 **Contact Form** | Live email dispatch via Nodemailer + MongoDB message storage |
| 🔒 **Admin Controls** | Exclusive admin role — only admin can create/delete blog posts |
| 🦶 **Animated Footer** | Beautifully styled GitHub, Instagram, LinkedIn & Email icon animations |
| ☁️ **Cloud Deployed** | Frontend on Vercel · Backend on Render · DB on MongoDB Atlas |

</div>

---

## 🛠️ Tech Stack

<div align="center">

### 🖥️ Frontend

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)

### ⚙️ Backend

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9DCE?style=for-the-badge&logo=gmail&logoColor=white)

### ☁️ DevOps & Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas_Cloud-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## 🚀 Getting Started

### Prerequisites

```bash
# Ensure Node.js is installed
node --version   # v18+ recommended
npm --version
```

### ⬇️ Clone & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Bala-self/bala-portfolio.git
cd bala-portfolio
```

### ⚙️ Backend Setup

```bash
cd backend
npm install

# Configure your environment variables
# Create a .env file in /backend with:
# MONGO_URI=your_mongodb_atlas_connection_string
# EMAIL_USER=your_gmail_address
# EMAIL_PASS=your_gmail_app_password

node index.js
# ✅ Backend running on http://localhost:4000
```

### 🖥️ Frontend Setup

```bash
cd ../frontend
npm install

# Create .env file in /frontend:
echo "VITE_API_URL=http://localhost:4000" > .env

npm run dev
# ✅ Frontend running on http://localhost:5173
```

---

## 🌐 Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                         │
│              https://bala-portfolio-psi.vercel.app      │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTPS
          ┌────────────▼────────────┐
          │    VERCEL  (Frontend)   │
          │    React 19 + Vite      │
          │    Root Dir: /frontend  │
          └────────────┬────────────┘
                       │ REST API calls
          ┌────────────▼────────────┐
          │   RENDER  (Backend)     │
          │   Node.js + Express     │
          │   Root Dir: /backend    │
          └──────┬──────────────────┘
                 │          │
    ┌────────────▼──┐   ┌───▼──────────────┐
    │  MongoDB Atlas │   │  Firebase Auth   │
    │  (DB + Blogs)  │   │  (User Sessions) │
    └────────────────┘   └──────────────────┘
```

---

## 📂 Project Structure

```
bala-portfolio/
│
├── 📁 frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI Components
│   │   ├── pages/            # Route-level Pages
│   │   ├── firebase.js       # Firebase SDK config
│   │   └── main.jsx          # App entry point
│   ├── .env                  # VITE_API_URL
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── 📁 backend/
│   ├── index.js              # Express server entry
│   ├── routes/               # API route handlers
│   ├── models/               # Mongoose schemas
│   └── .env                  # Secrets (not committed)
│
├── vercel.json               # Vercel routing config
└── README.md
```

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Bala-self&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a78bfa&icon_color=6366f1&text_color=c9d1d9" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Bala-self&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a78bfa&text_color=c9d1d9" height="165" />

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com?user=Bala-self&theme=tokyonight&hide_border=true&background=0d1117&ring=a78bfa&fire=6366f1&currStreakLabel=a78bfa" />

</div>

---

## 🏗️ Architecture Highlights

<details>
<summary>🔐 <strong>Authentication Flow (Firebase)</strong></summary>
<br/>

- Users sign up / sign in via **Firebase Authentication**
- Auth state is persisted across page reloads
- Admin check is performed server-side to guard sensitive routes
- Firebase SDK is initialized client-side via environment config

</details>

<details>
<summary>📝 <strong>Blog System Design</strong></summary>
<br/>

- Blog posts stored in **MongoDB Atlas** via Mongoose schemas
- Public users can **view and like** posts (no login required)
- **Admin-only** actions: create post, delete post
- Likes are tracked per post document in the DB

</details>

<details>
<summary>📬 <strong>Contact Form Pipeline</strong></summary>
<br/>

1. User submits form on frontend
2. Frontend sends `POST /api/contact` to Express backend
3. Backend saves message to MongoDB
4. Backend triggers **Nodemailer** to send email to Balakrishnan's Gmail
5. User receives success confirmation

</details>

<details>
<summary>☁️ <strong>Deployment Strategy</strong></summary>
<br/>

| Layer | Platform | Config |
|:------|:---------|:-------|
| Frontend | Vercel | Root Dir: `/frontend`, env: `VITE_API_URL` |
| Backend | Render | Root Dir: `/backend`, Web Service |
| Database | MongoDB Atlas | Cloud-hosted cluster |
| Auth | Firebase | Client-side SDK |

</details>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```bash
# Fork → Clone → Branch → Commit → Push → PR 🚀
git checkout -b feature/your-amazing-idea
git commit -m "✨ feat: add amazing feature"
git push origin feature/your-amazing-idea
```

---

## 📜 License

This project is developed by **[Balakrishnan M](https://github.com/Bala-self)**.  
All rights reserved © 2025 Balakrishnan M.

---

<div align="center">

### 💬 Connect with Me

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Bala-self)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/balakrishnan-m)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com)
[![Email](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:balakrishnan@email.com)

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer&animation=fadeIn" width="100%"/>

**⭐ If you like this project, please give it a star! It means a lot 🙏**

![Profile Views](https://komarev.com/ghpvc/?username=Bala-self&color=a78bfa&style=for-the-badge&label=Profile+Views)

</div>
