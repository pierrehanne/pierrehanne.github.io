# Portfolio

[![Deploy to GitHub Pages](https://github.com/pierrehanne/pierrehanne.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/pierrehanne/pierrehanne.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Professional portfolio showcasing expertise in GenAI, Data Engineering, and Cloud Architecture

## 🚀 Live Demo

Visit the live portfolio: **[pierrehanne.github.io](https://pierrehanne.github.io)**

## 👨‍💻 About

This portfolio showcases my professional journey as a **GenAI Domain Lead** and **Data Engineer** with expertise in:

- 🤖 **Generative AI & Machine Learning** - Enterprise-scale AI systems and conversational interfaces
- ☁️ **AWS Cloud Architecture** - Certified Solutions Architect, Data Engineer, and ML Engineer
- 🔧 **Data Engineering** - Real-time streaming and batch processing with Spark, Flink, and Airflow
- 👥 **Technical Leadership** - Leading teams and driving AI transformation initiatives

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Consistent icon library

### Build & Development
- **Vite** - Fast build tool with HMR and optimized production builds
- **ESLint** - Code linting with TypeScript support
- **PostCSS** - CSS processing with Tailwind integration

### Deployment
- **GitHub Pages** - Automated deployment via GitHub Actions
- **GitHub Actions** - CI/CD pipeline for testing and deployment

## 🏗️ Architecture

```
src/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── Header.tsx      # Navigation with theme toggle
│   │   ├── HeroSection.tsx # Landing section with intro
│   │   ├── ExperienceTimeline.tsx # Professional experience
│   │   ├── InterestsSection.tsx   # Education & certifications
│   │   └── ContactSection.tsx     # Contact information
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── ThemeProvider.tsx   # Dark/light theme management
│   └── LazySection.tsx     # Performance optimization
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── pages/                  # Page components
└── assets/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pierrehanne/pierrehanne.github.io.git
   cd pierrehanne.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Features

### 🌟 Modern Design
- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme** - Automatic theme switching with user preference
- **Smooth Animations** - Intersection Observer-based scroll animations
- **Professional Color Scheme** - Warm, approachable yet professional palette

### ⚡ Performance
- **Lazy Loading** - Components load as they enter viewport
- **Code Splitting** - Optimized bundle sizes with Vite
- **Image Optimization** - Efficient asset loading
- **SEO Optimized** - Structured data and meta tags

### 🔧 Technical Highlights
- **TypeScript Strict Mode** - Type safety throughout the application
- **Component Architecture** - Modular, reusable components
- **Custom Hooks** - Intersection observer and mobile detection
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🚀 Deployment

The portfolio is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers the deployment workflow
2. **Build process** runs with production optimizations
3. **Deploy to GitHub Pages** serves the static site

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to GitHub Pages (if configured)
npm run deploy
```

## Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the consistent icon set
- **Vite** for the fast build tool