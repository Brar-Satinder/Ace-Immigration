# Ace Immigration - Australian Visa Consultation Platform

A modern, responsive website for Australian immigration consultation services built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Home Page**: Hero section, features, and visa categories
- 📊 **Visa Calculator**: Interactive tool to assess visa eligibility
- 📧 **Contact Page**: Contact form and business information
- 📱 **Responsive Design**: Fully mobile-optimized
- 🌙 **Dark Theme**: Modern dark UI with accent colors
- ⚡ **Performance**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Netlify

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
ace-immigration/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── visa-calculator/
│   │   └── page.tsx             # Visa calculator page
│   └── contact/
│       └── page.tsx             # Contact page
├── components/
│   ├── Navigation.tsx           # Navigation component
│   └── Footer.tsx               # Footer component
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## Customization

### Colors
Edit the color variables in `tailwind.config.js` and `app/globals.css`:
- `dark-bg`: Main background color
- `dark-secondary`: Secondary background
- `accent-blue`: Primary accent color

### Content
- Update company information in `components/Footer.tsx`
- Modify visa types in `app/page.tsx`
- Customize form fields in `app/contact/page.tsx`

## Deployment on Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

## License

MIT License - feel free to use this project for your business.

## Support

For issues or questions, please contact info@aceimmigration.com
