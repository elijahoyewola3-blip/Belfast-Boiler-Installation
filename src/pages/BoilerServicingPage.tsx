import React from 'react';
import { ArrowRight, BellRing, Check, Clock, Phone, ShieldCheck } from 'lucide-react';
import { FiveStars } from '../components/Icons';
import { PageCtaBand, PageLayout } from '../components/Layout';
import { BUSINESS, FAQS, REVIEWS, SERVICES } from '../data/content';

export function BoilerServicingPage() {
  const annualService = SERVICES[2];
  const landlordService = SERVICES[3];
  const colinReview = REVIEWS[6];

  return (
    <PageLayout activePageId="boiler-servicing">
      {/* Boiler Service & Gas Safety Section */}
      <section className="py-12 sm:py-16 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#C4760D] tabular-nums">
              {annualService.index}. Annual Maintenance &amp; Safety
            </p>
            <h1 className="mt-2 text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2033]">
              {annualService.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-[#1C1C1C] leading-relaxed">
              Thorough annual boiler servicing completed in under 1 hour — keeping your manufacturer warranty valid and
              winter bills down.
            </p>
            <p className="mt-3 text-base text-[#4F565E] leading-relaxed max-w-2xl">{annualService.detail}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="flex items-start gap-2.5 bg-white border border-[#DDD8CE] rounded-md p-3.5">
                <Clock className="w-5 h-5 text-[#C4760D] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-[#0F2033]">Done in under 1 hour</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Clean, punctual appointments</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white border border-[#DDD8CE] rounded-md p-3.5">
                <BellRing className="w-5 h-5 text-[#C4760D] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-[#0F2033]">Annual renewal reminders</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Never miss a warranty check</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
              <a
                href={`contact.html?service=${encodeURIComponent(annualService.formValue)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap"
              >
                Book a Service
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] border border-[#0F2033] hover:bg-[#0F2033] hover:text-white rounded-md transition-colors whitespace-nowrap tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Paul Today: {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#DDD8CE] rounded-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0F2033]">What our under-1-hour service checks</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#373D45]">
              {[
                'Full burner & condensate trap strip-down and clean',
                'Flue gas combustion & emissions analyser test',
                'Gas operating pressure & safety valve checks',
                'Magnetic filter cleaned and inhibitor levels inspected',
                'Signed Gas Safe service record to keep warranties valid',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C4760D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Landlord Gas Safety Certificates (CP12) Section */}
      <section id="landlord-certificates" className="py-14 sm:py-16 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4760D]">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span className="tabular-nums">{landlordService.index}. For Landlords &amp; Agents</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F2033]">
              {landlordService.title}
            </h2>
            <p className="mt-3 text-base font-medium text-[#1C1C1C] leading-relaxed">{landlordService.summary}</p>
            <p className="mt-3 text-base text-[#4F565E] leading-relaxed">
              {landlordService.detail} We also log your renewal date and send a friendly reminder a month before your
              next annual CP12 inspection is due — so you stay compliant without having to chase your calendar.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`contact.html?service=${encodeURIComponent(landlordService.formValue)}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors"
              >
                Book a Landlord Check
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="text-sm font-bold text-[#0F2033] hover:text-[#C4760D] underline underline-offset-4 tabular-nums"
              >
                Call Paul Today
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F7F5F1] border border-[#DDD8CE] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#0F2033]">{FAQS[4].question}</h3>
              <p className="mt-2 text-sm sm:text-base text-[#373D45] leading-relaxed">{FAQS[4].answer}</p>
            </div>

            <article className="bg-[#EFECE5] border border-[#DDD8CE] rounded-lg p-6">
              <FiveStars className="w-4 h-4" />
              <blockquote className="mt-3 text-base text-[#1C1C1C] leading-relaxed">
                “{colinReview.quote}”
              </blockquote>
              <footer className="mt-3 text-sm font-bold text-[#0F2033]">
                {colinReview.author} <span className="font-normal text-[#6B6B6B]">· {colinReview.workType}</span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <PageCtaBand
        heading="Due an annual service or landlord safety certificate?"
        ctaLabel="Book a Service"
        serviceParam={annualService.formValue}
      />
    </PageLayout>
  );
}
