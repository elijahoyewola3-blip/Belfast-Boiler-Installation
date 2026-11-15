import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Phone } from 'lucide-react';
import { FiveStars } from '../components/Icons';
import { PageCtaBand, PageLayout, ResilientPhoto } from '../components/Layout';
import { BUSINESS, FAQS, IMAGES, PROCESS_STEPS, REVIEWS, SERVICES } from '../data/content';

export function BoilerInstallationsPage() {
  const service = SERVICES[0];
  const installReviews = [REVIEWS[0], REVIEWS[1], REVIEWS[2], REVIEWS[3]];
  const installFaqs = [FAQS[0], FAQS[1], FAQS[2], FAQS[5]];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <PageLayout activePageId="boiler-installations">
      {/* Page Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#C4760D] tabular-nums">
              {service.index}. Core Speciality · Belfast &amp; Surrounds
            </p>
            <h1 className="mt-2 text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2033]">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-[#1C1C1C] font-medium leading-relaxed">{service.summary}</p>
            <p className="mt-3 text-base text-[#4F565E] leading-relaxed max-w-2xl">{service.detail}</p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
              <a
                href={`contact.html?service=${encodeURIComponent(service.formValue)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap"
              >
                Get a Boiler Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] border border-[#0F2033] hover:bg-[#0F2033] hover:text-white rounded-md transition-colors whitespace-nowrap tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Paul: {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="bg-white border border-[#DDD8CE] rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientPhoto
                  src={IMAGES.craftPipework.src}
                  alt={IMAGES.craftPipework.alt}
                  fallbackTitle="Clean copper pipework and magnetic filter"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-[#4F565E] bg-[#FAF9F6] border-t border-[#E6E2D8]">
                {IMAGES.craftPipework.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Included as Standard */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
              Included with every new boiler installation
            </h2>
            <p className="mt-3 text-base text-[#4F565E] leading-relaxed">
              We don’t quote a bare-bones price and then add essential protection as paid extras on installation day.
              Everything needed for a long-lasting boiler is included upfront.
            </p>
          </div>

          <ul className="lg:col-span-7 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
            {[
              {
                title: '7-Year FREE Parts & Labour Warranty',
                desc: 'Manufacturer-backed cover registered by us on completion — zero extra warranty top-up fees.',
              },
              {
                title: 'FREE Magnetic System Filter, Chemical Cleanse & Inhibitor',
                desc: 'Worth over £220, fitted as standard to clear radiator sludge and protect your new heat exchanger.',
              },
              {
                title: 'Proper Home Sizing & Radiator Balancing',
                desc: 'We check your bathrooms, radiators, and gas supply so your hot water and heating never struggle.',
              },
              {
                title: 'Old Boiler Removed & Hallways Left Spotless',
                desc: 'Heavy-duty dust sheets down from the front door, neat soldered copper pipework, and all scrap taken away.',
              },
            ].map((item) => (
              <li key={item.title} className="py-4 flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-md bg-[#F2A33A] text-[#0F2033] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#0F2033]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#4F565E] leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4-Step Installation Process */}
      <section className="py-14 sm:py-16 bg-[#EFECE5] border-y border-[#DDD8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#C4760D]">How it works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F2033]">
              Four straightforward steps from survey to warm radiators
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <li key={step.number} className="pt-5 border-t-2 border-[#0F2033]">
                <span className="text-sm font-bold text-[#C4760D] tabular-nums">{step.number}.</span>
                <h3 className="mt-1.5 text-xl font-bold text-[#0F2033]">{step.title}</h3>
                <p className="mt-2.5 text-sm text-[#373D45] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Relevant Reviews */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
              What Belfast homeowners say about our installations
            </h2>
            <a
              href="reviews.html"
              className="text-sm font-bold text-[#0F2033] underline underline-offset-4 decoration-2 decoration-[#F2A33A]"
            >
              Read all reviews
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {installReviews.map((rev) => (
              <article key={rev.id} className="bg-[#FAF9F6] border border-[#DDD8CE] rounded-lg p-6">
                <FiveStars className="w-4 h-4" />
                <blockquote className="mt-3 text-base text-[#1C1C1C] leading-relaxed">“{rev.quote}”</blockquote>
                <footer className="mt-4 pt-3 border-t border-[#E6E2D8] flex justify-between text-sm">
                  <span className="font-bold text-[#0F2033]">{rev.author}</span>
                  <span className="text-[#4F565E]">{rev.workType}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Installation FAQs */}
      <section className="py-14 sm:py-16 bg-[#F7F5F1] border-t border-[#E6E2D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
            Boiler installation questions
          </h2>
          <div className="mt-6 bg-white border border-[#DDD8CE] rounded-lg divide-y divide-[#E6E2D8]">
            {installFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F6] cursor-pointer"
                  >
                    <span className="text-base font-bold text-[#0F2033]">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0F2033] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-[#373D45] leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCtaBand
        heading="Ready for a fixed quote on a new boiler?"
        ctaLabel="Get a Boiler Quote"
        serviceParam={service.formValue}
      />
    </PageLayout>
  );
}
