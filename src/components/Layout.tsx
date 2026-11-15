import React, { useState } from 'react';
import { ArrowRight, Phone, Wrench } from 'lucide-react';
import { BUSINESS } from '../data/content';
import { Footer } from './Footer';
import { Header } from './Header';

export function ResilientPhoto({
  src,
  alt,
  className,
  fallbackTitle,
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#E7E2D8] text-[#0F2033] p-6 text-center ${className || ''}`}
        role="img"
        aria-label={alt}
      >
        <Wrench className="w-8 h-8 mb-2 text-[#0F2033]/70" aria-hidden="true" />
        <p className="text-sm font-semibold">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function PageLayout({
  activePageId,
  children,
}: {
  activePageId: string;
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F7F5F1] text-[#1C1C1C]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F2033] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <Header activePageId={activePageId} />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export function PageCtaBand({
  heading = 'Get your free, no-obligation quote',
  subtext = 'Leave your details or ring Paul directly — straight advice, one fixed price, and no pushy sales visits.',
  ctaLabel = 'Get a Free Quote',
  serviceParam,
}: {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  serviceParam?: string;
}) {
  const quoteHref = serviceParam
    ? `contact.html?service=${encodeURIComponent(serviceParam)}`
    : 'contact.html';

  return (
    <section className="py-14 sm:py-16 bg-[#0F2033] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#F2A33A]">
            Gas Safe Reg. {BUSINESS.gasSafeNumber} · 30+ Years in Belfast
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {heading}
          </h2>
          <p className="mt-3 text-base text-[#D7E0EA] leading-relaxed">{subtext}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 shrink-0">
          <a
            href={quoteHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white border border-white/40 hover:bg-white hover:text-[#0F2033] rounded-md transition-colors whitespace-nowrap tabular-nums"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
