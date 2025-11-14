# 🌟 DataShield.Ai Frontend

**Shield Your Digital World with AI-Powered Protection** 🛡️✨

A stunning, responsive React frontend for AI-powered phishing detection and safe browsing. Built with modern technologies and featuring a cyber-themed design for an immersive user experience.

![DataShield.Ai](https://img.shields.io/badge/DataShield.Ai-Cyber%20Security-blue?style=for-the-badge&logo=shield)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Key Features

- **🔍 Real-Time URL Scanner**: Instant AI analysis of phishing threats with 98% accuracy
- **📊 Gamified Trust Scores**: Color-coded safety gauges (0-100) with visual feedback
- **📱 Comprehensive Dashboard**: Scan history, statistics, user management, and pricing plans
- **🌐 Browser Extension Ready**: Seamless integration for real-time protection
- **🎨 Cyber-Themed UI**: Neon gradients, dark mode, and responsive design
- **📈 Analytics Dashboard**: Real-time metrics and threat monitoring
- **👤 User Management**: Profile updates, authentication, and session tracking
- **💾 Data Export**: Scan history export functionality

## 🛠️ Tech Stack

- ⚛️ **React 18** with TypeScript for type safety
- ⚡ **Vite** for lightning-fast development and building
- 🎨 **Tailwind CSS** with custom cyber theme and animations
- 🧩 **shadcn/ui** component library for consistent UI
- 🧭 **React Router DOM** for client-side routing
- 📡 **React Query** for efficient API state management
- 🎯 **React Hook Form + Zod** for robust form validation
- 🎨 **Lucide React** for beautiful icons

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui primitives
│   ├── Navigation.tsx  # Main navigation bar
│   ├── TrustScoreGauge.tsx  # Score visualization
│   ├── ScanHistoryPage.tsx  # History management
│   ├── PricingPage.tsx      # Subscription plans
│   ├── UpdateProfileForm.tsx # User profile
│   └── SessionInfoCard.tsx   # Session tracking
├── pages/              # Route components
│   ├── Landing.tsx     # Marketing homepage
│   ├── Dashboard.tsx   # Main app dashboard
│   ├── Login.tsx       # Authentication
│   ├── Register.tsx    # User registration
│   ├── Profile.tsx     # User profile page
│   ├── ScanHistory.tsx # Scan history view
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utilities and mock data
│   ├── mockData.ts     # Sample data
│   └── utils.ts        # Helper functions
└── App.tsx            # Main app component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1. **Clone the repository**:
   ```sh
   git clone <YOUR_GIT_URL>
   ```

2. **Navigate to the project directory**:
   ```sh
   cd <YOUR_PROJECT_NAME>
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Start the development server**:
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:8080`.

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview the production build locally

## 🎯 Usage

1. **Landing Page**: Explore features and get started
2. **Register/Login**: Create account or sign in
3. **Dashboard**: Scan URLs, view history, manage profile
4. **Scan URLs**: Enter URLs for instant AI-powered analysis
5. **View Results**: See trust scores, IP data, and threat details

## 🔒 Security Features

- **98% Detection Rate**: Advanced XGBoost ML model
- **Multi-Factor Analysis**: IP, ASN, geolocation, and URL patterns
- **Real-Time Monitoring**: Continuous threat assessment
- **Browser Integration**: Extension-ready for seamless protection
- **Mock Data Simulation**: Realistic scan results for development

## 🌐 API Integration

The frontend integrates with backend APIs for:
- `POST /api/predict` - URL scanning and prediction
- `GET /api/scan-history` - Retrieve user scan history
- `POST /api/save-scan` - Save scan results
- `GET /api/dashboard-stats` - Dashboard statistics

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🧪 Testing

- Component testing with React Testing Library
- E2E testing setup ready
- Mock data for development testing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🤝 Contributing

We love contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint rules
- Write meaningful commit messages
- Test your changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons by [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Experience the future of cybersecurity with DataShield.Ai!** 🔐✨

*Made with ❤️ for a safer internet*
