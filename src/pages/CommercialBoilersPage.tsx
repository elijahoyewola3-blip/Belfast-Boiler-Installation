import React from 'react';
import { ArrowRight, Check, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { PageCtaBand, PageLayout, ResilientPhoto } from '../components/Layout';
import { BELFAST_AREAS, BUSINESS, IMAGES, SERVICES } from '../data/content';

export function CommercialBoilersPage() {
  const service = SERVICES[5];

  return (
    <PageLayout activePageId="commercial-boilers">
      {/* Page Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F5F1] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#C4760D] tabular-nums">
              {service.index}. Business &amp; Premises
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
                Discuss Commercial Work
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
              <div className="aspect-[16/10] overflow-hidden">
                <ResilientPhoto
                  src={IMAGES.serviceVan.src}
                  alt={IMAGES.serviceVan.alt}
                  fallbackTitle="Commercial Heating Across Greater Belfast"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-[#4F565E] bg-[#FAF9F6] border-t border-[#E6E2D8]">
                Dependable commercial heating across Greater Belfast offices, shops, churches, and hospitality venues.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Commercial Scope & Insurance */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4760D]">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>£5M Public Liability &amp; Gas Safe Reg. {BUSINESS.gasSafeNumber}</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F2033]">
              Planned around your opening hours
            </h2>
            <ul className="mt-5 divide-y divide-[#E6E2D8] border-y border-[#E6E2D8]">
              {[
                'Out-of-hours or weekend installation scheduling to keep business disruption minimal',
                'Full commercial Gas Safe sign-off and compliance certification',
                '£5M Public Liability Insurance covering commercial premises across Northern Ireland',
                'Ongoing annual servicing and priority breakdown response',
              ].map((item) => (
                <li key={item} className="py-4 flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C4760D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-[#1C1C1C]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 bg-[#F7F5F1] border border-[#DDD8CE] rounded-lg p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2033]">
              <MapPin className="w-4 h-4 text-[#C4760D]" aria-hidden="true" />
              <span>Greater Belfast Coverage</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-[#0F2033]">Areas we cover</h3>
            <dl className="mt-4 divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
              {BELFAST_AREAS.map((area) => (
                <div key={area.region} className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-3">
                  <dt className="sm:col-span-4 text-sm font-bold text-[#0F2033]">{area.region}</dt>
                  <dd className="sm:col-span-8 text-sm text-[#4F565E]">{area.districts}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <PageCtaBand
        heading="Need a reliable heating quote for your premises?"
        ctaLabel="Discuss Commercial Work"
        serviceParam={service.formValue}
      />
    </PageLayout>
  );
}
