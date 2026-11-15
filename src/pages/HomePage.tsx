import React from 'react';
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { FiveStars, GasSafeBadgeMark } from '../components/Icons';
import { PageCtaBand, PageLayout, ResilientPhoto } from '../components/Layout';
import { BELFAST_AREAS, BUSINESS, GUARANTEES, IMAGES, REVIEWS, SERVICES } from '../data/content';

export function HomePage() {
  const featuredReviews = [REVIEWS[0], REVIEWS[1], REVIEWS[4], REVIEWS[5]];

  return (
    <PageLayout activePageId="home">
      {/* Hero Section */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16 bg-[#F7F5F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1">
              <div>
                <p className="text-sm font-medium text-[#4F565E] flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-[#0F2033]">Family-run in Belfast</span>
                  <span aria-hidden="true">·</span>
                  <span>30+ years on the tools</span>
                  <span aria-hidden="true">·</span>
                  <span>Gas Safe Registered</span>
                </p>

                <h1 className="mt-4 text-[clamp(2.25rem,4.2vw,3.55rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0F2033]">
                  Warm Belfast homes, fitted properly the first time.
                </h1>

                <p className="mt-5 text-base sm:text-lg text-[#373D45] leading-relaxed max-w-2xl">
                  Over 30 years installing, converting, and servicing boilers across Greater Belfast. Every new
                  installation comes with a{' '}
                  <strong className="font-semibold text-[#0F2033]">7-year FREE parts &amp; labour warranty</strong>,
                  a free magnetic system filter, and a straight fixed quote from Paul — never a call centre.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
                  <a
                    href="contact.html"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0F2033] bg-transparent border border-[#0F2033] hover:bg-[#0F2033] hover:text-white rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call Paul: {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DDD8CE] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#373D45]">
                <a href="reviews.html" className="flex items-center gap-2 hover:text-[#0F2033]">
                  <FiveStars className="w-4 h-4" />
                  <span className="font-semibold text-[#0F2033]">5.0 rating from Belfast homeowners</span>
                </a>
                <span className="text-[#6B6B6B] hidden sm:inline" aria-hidden="true">
                  ·
                </span>
                <span>Fixed written quotes within 1 working day</span>
              </div>
            </div>

            {/* Right Documentary Photography */}
            <div className="lg:col-span-5 flex flex-col">
              <figure className="flex-1 flex flex-col bg-white border border-[#DDD8CE] rounded-lg overflow-hidden">
                <div className="relative flex-1 min-h-[280px] sm:min-h-[340px]">
                  <ResilientPhoto
                    src={IMAGES.heroEngineer.src}
                    alt={IMAGES.heroEngineer.alt}
                    fallbackTitle="Belfast Gas Safe Engineer on Site"
                    className="w-full h-full lg:absolute lg:inset-0 object-cover object-center"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs text-[#4F565E] bg-[#FAF9F6] border-t border-[#E6E2D8] leading-snug">
                  {IMAGES.heroEngineer.caption}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-10 sm:mt-12 border-y border-[#DDD8CE] py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            <div className="flex items-center gap-3">
              <GasSafeBadgeMark className="w-9 h-9 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0F2033]">Gas Safe Registered</p>
                <p className="text-xs text-[#4F565E] tabular-nums">Reg. No. {BUSINESS.gasSafeNumber}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#0F2033] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-[#0F2033]">7-Year Free Warranty</p>
                <p className="text-xs text-[#4F565E]">Full parts &amp; labour cover</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-[#0F2033] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-[#0F2033]">30+ Years’ Experience</p>
                <p className="text-xs text-[#4F565E]">Family-run Belfast tradesmen</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#0F2033] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-[#0F2033]">£5M Public Liability</p>
                <p className="text-xs text-[#4F565E]">Domestic &amp; commercial insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview linking to dedicated pages */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E6E2D8]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#C4760D]">What we do</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2033]">
                Heating work across Belfast, done without shortcuts
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4F565E] max-w-md">
              From swapping a tired combi to converting an older home from oil to gas, explore each service below.
            </p>
          </div>

          {/* Row 1: Asymmetric 7 / 5 split */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <article className="lg:col-span-7 bg-[#0F2033] text-white rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-12 border border-[#0F2033]">
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#F2A33A] tabular-nums">
                    {SERVICES[0].index}. Core Speciality
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{SERVICES[0].title}</h3>
                  <p className="mt-3 text-base text-[#E2E8F0] leading-relaxed">{SERVICES[0].summary}</p>
                  <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">{SERVICES[0].detail}</p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/15">
                  <a
                    href={SERVICES[0].href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors whitespace-nowrap"
                  >
                    View {SERVICES[0].ctaLabel}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="sm:col-span-5 relative min-h-[220px]">
                <ResilientPhoto
                  src={IMAGES.craftPipework.src}
                  alt={IMAGES.craftPipework.alt}
                  fallbackTitle="Copper pipework & magnetic filter"
                  className="w-full h-full sm:absolute sm:inset-0 object-cover"
                />
              </div>
            </article>

            <article className="lg:col-span-5 bg-[#F7F5F1] border border-[#DDD8CE] rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#4F565E] tabular-nums">
                  {SERVICES[1].index}. Home Upgrades
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#0F2033]">{SERVICES[1].title}</h3>
                <p className="mt-3 text-base text-[#1C1C1C] leading-relaxed">{SERVICES[1].summary}</p>
                <p className="mt-3 text-sm text-[#4F565E] leading-relaxed">{SERVICES[1].detail}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-[#DDD8CE]">
                <a
                  href={SERVICES[1].href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2033] hover:text-[#C4760D] underline underline-offset-4 decoration-2 decoration-[#F2A33A] whitespace-nowrap"
                >
                  Read about {SERVICES[1].ctaLabel}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>

          {/* Row 2: 3-column hairline-divided ledger */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 border-y border-[#E6E2D8] divide-y md:divide-y-0 md:divide-x divide-[#E6E2D8]">
            {SERVICES.slice(2, 5).map((svc) => (
              <article key={svc.id} className="py-7 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#6B6B6B] tabular-nums">{svc.index}.</p>
                  <h3 className="mt-1.5 text-xl font-bold text-[#0F2033]">{svc.title}</h3>
                  <p className="mt-2.5 text-sm font-medium text-[#1C1C1C] leading-relaxed">{svc.summary}</p>
                  <p className="mt-2 text-sm text-[#4F565E] leading-relaxed">{svc.detail}</p>
                </div>
                <div className="mt-5">
                  <a
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F2033] hover:text-[#C4760D] underline underline-offset-4 decoration-2 decoration-[#F2A33A] whitespace-nowrap"
                  >
                    {svc.ctaLabel}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Row 3: Full-width Commercial band */}
          <article className="mt-8 bg-[#EFECE5] border border-[#DDD8CE] rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#4F565E] tabular-nums">
                {SERVICES[5].index}. Business &amp; Premises
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2033]">{SERVICES[5].title}</h3>
              <p className="mt-2 text-sm sm:text-base text-[#373D45] leading-relaxed">
                {SERVICES[5].summary} {SERVICES[5].detail}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={SERVICES[5].href}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#0F2033] bg-white border border-[#0F2033] hover:bg-[#0F2033] hover:text-white rounded-md transition-colors whitespace-nowrap"
              >
                {SERVICES[5].ctaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Guarantees Snapshot -> About Page */}
      <section className="py-16 sm:py-20 bg-[#0F2033] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#F2A33A]">Our guarantees</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Our word on every job — backed in writing
            </h2>
            <p className="mt-4 text-base text-[#D7E0EA] leading-relaxed">
              Every installation includes a 7-year manufacturer parts &amp; labour warranty, a free magnetic system
              filter, chemical cleanse, and our clean-home promise.
            </p>
            <div className="mt-6">
              <a
                href="about.html"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#F2A33A] hover:underline underline-offset-4"
              >
                See all guarantees &amp; how we work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#153554] border border-white/15 rounded-lg divide-y divide-white/15">
            {GUARANTEES.slice(0, 3).map((item) => (
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

      {/* Featured Reviews -> Reviews Page */}
      <section className="py-16 sm:py-20 bg-[#EFECE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <FiveStars className="w-5 h-5" />
                <span className="text-sm font-bold text-[#0F2033] tabular-nums">5.0 / 5.0 Average</span>
              </div>
              <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2033]">
                Rated 5 stars by Belfast homeowners
              </h2>
            </div>
            <a
              href="reviews.html"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2033] hover:text-[#C4760D] underline underline-offset-4 decoration-2 decoration-[#F2A33A] whitespace-nowrap"
            >
              Read all customer reviews
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredReviews.map((rev) => (
              <article key={rev.id} className="bg-white border border-[#DDD8CE] rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <FiveStars className="w-4 h-4" />
                  <blockquote className="mt-3 text-base text-[#1C1C1C] leading-relaxed">
                    “{rev.quote}”
                  </blockquote>
                </div>
                <footer className="mt-4 pt-4 border-t border-[#EFECE5] flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-[#0F2033]">{rev.author}</span>
                  <span className="text-xs text-[#4F565E]">{rev.workType}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Belfast Service Area */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E6E2D8]">
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
              waiting days for an engineer driving up from hours away.
            </p>
            <dl className="mt-6 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
              {BELFAST_AREAS.map((area) => (
                <div key={area.region} className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
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
