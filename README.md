# Full-Stack Interactive Portfolio & Blog Website

A premium, modern, and highly responsive personal portfolio and blogging website featuring real-time user authentication, interactive blog likes/deletes (with admin-only controls), and a fully functional contact form with email notifications.

---

## 🌟 Key Features

*   **Premium Interactive UI**: Crafted with responsive modern layout styles, custom dynamic hover scales, and smooth transitions.
*   **Firebase Authentication**: Secure user signup and sign-in capabilities using Firebase.
*   **Dynamic Blogging System**: 
    *   Public visitors can view blogs and like posts.
    *   An exclusive administrative view allows creating and deleting blog posts.
*   **Working Contact Form**: Integrates backend email dispatch (via Nodemailer) and DB storage.
*   **Aesthetic Footer**: Features beautifully styled, animated contact icons (GitHub, Instagram, LinkedIn, and Email).

---

## 🛠️ Tech Stack

**Frontend:**
*   React 19 (Vite)
*   Tailwind CSS v4 (with PostCSS integration)
*   Firebase Authentication SDK
*   React Icons

**Backend:**
*   Node.js & Express
*   MongoDB Atlas & Mongoose
*   Nodemailer (Gmail Integration)
*   CORS middleware

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** installed on your system.

### 2. Local Setup

**Clone the repository & enter workspace:**
```bash
cd own-website
```

**Set up Backend:**
1. Navigate to backend: `cd backend`
2. Install dependencies: `npm install`
3. Run backend locally: `node index.js` (runs on `http://localhost:4000`)

**Set up Frontend:**
1. Navigate to frontend: `cd ../frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `frontend` folder and add:
   ```env
   VITE_API_URL=http://localhost:4000
   ```
4. Run frontend locally: `npm run dev`

---

## 🌐 Deployment Overview

*   **Backend**: Deployed on **Render** (as a Web Service with Root Directory set to `backend`).
*   **Frontend**: Deployed on **Vercel** (with Root Directory set to `frontend` and the environment variable `VITE_API_URL` pointing to the live Render backend URL).

---

Developed by **[Balakrishnan M](https://github.com/Bala-self)**. All rights reserved.
