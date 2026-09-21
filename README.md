# 🇩🇿 EdTech Algeria — Modern E-Learning Platform

A high-performance, modern, and Algerian-localized E-Learning web application built with **Next.js 16 (App Router & Turbopack)**, **React 19**, and **Tailwind CSS v4**.

Designed to empower Algerian students and ambitious professionals with in-demand practical skills taught by top Algerian industry leaders and mentors.

---

## 🚀 Key Highlights & Features

### 1. 🎓 Dynamic Course Information System (`/courses/[id]`)
- **Full Syllabus & Modules**: Expandable/collapsible chapter accordion with preview labels and durations.
- **Learning Outcomes & Requirements**: Interactive checklist detailing acquired skills and prerequisite tools.
- **Algerian Pricing in DA**: All prices formatted in Algerian Dinars (**DA**) with original crossed-out prices and discount tags.
- **Algerian Instructor Profiles**: Bios, student counts, and credentials for Algerian mentors.
- **Sticky Enrollment Card**: 30-day money-back guarantee, certificate guarantee, and simulated one-click enrollment state.
- **Related Courses Carousel**: Contextual recommendations linking directly to other course pages.

### 2. 📚 Courses Catalog & Discovery (`/courses`)
- **Real-Time Live Search**: Instant search by course title, topic, or instructor name.
- **Category & Level Filters**: Filter by Design, Business, Finance, Creative, or Productivity, plus level selectors (*Beginner*, *Intermediate*, *Beginner to Pro*).
- **Responsive Course Grid**: Course cards with lessons count, duration, rating, reviews, and direct links to `/courses/[id]`.

### 3. 🇩🇿 Algerian Student Profile & Navbar Popover
- **Interactive Header Profile Popover**:
  - Displays avatar **YB** with Algerian flag badge 🇩🇿.
  - **Student**: Yacine Belkacem (ياسين بلقاسم) — *USTHB Alger, Bab Ezzouar*.
  - **Contact**: `yacine.belkacem@edtech.dz` • `+213 555 24 68 10`.
  - **Active Progress**: Graphic Design Masterclass (72% complete with visual progress bar).
  - Quick access to profile, courses, and logout.
- **Full Student Dashboard ([`/profile`](/profile))**:
  - **Mes Cours**: 3 enrolled courses with progress bars and lesson trackers.
  - **Certificats**: Verified Algerian certificate (`DZ-CERT-2025-9912`) for Canva Design with instructor Lina Haddad (*Mention Très Bien*) and download simulation.
  - **Paramètres**: Profile editing form for personal and university info.

### 4. 👨‍🏫 Algerian Mentors & About Page (`/about`)
- Platform milestones (320+ courses, 20,000+ students, 98.4% satisfaction).
- Profiles of Algerian instructors:
  - **Yasmine Mansouri** (Lead Brand Designer, Algiers & Paris)
  - **Karim Benali** (Freelance & Business Strategist, Constantine)
  - **Sofiane Meziane** (Quantitative Trader & Market Analyst)
  - **Amel Khelifi** (Senior Data Analyst, Algiers)
- Core educational values and narrative showcase.

### 5. ✉️ Interactive Contact Page (`/contact`)
- Form validation with Algerian placeholder references (*Amine Benali*).
- Live submission feedback state with simulated server response.
- Expandable FAQ accordion addressing certificates, access, and refunds.

### 6. 🔐 Authentication Experience (`/login` & `/signup`)
- Dual-mode card supporting **Log In** and **Sign Up**.
- Social sign-in buttons (Google & GitHub).
- Interactive password visibility toggle and form state validation.
- **"Thank You!" Feedback Screen**: Animated celebratory confirmation screen upon completion.

### 7. ✨ Smooth Motion & Animations
- Custom [`ScrollReveal`](src/app/components/ScrollReveal.js) component utilizing the Intersection Observer API for fluid staggered reveals across pages.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.5` | App Router, Dynamic Routes, Server & Client Components, Turbopack |
| **React** | `19.2.8` | UI Library & React 19 hooks (`use`, `useRef`, `useState`) |
| **Tailwind CSS** | `^4.0.0` | Utility-first CSS framework with modern tokens |
| **ESLint** | `^9.0.0` | Code quality and linting |

---

## 📁 Project Structure

```text
e-learning/
├── public/
│   ├── images/
│   │   ├── courses/       # Course thumbnails (graphic-design, canva, freelance, etc.)
│   │   └── instructors/   # Mentor avatars
│   └── videos/            # Platform overview media
├── src/
│   └── app/
│       ├── about/         # About page (/about)
│       ├── contact/       # Contact Us page (/contact)
│       ├── courses/       # Courses catalog (/courses)
│       │   └── [id]/      # Dynamic course details page (/courses/[id])
│       ├── data/
│       │   └── coursesData.js  # Centralized catalog with 6 full courses in DA
│       ├── login/         # Login route (/login)
│       ├── profile/       # Algerian student profile dashboard (/profile)
│       ├── signup/        # Sign-up route (/signup)
│       ├── components/    # Reusable UI components
│       │   ├── About.js           # Homepage about preview
│       │   ├── AuthCard.js        # Dual-mode authentication card
│       │   ├── Category.js        # Infinite marquee category pills
│       │   ├── Courses.js         # Homepage featured courses grid
│       │   ├── Footer.js          # Global footer with links
│       │   ├── HeroSection.js     # Homepage hero section
│       │   ├── LearningAction.js  # Interactive video player component
│       │   ├── NavBar.js          # Header with Algerian profile popover
│       │   └── ScrollReveal.js    # Intersection observer reveal wrapper
│       ├── globals.css    # Tailwind CSS imports & global styles
│       ├── layout.js      # Root layout wrapping Navbar & Footer
│       └── page.js        # Homepage (/)
├── package.json
├── next.config.mjs
└── README.md
```

---

## 🚦 Available Routes

| Route | Description |
| :--- | :--- |
| `/` | Homepage with Hero, Marquee Categories, Featured Courses, Video showcase, and About preview. |
| `/courses` | Courses catalog with multi-filter search, category pills, level filters, and benefit cards. |
| `/courses/[id]` | Dynamic course page with syllabus accordion, instructor bio, and DA purchase card. |
| `/about` | About page with platform milestones, story, core values, and Algerian mentors grid. |
| `/contact` | Contact page with office info, interactive contact form, and FAQ accordion. |
| `/login` | Dedicated login page with "Thank You" completion experience. |
| `/signup` | Dedicated sign-up page with "Thank You" completion experience. |
| `/profile` | Algerian student dashboard (Yacine Belkacem - USTHB Alger) with courses, certificates, and settings. |

---

## 💰 Course Catalog & Algerian Pricing (DA)

| Course ID | Course Name | Instructor | Price |
| :--- | :--- | :--- | :--- |
| `graphic-design` | **Graphic Design Masterclass** | Yasmine Mansouri | **4 900 DA** |
| `canva` | **Canva Design & Social Branding** | Lina Haddad | **2 900 DA** |
| `freelance` | **Freelance Mastery & Client Acquisition** | Karim Benali | **4 500 DA** |
| `trading` | **Financial Markets & Trading Blueprint** | Sofiane Meziane | **5 900 DA** |
| `video-editing` | **Professional Video Editing Suite** | Anis Dahmani | **5 400 DA** |
| `excel` | **Excel Data Analytics & Dashboarding** | Amel Khelifi | **3 500 DA** |

---

## ⚡ Getting Started

### Prerequisites
Make sure you have **Node.js 18.17+** or higher installed on your machine.

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd "e-learning"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Production Build

To verify and create an optimized production build:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

---

## 🎨 Color Palette & Design System

- **Primary Purple**: `#5F50BD` / `#4E40A8`
- **Accent Coral**: `#FF6673` / `#F45161`
- **Amber Accent**: `#FFB23F`
- **Neutral Dark**: `#181B2E` / `#181B29`
- **Soft Canvas**: `#FAF8FF`
- **Algerian Badge**: `#B92C40` & Emerald `#227B44`

---

## 📄 License
Private project developed for educational and skill-building purposes in Algeria.
