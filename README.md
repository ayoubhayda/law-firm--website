# Adex Website

A modern, responsive law firm website built with Next.js 15, featuring a professional design with dark mode support, consultation booking system, and multi-language capabilities.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Dark Mode**: Built-in theme switching with next-themes
- **Responsive Design**: Fully responsive across all devices
- **Consultation Booking**: Interactive modal system for booking legal consultations
- **Service Pages**: Dedicated pages for different legal services
- **Blog System**: Dynamic blog with individual article pages
- **Contact Forms**: React Hook Form integration with Zod validation
- **WhatsApp Integration**: Direct client communication via WhatsApp
- **Analytics**: Vercel Analytics integration for tracking
- **SEO Optimized**: Built with Next.js best practices for search engine optimization

## 🚀 Tech Stack

### Core
- **Framework**: [Next.js 15.2.4](https://nextjs.org/) - React framework with App Router
- **React**: Version 19 - UI library
- **TypeScript**: Type-safe development
- **Styling**: Tailwind CSS 4.1.9 with custom configurations

### UI Components
- **Radix UI**: Comprehensive component library including:
  - Accordion, Alert Dialog, Avatar
  - Dialogs, Dropdowns, Navigation
  - Popovers, Tooltips, Tabs
  - And more...
- **shadcn/ui**: Custom component architecture
- **Lucide React**: Beautiful icon set

### Forms & Validation
- **React Hook Form**: Efficient form management
- **Zod**: Schema validation
- **@hookform/resolvers**: Form resolver integration

### Animations & Interactions
- **Framer Motion**: Smooth animations and transitions
- **Embla Carousel**: Testimonial carousel
- **CMDK**: Command menu UI
- **Sonner**: Toast notifications

### Additional Features
- **date-fns**: Date manipulation
- **recharts**: Data visualization
- **next-themes**: Theme management
- **Vercel Analytics**: Performance tracking

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher
- **pnpm**: Package manager (or npm/yarn)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd adlex-law-website
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
adlex-law-website/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── blog/                # Blog section
│   │   └── [slug]/         # Dynamic blog posts
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   ├── services/           # Legal services
│   │   └── [slug]/        # Dynamic service pages
│   ├── terms/              # Terms of service
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── hero-section.tsx   # Hero component
│   ├── navbar.tsx         # Navigation
│   ├── footer.tsx         # Footer
│   ├── booking-modal.tsx  # Booking system
│   └── ...                # Other components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Additional styles
└── assets/                 # Project assets
```

## 🎨 Key Components

### Navigation
- **Navbar**: Responsive navigation with language switcher
- **Footer**: Comprehensive footer with links and information

### Interactive Elements
- **Booking Modal**: Consultation booking system
- **Service Consultation Modal**: Service-specific inquiries
- **WhatsApp Button**: Direct messaging integration
- **Testimonial Carousel**: Client reviews showcase

### Pages
- **Home**: Hero section, services preview, testimonials, CTA
- **About**: Law firm information and team details
- **Services**: Legal service offerings with dynamic routing
- **Blog**: Articles and legal insights
- **Contact**: Contact form and information

## 🔧 Configuration

### Tailwind CSS
Custom Tailwind configuration with:
- Custom color schemes
- Animation utilities
- Responsive breakpoints

### Next.js
Configuration includes:
- Image optimization
- ESLint settings
- TypeScript settings

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

For other platforms, run `pnpm build` and deploy the `.next` folder.

## 🎯 Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📧 Contact

For inquiries about this project, please visit the [contact page](http://localhost:3000/contact).

---

**Built with ❤️ using Next.js and Tailwind CSS**
