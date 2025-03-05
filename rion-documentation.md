# Rion Wildlife Safaris - Documentation

## Project Overview
Rion Wildlife Safaris is a React-based website for a safari tour company operating in Southern Africa. The site showcases safari experiences, destinations, and testimonials to attract potential customers looking for wildlife adventures in Namibia, Botswana, and surrounding regions.

## Tech Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **UI Components**: Custom components with some shadcn/ui integration

## Component Structure

### Page Components
- `Index.tsx` - Main landing page that assembles all section components

### Header Components
- `HeroSection.tsx` - Main hero section with background image, language toggle, and navigation
- `MobileInputDesign.tsx` - Mobile-specific input component

### Home Section Components
- `AboutSection.tsx` - Company introduction and brief overview
- `ActivitiesSection.tsx` - Showcases different safari activities
- `FeaturedTour.tsx` - Highlights a popular safari tour
- `UpcomingToursSection.tsx` - Displays upcoming safari tours
- `BlogSection.tsx` - Recent blog posts and articles
- `TestimonialSection.tsx` - Customer reviews and testimonials
- `CTASection.tsx` - Call-to-action section for booking
- `SafariMapSection.tsx` - Interactive map showing safari routes
- `Footer.tsx` - Site footer with links and contact information

## Design System

### Colors
- **Primary Brand Color**: `rgba(192,91,42,1)` - Orange/rust color used for accents and calls-to-action
- **Dark Blue**: `#1C2B38` to `#2A3F50` - Used for content backgrounds and text
- **Green**: `#295943` - Used for footer background
- **White**: Used for text on dark backgrounds and container backgrounds
- **Accent Colors**: Various accent colors for badges and highlights

### Typography
- **Heading Font**: 'Aboreto' for decorative headings
- **Body Font**: System fonts and Poppins for body text

### Spacing System
- Uses Tailwind's built-in spacing system
- Custom container classes for responsive padding

### UI Components
- **Cards**: Used throughout for tour items, testimonials, and features
- **Badges**: Small colored tags for highlighting "Trending" items
- **Buttons**: Primary (orange) and secondary (outline) styles
- **Icons**: SVG icons for various UI elements

## Key Features

### Safari Tours Display
- Featured tour highlight
- Upcoming tours listing
- Tour detail pages

### Interactive Elements
- Language toggle (German/English)
- Mobile navigation menu
- Interactive safari map

### Customer Reviews
- Testimonial showcase with Google and Trustpilot integration
- Rating display

## Responsive Behavior
The site is fully responsive with specific design considerations for:
- Mobile views (< 768px)
- Tablet views (768px - 1024px)
- Desktop views (> 1024px)

Key responsive features:
- Column stacking on mobile
- Adjusted padding and margins
- Image scaling and positioning
- Font size adjustments

## Development Guidelines

### Adding New Components
1. Create new component files in appropriate directories
2. Use TypeScript interfaces for props
3. Follow existing styling patterns
4. Import and add to page structure as needed

### Styling Guidelines
1. Use Tailwind classes for styling
2. Follow mobile-first approach
3. Maintain consistent spacing and color usage
4. Use semantic HTML elements

### Code Conventions
1. Use functional components with React hooks
2. Type all props and state with TypeScript
3. Use consistent naming conventions
4. Add comments for complex logic

## Assets and Resources
- Images are stored in the public directory
- Some images are served from external CDNs
- Icons are primarily SVG inline elements

## Browser Compatibility
The site is designed to work on:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Responsive across device sizes

## Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

---

*This documentation is a living document and will be updated as the project evolves.* 