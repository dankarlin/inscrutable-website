# Inscrutable Website

A modern, responsive website for Inscrutable - an organization dedicated to empowering the voiceless and underserved communities.

## Features

- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive design
- **Modern Framework**: React 18 with Vite for fast development and building
- **Content Sections**:
  - Hero section with mission statement
  - About section highlighting core values
  - Services overview (Community Empowerment, Social Justice, Making a Difference)
  - Testimonials from community members and supporters
  - Donation and support section
  - Contact information and footer

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/inscrutable-website.git
cd inscrutable-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. When you push to the main branch, the site will automatically build and deploy.

### Manual Deployment

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
inscrutable-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Donate.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Bootstrap 5** - CSS framework for responsive design
- **Bootstrap Icons** - Icon library
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD for automatic deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this website or Inscrutable's mission, please contact:
- Email: info@inscrutable.org
- Website: https://inscrutable.org