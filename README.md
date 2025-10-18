# Course Details Page - Next.js Application

A comprehensive, production-ready course details page built with Next.js 15, featuring advanced UI components, interactive elements, and full Arabic language support.

## 🎯 Project Overview

This project implements a fully-featured course details page with a focus on user experience, responsive design, and modern web technologies. Built as a demonstration of Next.js expertise and attention to design details.

## ✨ Key Features

### 🎥 Video Player

- **Smart Sticky Behavior**: Video becomes sticky on mobile when scrolling (similar to YouTube mobile experience)
- **Desktop/Mobile Optimization**: Sticky behavior only on mobile screens (< 768px)
- **Custom Controls**: Play/pause, volume control, seekbar, time display, fullscreen
- **Professional Poster Image**: High-quality course thumbnail
- **Multiple Format Support**: MP4 and MOV format compatibility

### 🧭 Navigation System

- **Four Navigation Actions**:
  - **Topics**: Smooth scroll to course modules section
  - **Comments**: Smooth scroll to comments section
  - **Ask Question**: Opens modal with textarea for questions
  - **Leaderboard**: Displays leaderboard popup with Arabic encouragement message
- **Solid Icons**: Using Lucide React icons for crisp display
- **Smooth Scrolling**: Implemented with CSS `scroll-behavior`

### 📚 Course Materials

- **Two Information Cards**: Duration, Lessons, Enrolled students, Language
- **DRY Principle Applied**: Reusable component logic
- **Custom Shadow**: Subtle `0 0 20px #00000010` shadow for depth
- **Responsive Layout**: Adapts to all screen sizes

### 📊 Course Progress Bar

- **Animated Progress**: Smooth animation to current progress (63%)
- **"You" Indicator**: Shows user's current position
- **Visual Feedback**: Gradient progress bar with clear percentage display

### 📖 Course Modules

- **Reusable Component**: Accepts props for different week modules
- **Expandable/Collapsible**: Click to show/hide lesson details
- **Status Indicators**: Duration badges, question count, lock icons
- **Text Wrapping Support**: Long lesson titles wrap naturally
- **Interactive Elements**:
  - **Course Overview**: Opens full-screen PDF viewer
  - **Quiz Lessons**: Opens interactive quiz popup
  - **Locked Lessons**: Visual lock icon with custom SVG

### 🧪 Quiz System

- **Full-Featured Quiz Interface**:
  - Countdown timer with visual indicator
  - Question navigation (Previous/Next buttons)
  - Answer selection with visual feedback
  - Progress circles showing current question
  - Score calculation and results screen
- **Headless UI Modals**: Accessible, animated popups
- **Scrollable Content**: Handles overflow gracefully
- **Mock Data**: 5 sample questions with correct answers

### 💬 Comments Section

- **User Comments Display**: Name, avatar, date, content
- **Avatar Images**: Next.js Image component with fallback
- **Add Comment Form**: Textarea with submit button
- **Custom Primary Color**: #41b69d for buttons and focus states
- **Responsive Layout**: Adapts to mobile and desktop

### 🌐 Arabic Language Support

- **Cairo Font**: Google Font for Arabic text (GE SS Two alternative)
- **RTL Direction**: Proper right-to-left text direction
- **Leaderboard Messages**: Arabic encouragement messages
- **Custom CSS Variables**: Font family management

### 📱 Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices
- **Correct Section Order on Mobile**:
  1. Video
  2. Navigation
  3. Course Materials
  4. Course Progress Bar
  5. Course Modules
  6. Comments
- **Desktop Layout**: Two-column layout with sidebar for progress and modules
- **Breakpoint Management**: Uses Tailwind's `lg` breakpoint (1024px)

## 🛠 Technical Stack

- **Framework**: Next.js 15.5.5 with App Router
- **React**: Version 19.1.0
- **TypeScript**: Type-safe development
- **Styling**: Tailwind CSS v4 with Turbopack
- **Icons**: Lucide React
- **Modals**: Headless UI v2 (accessible components)
- **Fonts**:
  - League Spartan (primary font)
  - Cairo (Arabic text)
- **Animations**: Framer Motion
- **Build Tool**: Turbopack for faster builds

## 📦 Installation & Setup

1. **Clone the repository**:

```bash
git clone <repository-url>
cd course-details-page
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run development server**:

```bash
npm run dev
```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
course-details-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Main course details page
│   │   └── globals.css         # Global styles & theme
│   ├── components/
│   │   ├── VideoPlayer.tsx     # Video player with sticky behavior
│   │   ├── Navigation.tsx      # Navigation with modals
│   │   ├── CourseMaterials.tsx # Course info cards
│   │   ├── CourseProgressBar.tsx # Progress indicator
│   │   ├── CourseModules.tsx   # Reusable module component
│   │   ├── Quiz.tsx            # Quiz popup system
│   │   └── CommentsSection.tsx # Comments and add comment
│   └── data/
│       └── mockData.ts         # Mock data & interfaces
├── public/
│   ├── course-poster.jpg       # Video poster image
│   ├── video.mp4               # Course video file
│   ├── Placeholder-PDF.pdf     # Sample PDF for viewer
│   └── user[1-3].webp          # User avatar images
└── package.json
```

## 🎨 Design Features

### Color Scheme

- **Primary Color**: `#41b69d` (Teal green)
- **Background**: White (`#ffffff`)
- **Text**: Black (`#000000`)
- **Accents**: Light gray (`#F5F9FA`) for sections

### Custom Styling

- **Custom Primary Classes**: `.bg-primary`, `.hover:bg-primary-dark`, `.focus:ring-primary`
- **Theme Configuration**: Using `@theme inline` in `globals.css` for Tailwind v4
- **Smooth Scrolling**: Applied globally
- **Custom Scrollbar**: Styled for better UX

## 📋 Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## ✅ Features Checklist

- ✅ Sticky video player (mobile only)
- ✅ Custom video controls
- ✅ Navigation with scroll and popups
- ✅ Course materials cards
- ✅ Animated progress bar
- ✅ Expandable course modules
- ✅ PDF viewer (full-screen)
- ✅ Quiz system with timer
- ✅ Leaderboard popup
- ✅ Ask question modal
- ✅ Comments section with Arabic support
- ✅ Responsive design (mobile & desktop)
- ✅ Correct mobile section order
- ✅ Custom primary color theme
- ✅ League Spartan font (global)
- ✅ Cairo font (Arabic text)
- ✅ TypeScript type safety
- ✅ No linter errors
- ✅ Production build successful

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

Alternatively, build and deploy manually:

```bash
npm run build
npm start
```

## 📝 Notes

- **Mock Data**: All course data, comments, and quiz questions are mock data in `src/data/mockData.ts`
- **Placeholder Video**: The video file is a placeholder; replace with actual course content
- **PDF Placeholder**: Sample PDF included; replace with actual course documents
- **Modals**: Using Headless UI for accessibility and proper focus management
- **Performance**: Optimized images using Next.js Image component
- **Type Safety**: Full TypeScript coverage with proper interfaces

## 👨‍💻 Development Highlights

- **Clean Code**: DRY principle applied throughout
- **Component Reusability**: CourseModules accepts props for different sections
- **Accessibility**: Headless UI for keyboard navigation and screen readers
- **Performance**: Lazy loading, optimized images, minimal rerenders
- **Mobile UX**: Sticky video only on mobile for better experience
- **Responsive**: Mobile-first approach with desktop enhancements

## 📧 Contact

For questions or feedback about this project, please reach out via email.

---

**Built with ❤️ using Next.js 15 and modern web technologies**
