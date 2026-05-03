# 🟠 SkillSphere — Online Learning Platform


## 🎯 Purpose

SkillSphere is a full-stack online learning platform that connects learners with expert-led courses in web development, data science, machine learning, mobile development, and more. The platform is designed to make high-quality education accessible and personalized — featuring secure user authentication, a course discovery experience, and a user profile dashboard. Built as part of a university/bootcamp assignment (Assignment 8), it demonstrates real-world Next.js application development with authentication, routing, and dynamic data rendering.

---

## 🌐 Live URL

🔗 **[https://assignment-8-orange-skill-sphere-on.vercel.app/](https://assignment-8-orange-skill-sphere-on.vercel.app/)**

---

## ✨ Key Features

- **🏠 Home Page** — Hero section with CTA, popular courses showcase, top instructors, learning tips & strategies, and trending courses
- **📚 All Courses Page** — Browse the full course catalog with a live keyword search bar
- **🔍 Course Detail Page** — In-depth view of each course (protected — login required)
- **🔐 User Authentication** — Email/password login and registration powered by **NextAuth.js**
- **🔑 Google OAuth Login** — One-click sign-in with Google account
- **📝 Register Page** — Sign up with name, photo URL, email, and password, or via Google
- **👤 My Profile Page** — Personalized user dashboard (protected route)
- **🔒 Protected Routes** — Unauthenticated users are automatically redirected to login
- **📱 Fully Responsive Design** — Mobile-first layout that works across all screen sizes
- **⚡ Optimized Performance** — Next.js Image optimization, SSR/SSG, and fast page loads

---

## 🛠️ Technologies Used
 
### ⚙️ Core Framework & Language
 
| Technology | Description |
|---|---|
| ![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=next.js&logoColor=white) **Next.js 15** | React-based full-stack framework with App Router, SSR, SSG, and API routes |
| ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) **React 19** | Component-based UI library for building interactive interfaces |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **JavaScript (JSX)** | Primary programming language used throughout the project |
 
### 🎨 Styling
 
| Technology | Description |
|---|---|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS** | Utility-first CSS framework for fast, responsive, custom UI styling |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white) **DaisyUI** | Tailwind CSS component library that provides ready-made UI components for faster and consistent design |
 
### 🔐 Authentication
 
| Technology | Description |
|---|---|
| ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=flat-square&logo=next.js&logoColor=white) **NextAuth.js v4** | Complete authentication solution for Next.js — handles sessions, JWT, and OAuth |
| ![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=flat-square&logo=google&logoColor=white) **Google OAuth 2.0** | Secure third-party sign-in via Google account |
| **Credentials Provider** | Custom email & password login with session management |
 
### 🗂️ Routing & Data
 
| Technology | Description |
|---|---|
| **Next.js App Router** | File-based routing system with layouts, dynamic segments `[id]`, and nested routes |
| **Next.js Image** | Built-in image optimization with lazy loading and responsive sizing |
| **Server Components** | React Server Components for fast initial page loads |
 
### 🧰 Developer Tools
 
| Technology | Description |
|---|---|
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) **ESLint** | Static code analysis to catch errors and enforce code quality |
| **eslint-config-next** | Next.js-specific ESLint rules and best practices |
 
### ☁️ Deployment & Hosting
 
| Technology | Description |
|---|---|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) **Vercel** | Cloud platform for deployment with CI/CD, preview URLs, and edge network |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) **GitHub** | Source code version control and repository hosting |
 
---

## 📦 NPM Packages Used

| Package | Version | Purpose |
|---|---|---|
| [`next`](https://www.npmjs.com/package/next) | ^15.x | Core React framework — App Router, SSR, SSG, routing |
| [`react`](https://www.npmjs.com/package/react) | ^19.x | UI component library |
| [`react-dom`](https://www.npmjs.com/package/react-dom) | ^19.x | React DOM rendering |
| [`next-auth`](https://www.npmjs.com/package/next-auth) | ^4.x | Authentication — Email/Password & Google OAuth |
| [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) | ^3.x | Utility-first CSS framework for styling |
| [`postcss`](https://www.npmjs.com/package/postcss) | ^8.x | CSS processing (required by Tailwind) |
| [`autoprefixer`](https://www.npmjs.com/package/autoprefixer) | ^10.x | Adds vendor prefixes to CSS automatically |
| [`eslint`](https://www.npmjs.com/package/eslint) | ^9.x | JavaScript linting |
| [`eslint-config-next`](https://www.npmjs.com/package/eslint-config-next) | ^15.x | ESLint rules specific to Next.js |

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/rashedulislam595/Assignment-8-Orange-SkillSphere-Online-Learning-Platform.git
cd Assignment-8-Orange-SkillSphere-Online-Learning-Platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👤 Author

**Rashedul Islam**  
GitHub: [@rashedulislam595](https://github.com/rashedulislam595)
