# Rion Wildlife Safaris

A premium safari experience website showcasing Professor Rion Haraeb's unique wildlife tours in Southern Africa.

## Project Overview

Rion Wildlife Safaris is a React-based website for a safari tour company operating in Southern Africa. The site showcases safari experiences, destinations, and testimonials to attract potential customers looking for wildlife adventures in Namibia, Botswana, and surrounding regions.

### Key Features

- Bilingual support (English/German)
- Responsive design for all devices
- Featured tour showcase
- Activity and tour listings
- Interactive safari map
- Customer testimonials

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **UI Components**: Custom components with shadcn/ui integration

## Getting Started

### Prerequisites

- Node.js 16+
- pnpm (preferred) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd rionwildlife

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application will be available at http://localhost:5173.

### Build for Production

```bash
pnpm build
```

## Project Structure

```
rionwildlife/
├── public/              # Static assets
│   ├── activities/      # Activity images
│   ├── icons/           # UI icons
│   ├── images/          # General images
│   └── tour-images/     # Tour specific images
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── home/        # Home page components
│   │   └── ui/          # Reusable UI components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   └── translations/    # Multilingual content
├── package.json         # Dependencies and scripts
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Design Details

- **Primary Brand Color**: `rgba(192,91,42,1)` (Orange/rust)
- **Typography**: 'Aboreto' for decorative headings, system fonts for body text
- **Responsive Behavior**: Mobile, tablet, and desktop optimized layouts

## Safari Tours

The website features five distinct safari tours:

1. **Namibia Highlights Safari** - 14 days, €3,600
2. **Big Five Safari (Nambovic)** - 19 days, €4,800
3. **Namwild** - 9 days, €1,900
4. **Namibia, Botswana, Victoria Falls** - 18 days, €4,500
5. **Walvisbay Excursions** - Day tours, €80

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Professor Rion Haraeb - [Website Contact Form]

---

*Designed and developed for Rion Wildlife Safaris*
