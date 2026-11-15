import React from 'react';
import { ArrowRight, Check, Flame, Phone } from 'lucide-react';
import { FiveStars } from '../components/Icons';
import { PageCtaBand, PageLayout, ResilientPhoto } from '../components/Layout';
import { BUSINESS, FAQS, IMAGES, REVIEWS, SERVICES } from '../data/content';

export function ConvertToGasPage() {
  const service = SERVICES[1];
  const grainneReview = REVIEWS[4];
  const matthewReview = REVIEWS[5];

  return (
    <PageLayout activePageId="convert-to-gas">
      {/* Page Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#C4760D] tabular-nums">
              {service.index}. Home Heating Upgrades
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
                Get a Free Quote
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

          <div className="lg:col-span-5">
            <figure className="bg-white border border-[#DDD8CE] rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientPhoto
                  src={IMAGES.heroEngineer.src}
                  alt={IMAGES.heroEngineer.alt}
                  fallbackTitle="Belfast Engineer Commissioning Combi Boiler"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-[#6B6B6B] bg-[#FAF9F6] border-t border-[#E6E2D8]">
                Instant hot water and compact wall-mounted convenience — no more oil tank in the back garden.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Why Belfast homeowners switch from oil to gas */}
      <section className="py-14 sm:py-16 bg-[#0F2033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F2A33A]">
              <Flame className="w-4 h-4" aria-hidden="true" />
              <span>Benefits of mains gas</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
              Constant supply — never run out of oil again
            </h2>
            <p className="mt-3 text-base text-[#D7E0EA] leading-relaxed">
              No more checking the tank gauge in January or paying for 500-litre bulk deliveries upfront. Natural gas is
              piped straight to your home whenever you turn on the tap or heating.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#152D47] border border-white/15 rounded-lg divide-y divide-white/15">
            {[
              {
                title: 'Constant, reliable supply with no running out',
                desc: 'Mains gas is always on — no winter delivery delays, frozen oil lines, or surprise empty tanks.',
              },
              {
                title: 'Pay only for the energy you use',
                desc: 'Swap large lump-sum oil fills for predictable monthly or pay-as-you-go billing.',
              },
              {
                title: 'Reclaim your garden & utility space',
                desc: 'Remove the bulky outdoor oil tank and hot-water cylinder when upgrading to a compact combi boiler.',
              },
              {
                title: 'Instant hot water & lower running bills',
                desc: 'Modern condensing gas boilers run up to 94% efficiently, cutting waste and heating your water on demand.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="p-5 sm:p-6 flex items-start gap-4">
                <div className="w-7 h-7 rounded-md bg-[#F2A33A] text-[#0F2033] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.75]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-[#D7E0EA] leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we handle your oil-to-gas changeover */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
              How we handle your oil-to-gas changeover
            </h2>
            <p className="mt-3 text-base text-[#4F565E] leading-relaxed">{FAQS[3].answer}</p>
          </div>

          <ul className="lg:col-span-7 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
            {[
              'Check mains gas availability on your street and coordinate with Phoenix Energy or Firmus',
              'Decommission and remove your old oil boiler and hot-water cylinder if moving to a combi',
              'Run neat, properly sized copper gas pipework and fit your new A-rated boiler',
              'Power-cleanse existing radiators, add inhibitor, and fit a FREE magnetic filter',
              'Register your 7-year FREE parts & labour warranty and issue Gas Safe certification',
            ].map((step) => (
              <li key={step} className="py-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-[#C4760D] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-[#1C1C1C]">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Oil-to-Gas Reviews */}
      <section className="py-14 sm:py-16 bg-[#EFECE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
            Belfast homeowners who made the switch
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[grainneReview, matthewReview].map((rev) => (
              <article key={rev.id} className="bg-white border border-[#DDD8CE] rounded-lg p-6">
                <FiveStars className="w-4 h-4" />
                <blockquote className="mt-3 text-base text-[#1C1C1C] leading-relaxed">“{rev.quote}”</blockquote>
                <footer className="mt-4 pt-3 border-t border-[#EFECE5] flex justify-between text-sm">
                  <span className="font-bold text-[#0F2033]">{rev.author}</span>
                  <span className="text-[#6B6B6B]">{rev.workType}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCtaBand
        heading="Thinking of moving from oil to mains gas?"
        ctaLabel="Get a Free Quote"
        serviceParam={service.formValue}
      />
    </PageLayout>
  );
}
