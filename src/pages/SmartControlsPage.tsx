import React from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { FiveStars } from '../components/Icons';
import { PageCtaBand, PageLayout, ResilientPhoto } from '../components/Layout';
import { BUSINESS, IMAGES, REVIEWS, SERVICES } from '../data/content';

export function SmartControlsPage() {
  const service = SERVICES[4];
  const matthewReview = REVIEWS[5];

  return (
    <PageLayout activePageId="smart-heating-controls">
      {/* Page Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#C4760D] tabular-nums">
              {service.index}. Controls &amp; Efficiency
            </p>
            <h1 className="mt-2 text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2033]">
              {service.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-[#1C1C1C] leading-relaxed">{service.summary}</p>
            <p className="mt-3 text-base text-[#4F565E] leading-relaxed max-w-2xl">{service.detail}</p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
              <a
                href={`contact.html?service=${encodeURIComponent(service.formValue)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap"
              >
                Enquire About Controls
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] border border-[#0F2033] hover:bg-[#0F2033] hover:text-white rounded-md transition-colors whitespace-nowrap tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="bg-white border border-[#DDD8CE] rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientPhoto
                  src={IMAGES.craftPipework.src}
                  alt={IMAGES.craftPipework.alt}
                  fallbackTitle="Boiler & Heating Controls Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-[#4F565E] bg-[#FAF9F6] border-t border-[#E6E2D8]">
                Fitted neatly alongside a new boiler or wired onto your existing heating system.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Practical Details + Customer Proof */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
              Plain-spoken setup — we show you how everything works
            </h2>
            <ul className="mt-5 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
              {[
                'Hive, Nest, Tado, and straightforward wireless programmable thermostats supplied and wired neatly',
                'Clean wiring at the boiler with zero trailing cables or messy junction boxes',
                'Connected to your Wi-Fi and phone app before our engineer packs away',
                'Full, unhurried walk-through so everyone in the house feels comfortable adjusting schedules',
              ].map((item) => (
                <li key={item} className="py-4 flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C4760D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-[#1C1C1C]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#EFECE5] border border-[#DDD8CE] rounded-lg p-6 sm:p-8">
            <FiveStars className="w-4 h-4" />
            <blockquote className="mt-3 text-lg font-medium text-[#0F2033] leading-relaxed">
              “{matthewReview.quote}”
            </blockquote>
            <footer className="mt-4 pt-4 border-t border-[#DDD8CE] flex justify-between text-sm">
              <span className="font-bold text-[#0F2033]">{matthewReview.author}</span>
              <span className="text-[#4F565E]">{matthewReview.workType}</span>
            </footer>
          </div>
        </div>
      </section>

      <PageCtaBand
        heading="Want better control over your heating bills?"
        ctaLabel="Enquire About Controls"
        serviceParam={service.formValue}
      />
    </PageLayout>
  );
}
