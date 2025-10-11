# Istanbul Sofra - Turkish Restaurant Website

A beautiful, responsive single-page React website for Istanbul Sofra, an authentic Turkish restaurant. Built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, elegant design with Turkish-inspired color scheme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Menu**: Categorized menu with traditional Turkish dishes
- **Reservation System**: Contact form for table reservations
- **Smooth Navigation**: Sticky header with smooth scrolling navigation
- **Beautiful Typography**: Uses Google Fonts (Inter & Playfair Display)
- **Full-Screen Carousel**: Hero section with rotating food images

## Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Modern CSS** - Custom animations and responsive design

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 14 or higher).

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
istanbul-sofra/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation and header
│   │   ├── Hero.jsx        # Hero carousel with food images
│   │   ├── About.jsx       # About section with restaurant story
│   │   ├── Menu.jsx        # Interactive menu with categories
│   │   ├── Contact.jsx     # Contact info and reservation form
│   │   └── Footer.jsx      # Footer with links and info
│   ├── pages/
│   │   └── HomePage.jsx    # Single page layout with all sections
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles and Tailwind imports
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## Components Overview

### Hero
- Full-screen carousel with Turkish food images
- Auto-rotating slideshow with 5 signature dishes
- Restaurant branding and call-to-action buttons
- Responsive design with mobile optimization

### Header
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Dynamic styling based on scroll position
- Single-page anchor navigation

### About
- Restaurant story and history
- Feature highlights with icons
- Responsive grid layout

### Menu
- Interactive category tabs
- Comprehensive Turkish menu
- Popular item indicators
- Turkish translations included

### Contact
- Restaurant contact information
- Interactive reservation form
- Map placeholder
- Operating hours

### Footer
- Social media links
- Newsletter signup
- Contact information
- Copyright and branding

## Customization

### Colors
The website uses a black/gray color palette defined in `tailwind.config.js`:
- Primary colors: Black/gray tones
- Accent colors: Red highlights
- Custom color utilities available throughout

### Typography
- Headers use 'Playfair Display' (serif)
- Body text uses 'Inter' (sans-serif)
- Both fonts are loaded from Google Fonts

### Content
All content can be easily modified in the respective component files:
- Menu items in `Menu.jsx`
- Restaurant information in `About.jsx`
- Contact details in `Contact.jsx` and `Footer.jsx`

## Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Future Enhancements

Potential features to add:
- Backend integration for reservations
- Online ordering system
- Image gallery
- Customer reviews
- Multi-language support
- Real map integration
- Social media feed integration

## Contributing

This is a showcase project, but feel free to fork and modify for your own restaurant website needs.

## License

This project is open source and available under the MIT License.
