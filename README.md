# Ace Immigration - Australian Visa Consultation Platform

🍂 **Golden Ace Immigration** - Your trusted partner for Australian visa success

## Features

✅ **Visa Types Guide** - Comprehensive information on all Australian visa types
✅ **Points Calculator** - Assess your eligibility for skilled migration visas
✅ **Documents Checklist** - Complete list of required documents
✅ **Consultation Booking** - Book free consultations with immigration experts
✅ **Responsive Design** - Works on all devices
✅ **Gold & Black Theme** - Premium and professional design

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **HTTP Client**: Axios

## Installation

```bash
# Clone the repository
git clone https://github.com/Brar-Satinder/ace-immigration.git
cd ace-immigration

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Go to https://vercel.com
2. Connect your GitHub account
3. Select this repository
4. Deploy automatically

### Netlify

1. Go to https://netlify.com
2. Connect your GitHub account
3. Select this repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

## Project Structure

```
ace-immigration/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── visas/
│   │   └── page.tsx        # Visa types page
│   ├── calculator/
│   │   └── page.tsx        # Points calculator
│   ├── documents/
│   │   └── page.tsx        # Required documents
│   └── consultation/
│       └── page.tsx        # Booking page
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   └── Footer.tsx          # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Pages

- **Home** (`/`) - Landing page with overview
- **Visa Types** (`/visas`) - All visa information
- **Calculator** (`/calculator`) - Points calculator
- **Documents** (`/documents`) - Document requirements
- **Consultation** (`/consultation`) - Book consultation

## Features Details

### Visa Calculator
- Age points calculation
- English proficiency scoring
- Work experience evaluation
- Qualification assessment
- Instant eligibility feedback

### Document Checker
- Personal documents
- Education credentials
- Employment history
- Financial documents
- Health & character requirements
- Visa-specific documents

### Consultation Booking
- Name, email, phone
- Visa type selection
- Preferred date & time
- Custom message
- Confirmation feedback

## Color Scheme

- **Primary Gold**: #D4AF37
- **Background**: #0a0a0a (Dark Black)
- **Secondary**: #1a1a1a
- **Tertiary**: #2a2a2a
- **Text**: #ffffff

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your immigration consulting business

## Contact

📧 info@aceimmigration.com
📞 +61 2 XXXX XXXX
🕐 Mon-Fri: 9AM-6PM AEST

---

**Built with ❤️ by Ace Immigration**
