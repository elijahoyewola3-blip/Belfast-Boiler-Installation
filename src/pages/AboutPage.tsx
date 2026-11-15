import React from 'react';
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { PageCtaBand, PageLayout, ResilientPhoto } from '../components/Layout';
import { BELFAST_AREAS, BUSINESS, GUARANTEES, IMAGES, PROCESS_STEPS } from '../data/content';

export function AboutPage() {
  return (
    <PageLayout activePageId="about">
      {/* Family-Run Intro */}
      <section className="py-12 sm:py-16 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#C4760D]">
              Family-run in Belfast · 30+ years on the tools · Gas Safe Reg. {BUSINESS.gasSafeNumber}
            </p>
            <h1 className="mt-2 text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2033]">
              Our word on every job — backed in writing
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#373D45] leading-relaxed max-w-2xl">
              A boiler isn’t something you replace every week. You want to know who’s walking into your house, what the
              exact bill will be before a spanner is lifted, and that someone local answers the phone if you ever need a
              hand afterwards.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="contact.html"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0F2033] hover:text-[#C4760D] underline underline-offset-4 tabular-nums"
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
                  src={IMAGES.heroEngineer.src}
                  alt={IMAGES.heroEngineer.alt}
                  fallbackTitle="Paul inspecting a Belfast boiler installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-[#4F565E] bg-[#FAF9F6] border-t border-[#E6E2D8]">
                {IMAGES.heroEngineer.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Full Guarantees Ledger */}
      <section className="py-16 sm:py-20 bg-[#0F2033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#F2A33A]">Why customers choose us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Five promises included on every installation
            </h2>
            <p className="mt-4 text-base text-[#D7E0EA] leading-relaxed">
              Every guarantee below applies as standard across Greater Belfast — written on your quote and honoured by
              the same engineers who visit your home.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#153554] border border-white/15 rounded-lg divide-y divide-white/15">
            {GUARANTEES.map((item) => (
              <div key={item.title} className="p-5 sm:p-6 flex items-start gap-4">
                <div className="w-7 h-7 rounded-md bg-[#F2A33A] text-[#0F2033] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.75]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#D7E0EA] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 sm:py-20 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#C4760D]">How it works</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2033]">
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

      {/* Service Area */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <figure className="bg-[#FAF9F6] border border-[#DDD8CE] rounded-lg overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <ResilientPhoto
                  src={IMAGES.serviceVan.src}
                  alt={IMAGES.serviceVan.alt}
                  fallbackTitle="Belfast Boiler Installations Service Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-[#4F565E] border-t border-[#E6E2D8]">
                {IMAGES.serviceVan.caption}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4760D]">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Local Belfast coverage</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2033]">
              Covering all of Belfast and surrounding towns
            </h2>
            <p className="mt-3 text-base text-[#373D45] leading-relaxed">
              Based in East Belfast, our vans are on the road every morning across every BT postcode — so you’re never
              waiting days for an engineer who’s driving up from hours away.
            </p>
            <dl className="mt-7 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
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

      <PageCtaBand />
    </PageLayout>
  );
}
