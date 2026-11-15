import React, { useState } from 'react';
import { Check, ChevronDown, MapPin, Phone } from 'lucide-react';
import { PageLayout } from '../components/Layout';
import { QuoteForm } from '../components/QuoteForm';
import { BELFAST_AREAS, BUSINESS, FAQS } from '../data/content';

export function ContactPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <PageLayout activePageId="contact">
      {/* Quote Form & Direct Contact Band */}
      <section className="py-12 sm:py-16 bg-[#0F2033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#F2A33A]">Free home survey &amp; written quote</p>
            <h1 className="mt-2 text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              Get your free, no-obligation quote
            </h1>
            <p className="mt-4 text-base text-[#D7E0EA] leading-relaxed">
              Leave your details and Paul will get back to you within one working day to arrange a short survey or
              answer any questions over the phone.
            </p>

            <div className="mt-8 bg-[#153554] border border-white/15 rounded-lg p-6">
              <p className="text-xs font-semibold text-[#F2A33A]">Prefer to speak straight away?</p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-2 inline-flex items-center gap-2.5 text-2xl sm:text-3xl font-extrabold text-white hover:text-[#F2A33A] transition-colors tabular-nums"
              >
                <Phone className="w-6 h-6 text-[#F2A33A] shrink-0" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-[#D7E0EA]">
                Mobile:{' '}
                <a href={BUSINESS.mobileHref} className="underline tabular-nums hover:text-white">
                  {BUSINESS.mobileDisplay}
                </a>
              </p>
              <p className="mt-1 text-sm text-[#D7E0EA]">
                Email:{' '}
                <a href={`mailto:${BUSINESS.email}`} className="underline hover:text-white break-all">
                  {BUSINESS.email}
                </a>
              </p>
            </div>

            <ul className="mt-7 space-y-2.5 text-sm text-[#D7E0EA]">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#F2A33A] shrink-0" aria-hidden="true" />
                <span>Gas Safe Registered engineers (Reg. {BUSINESS.gasSafeNumber})</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#F2A33A] shrink-0" aria-hidden="true" />
                <span>7-year FREE parts &amp; labour warranty on new boilers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#F2A33A] shrink-0" aria-hidden="true" />
                <span>30+ years serving Belfast · £5M Public Liability Insured</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm focusTrigger={0} />
          </div>
        </div>
      </section>

      {/* Opening Hours & Belfast Areas */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-[#F7F5F1] border border-[#DDD8CE] rounded-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0F2033]">Opening Hours &amp; Base</h2>
            <p className="mt-2 text-sm text-[#4F565E]">{BUSINESS.address}</p>
            <dl className="mt-5 divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
              {BUSINESS.hours.map((h) => (
                <div key={h.days} className="py-3 flex justify-between gap-4 text-sm">
                  <dt className="font-semibold text-[#0F2033]">{h.days}</dt>
                  <dd className="text-[#4F565E] tabular-nums text-right">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4760D]">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Local Belfast coverage</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
              Areas we cover across Greater Belfast
            </h2>
            <dl className="mt-5 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
              {BELFAST_AREAS.map((area) => (
                <div key={area.region} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                  <dt className="sm:col-span-4 text-sm font-bold text-[#0F2033]">{area.region}</dt>
                  <dd className="sm:col-span-8 text-sm text-[#4F565E]">{area.districts}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-14 sm:py-16 bg-[#F7F5F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#C4760D]">Common questions</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
            Straight answers before you book
          </h2>

          <div className="mt-6 bg-white border border-[#DDD8CE] rounded-lg divide-y divide-[#E6E2D8]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
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
    </PageLayout>
  );
}
