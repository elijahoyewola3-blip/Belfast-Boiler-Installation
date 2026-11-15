import React from 'react';
import { AboutPage } from './pages/AboutPage';
import { BoilerInstallationsPage } from './pages/BoilerInstallationsPage';
import { BoilerServicingPage } from './pages/BoilerServicingPage';
import { CommercialBoilersPage } from './pages/CommercialBoilersPage';
import { ContactPage } from './pages/ContactPage';
import { ConvertToGasPage } from './pages/ConvertToGasPage';
import { HomePage } from './pages/HomePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { SmartControlsPage } from './pages/SmartControlsPage';

export type PageKey =
  | 'home'
  | 'boiler-installations'
  | 'boiler-servicing'
  | 'convert-to-gas'
  | 'commercial-boilers'
  | 'smart-heating-controls'
  | 'about'
  | 'reviews'
  | 'contact';

function resolvePageFromPath(): PageKey {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  if (path.includes('boiler-installations')) return 'boiler-installations';
  if (path.includes('boiler-servicing')) return 'boiler-servicing';
  if (path.includes('convert-to-gas')) return 'convert-to-gas';
  if (path.includes('commercial-boilers')) return 'commercial-boilers';
  if (path.includes('smart-heating-controls')) return 'smart-heating-controls';
  if (path.includes('about')) return 'about';
  if (path.includes('reviews')) return 'reviews';
  if (path.includes('contact')) return 'contact';
  return 'home';
}

export default function App({ page }: { page?: PageKey }) {
  const activePage = page || resolvePageFromPath();

  switch (activePage) {
    case 'boiler-installations':
      return <BoilerInstallationsPage />;
    case 'boiler-servicing':
      return <BoilerServicingPage />;
    case 'convert-to-gas':
      return <ConvertToGasPage />;
    case 'commercial-boilers':
      return <CommercialBoilersPage />;
    case 'smart-heating-controls':
      return <SmartControlsPage />;
    case 'about':
      return <AboutPage />;
    case 'reviews':
      return <ReviewsPage />;
    case 'contact':
      return <ContactPage />;
    case 'home':
    default:
      return <HomePage />;
  }
}
