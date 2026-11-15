import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { BUSINESS, SERVICE_NAV_PAGES } from '../data/content';
import { BrandMark } from './Icons';

interface HeaderProps {
  activePageId: string;
}

export function Header({ activePageId }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(
    SERVICE_NAV_PAGES.some((s) => s.id === activePageId)
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicePageActive = SERVICE_NAV_PAGES.some((s) => s.id === activePageId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinkClass = (isActive: boolean) =>
    `whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2033] ${
      isActive
        ? 'border-[#F2A33A] text-[#0F2033] font-bold'
        : 'border-transparent text-[#373D45] hover:text-[#0F2033] hover:border-[#F2A33A]'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F1]/95 backdrop-blur-sm border-b border-[#DDD8CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Clean single-line Brand Wordmark */}
        <a
          href="index.html"
          className="flex items-center gap-2.5 text-[#0F2033] font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2033] rounded-sm"
        >
          <BrandMark className="w-7 h-7 shrink-0" />
          <span className="text-base sm:text-lg font-extrabold tracking-tight">
            {BUSINESS.name}
          </span>
        </a>

        {/* Zone 2: Clean 5-item Navigation (Home | Services dropdown | About | Reviews | Contact) */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <a
            href="index.html"
            aria-current={activePageId === 'home' ? 'page' : undefined}
            className={navLinkClass(activePageId === 'home')}
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 cursor-pointer ${navLinkClass(isServicePageActive)}`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Heating services"
                className="absolute left-0 top-full pt-2 w-64 z-50"
              >
                <div className="bg-white border border-[#DDD8CE] rounded-lg shadow-lg py-1.5">
                  {SERVICE_NAV_PAGES.map((svc) => {
                    const isSubActive = svc.id === activePageId;
                    return (
                      <a
                        key={svc.id}
                        href={svc.href}
                        role="menuitem"
                        aria-current={isSubActive ? 'page' : undefined}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isSubActive
                            ? 'bg-[#F7F5F1] text-[#0F2033] font-bold border-r-4 border-[#F2A33A]'
                            : 'text-[#1C1C1C] font-medium hover:bg-[#F7F5F1] hover:text-[#0F2033]'
                        }`}
                      >
                        {svc.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="about.html"
            aria-current={activePageId === 'about' ? 'page' : undefined}
            className={navLinkClass(activePageId === 'about')}
          >
            About
          </a>

          <a
            href="reviews.html"
            aria-current={activePageId === 'reviews' ? 'page' : undefined}
            className={navLinkClass(activePageId === 'reviews')}
          >
            Reviews
          </a>

          <a
            href="contact.html"
            aria-current={activePageId === 'contact' ? 'page' : undefined}
            className={navLinkClass(activePageId === 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Click-to-call Phone + Get a Free Quote CTA + Mobile Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F2033] tabular-nums whitespace-nowrap shrink-0 px-2.5 py-2 rounded-md hover:bg-[#EFECE5] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2033]"
            aria-label={`Call ${BUSINESS.name} on ${BUSINESS.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-[#C4760D] shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <a
            href="contact.html"
            className="hidden md:inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2033]"
          >
            Get a Free Quote
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#D4CEC2] text-[#0F2033] hover:bg-[#EFECE5] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2033]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Collapsible Services Sub-menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#F7F5F1] border-t border-[#DDD8CE] px-4 py-5 space-y-4 max-h-[82vh] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <a
              href="index.html"
              aria-current={activePageId === 'home' ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 px-3 text-base rounded-md transition-colors ${
                activePageId === 'home'
                  ? 'bg-[#0F2033] text-white font-bold'
                  : 'text-[#1C1C1C] font-semibold hover:bg-[#EFECE5]'
              }`}
            >
              Home
            </a>

            {/* Collapsible Services Sub-menu */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-submenu"
                className={`w-full py-2.5 px-3 text-base rounded-md flex items-center justify-between transition-colors cursor-pointer ${
                  isServicePageActive
                    ? 'bg-[#0F2033] text-white font-bold'
                    : 'text-[#1C1C1C] font-semibold hover:bg-[#EFECE5]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-150 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div id="mobile-services-submenu" className="mt-1 ml-3 pl-3 border-l border-[#D4CEC2] flex flex-col gap-1">
                  {SERVICE_NAV_PAGES.map((svc) => {
                    const isSubActive = svc.id === activePageId;
                    return (
                      <a
                        key={svc.id}
                        href={svc.href}
                        aria-current={isSubActive ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={`py-2 px-3 text-sm rounded-md transition-colors ${
                          isSubActive
                            ? 'bg-[#EFECE5] text-[#0F2033] font-bold'
                            : 'text-[#373D45] font-medium hover:bg-[#EFECE5]'
                        }`}
                      >
                        {svc.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="about.html"
              aria-current={activePageId === 'about' ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 px-3 text-base rounded-md transition-colors ${
                activePageId === 'about'
                  ? 'bg-[#0F2033] text-white font-bold'
                  : 'text-[#1C1C1C] font-semibold hover:bg-[#EFECE5]'
              }`}
            >
              About
            </a>

            <a
              href="reviews.html"
              aria-current={activePageId === 'reviews' ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 px-3 text-base rounded-md transition-colors ${
                activePageId === 'reviews'
                  ? 'bg-[#0F2033] text-white font-bold'
                  : 'text-[#1C1C1C] font-semibold hover:bg-[#EFECE5]'
              }`}
            >
              Reviews
            </a>

            <a
              href="contact.html"
              aria-current={activePageId === 'contact' ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 px-3 text-base rounded-md transition-colors ${
                activePageId === 'contact'
                  ? 'bg-[#0F2033] text-white font-bold'
                  : 'text-[#1C1C1C] font-semibold hover:bg-[#EFECE5]'
              }`}
            >
              Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-[#DDD8CE] flex flex-col sm:flex-row gap-2.5">
            <a
              href={BUSINESS.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-[#0F2033] border border-[#0F2033] rounded-md tabular-nums"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Tap to Call: {BUSINESS.phoneDisplay}
            </a>
            <a
              href="contact.html"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
