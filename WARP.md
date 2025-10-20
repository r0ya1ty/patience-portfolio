# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Patience Dilday's portfolio website - a modern, interactive motion design portfolio built with Vite, vanilla JavaScript, and custom CSS. The site features a distinctive Killjoy-style animated background with glassmorphism design elements and a responsive bento grid layout.

## Development Commands

### Core Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)  
- `npm run preview` - Preview production build locally

### Package Management  
- `npm ci` - Clean install dependencies (used in CI/CD)
- `npm install` - Install dependencies

## Architecture & Structure

### Key Design Patterns
- **Glassmorphism UI**: Heavy use of `backdrop-filter: blur()` and semi-transparent backgrounds
- **Killjoy-style Animation**: Fixed background with 6 animated gradient circles using CSS animations
- **Bento Grid Layout**: CSS Grid-based responsive layout with specific grid positioning
- **Intersection Observer**: Used for scroll-triggered animations on bento items
- **Custom Cursor**: Interactive cursor effects on hover

### File Organization
```
src/
├── main.js          # Main JavaScript entry point with animations & interactions
├── style.css        # Complete styles including animations and responsive design  
├── counter.js       # Unused Vite template file
└── javascript.svg   # Vite template asset

public/vite.svg      # Favicon
index.html           # Single page with bento grid layout
```

### CSS Architecture
- **Hero Section**: Typewriter animation with blinking cursor effect
- **Bento Grid**: 12-column grid that collapses to responsive layouts
- **Animation System**: Keyframe animations for typewriter, floating elements, and killjoy background
- **Responsive Breakpoints**: 1200px (tablet) and 768px (mobile)

### JavaScript Features
- Intersection Observer for scroll animations with staggered delays
- Parallax scrolling effect on hero section
- Enhanced hover effects with transform and box-shadow
- Custom cursor implementation with blend modes
- Dynamic floating shapes generation

## Deployment

The site uses GitHub Pages with automated deployment:
- Builds trigger on pushes to `main` branch
- Uses Node.js 18 and npm ci for dependencies
- Deploys built `dist/` folder to gh-pages branch
- Base path configured for `/patience-portfolio/` in vite.config.js

## Styling Guidelines

### Animation Timing
- Typewriter effect: 2.5s duration starting at 0.5s
- Cursor blink: starts at 3s delay  
- Subtitle fade-in: 3.5s delay
- Scroll indicator: 4.5s delay with staggered balls

### Color Palette
- Primary text: `#1a1a1a`
- Secondary text: `#4a4a4a` and `#666`
- Glassmorphism backgrounds: `rgba(255, 255, 255, 0.95)`
- Killjoy gradients: Various vibrant color combinations (red, cyan, blue, pink, green)

### Interactive Elements
- Transform scale: `1.02` - `1.03` on hover
- Translate Y: `-12px` hover offset
- Box shadows: Layered shadows for depth
- Transition timing: `cubic-bezier(0.4, 0, 0.2, 1)`

## Code Modifications

When editing code in this project, avoid adding comments as per project rules. Focus on:
- Maintaining the glassmorphism aesthetic  
- Preserving animation timing and sequences
- Keeping responsive grid behavior intact
- Ensuring accessibility of interactive elements