import { StudioProvider } from './context/StudioContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { useHashRoute } from './hooks/useHashRoute.js';
import ScrollProgressBar from './components/layout/ScrollProgressBar.jsx';
import FloatingContactBar from './components/layout/FloatingContactBar.jsx';
import Header from './components/layout/Header.jsx';
import HeroSection from './components/hero/HeroSection.jsx';
import PortfolioSection from './components/portfolio/PortfolioSection.jsx';
import BeforeAfterSection from './components/portfolio/BeforeAfterSection.jsx';
import ServicesSection from './components/services/ServicesSection.jsx';
import PackagesSection from './components/packages/PackagesSection.jsx';
import AboutSection from './components/about/AboutSection.jsx';
import TestimonialsSection from './components/testimonials/TestimonialsSection.jsx';
import FaqSection from './components/faq/FaqSection.jsx';
import BrandingHubSection from './components/branding/BrandingHubSection.jsx';
import BookingSection from './components/booking/BookingSection.jsx';

function AppRoutes() {
  const route = useHashRoute();
  const isOwnerKit = route === '/kit' || route === '/admin';

  return (
    <>
      <ScrollProgressBar />
      <FloatingContactBar />
      <Header />
      <main>
        {isOwnerKit ? (
          <BrandingHubSection />
        ) : (
          <>
            <HeroSection />
            <PortfolioSection />
            <BeforeAfterSection />
            <ServicesSection />
            <PackagesSection />
            <AboutSection />
            <TestimonialsSection />
            <FaqSection />
            <BookingSection />
          </>
        )}
      </main>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <StudioProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </StudioProvider>
    </LanguageProvider>
  );
}
