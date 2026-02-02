# ITM Company Website - "The Power of Us"

A modern, professional, and interactive company website built with React, Vite, and Tailwind CSS. Features smooth animations, mobile responsiveness, and a clean, inclusive design.

## Features

- **6 Core Pages**: Home, About Us, Services, Careers, Clients, Contact
- **Modern Design**: Clean, professional UI with elegant typography
- **Interactive Animations**: Smooth page transitions and scroll animations using Framer Motion
- **Mobile Responsive**: Optimized for all screen sizes
- **Static Data**: Pre-populated with comprehensive content (CMS-ready)
- **Theme**: "The Power of Us" - Appreciative, inclusive, and modern
- **Color Scheme**: Primary Blue (#3366ff) with white accents

## Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router v6** - Client-side routing
- **React Hook Form** - Form validation
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
itm_web/
├── public/
│   └── images/           # Place your images here
├── src/
│   ├── components/       # Reusable components
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── home/        # Home page sections
│   │   ├── about/       # About page sections
│   │   ├── services/    # Service cards
│   │   ├── careers/     # Job cards
│   │   ├── clients/     # Client components
│   │   ├── contact/     # Contact form
│   │   └── common/      # Shared components
│   ├── pages/           # Page components
│   ├── data/            # Static data files
│   └── App.jsx          # Main app component
└── package.json
```

## Adding Graphics and Illustrations

### Where to Get Free Illustrations

The website uses placeholder graphics. Replace them with professional illustrations from these resources:

#### 1. **unDraw** (undraw.co)
- Customizable SVG illustrations
- Can change colors to match your brand (#3366ff)
- Best for: Hero sections, about page, mission/vision

#### 2. **Storyset** (storyset.com)
- Animated and static illustrations
- Freepik's illustration library
- Best for: Service pages, teamwork themes

#### 3. **DrawKit** (drawkit.com)
- Hand-drawn vector illustrations
- Multiple styles available
- Best for: Values section, careers page

#### 4. **Icons8 Illustrations** (icons8.com/illustrations)
- Diverse illustration styles
- Good selection of tech-themed graphics
- Best for: Technology and IT concepts

### Graphics Needed

1. **Hero Section** (`public/images/hero/`)
   - Teamwork/collaboration illustration
   - Recommended: Team working together, diverse group

2. **About Page** (`public/images/illustrations/`)
   - Company journey/growth illustration
   - Mission & vision illustration

3. **Services** (Can use icons from Lucide React)
   - Already implemented with icon library
   - Optionally add service illustrations

4. **Values Section**
   - Inclusive team illustrations
   - Diverse representation

5. **Contact Page**
   - Communication/support illustration

6. **Client Logos** (`public/images/clients/`)
   - Use client-provided logos
   - Placeholder logos are currently displayed

### How to Add Images

1. Place images in the appropriate folder under `public/images/`
2. Update the component to reference the image:

```jsx
// Example: Update Hero section
<img src="/images/hero/teamwork.svg" alt="Teamwork" />
```

## Customization

### Colors

Update the primary color in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#3366ff', // Your primary color
    // ... other shades
  }
}
```

### Content

All content is stored in static data files under `src/data/`:

- `company.js` - Company info, mission, vision, values, timeline
- `services.js` - Service offerings and descriptions
- `careers.js` - Job listings and benefits
- `clients.js` - Client information and testimonials
- `contact.js` - Contact information and locations

### Typography

Change fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## Page Descriptions

### 1. Home Page
- **Hero Section**: Animated headline, CTA buttons, statistics
- **Introduction**: Company overview with animated stats
- **Featured Highlights**: Service cards with hover effects

### 2. About Us
- **Company History**: Interactive timeline with milestones
- **Mission & Vision**: Split layout with animations
- **Values**: 6 core values with icons and descriptions

### 3. Services
- **Service Cards**: 9 IT services with expandable details
- **Category Filters**: Filter services by category
- **Technologies**: Tech stack for each service

### 4. Careers
- **Why Join Us**: 6 benefits of working at ITM
- **Open Positions**: 8 job listings with filters
- **Application Process**: 5-step hiring process

### 5. Clients
- **Industries**: 6 industry sectors with client logos
- **Testimonials**: Client reviews and success stories
- **Stats**: Client satisfaction metrics

### 6. Contact
- **Contact Form**: Validated form with success state
- **Contact Info**: HQ and office locations
- **Departments**: Direct contact for different teams
- **Map**: Placeholder for Google Maps integration

## Mobile Responsiveness

The website is fully responsive with breakpoints:

- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)

Test responsiveness in Chrome DevTools:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes

## Animations

All animations are implemented using Framer Motion:

- **Page Transitions**: Smooth fade on route changes
- **Scroll Animations**: Elements fade in on scroll
- **Hover Effects**: Cards lift and scale on hover
- **Micro-interactions**: Button ripples, icon bounces

## CMS Integration (Future)

The website is structured for easy CMS integration:

1. Replace data imports with API calls
2. Update component props to receive dynamic data
3. Connect contact form to backend endpoint
4. Swap image paths with CMS URLs

### Recommended CMS Options:
- **Strapi** - Open-source headless CMS
- **Contentful** - Cloud-based CMS
- **Sanity** - Real-time content platform

## Performance Optimization

- Images are lazy-loaded
- Code splitting via React Router
- Optimized bundle size with Vite
- Fast dev server with HMR

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for images (add when replacing placeholders)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Deploy to Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Other Options
- AWS Amplify
- GitHub Pages
- Cloudflare Pages

## Support

For questions or issues:
- Check the code comments in components
- Review the data files for content structure
- Refer to the documentation for libraries used

## License

This project is proprietary and confidential.

---

**Built with 💙 using "The Power of Us" philosophy**
