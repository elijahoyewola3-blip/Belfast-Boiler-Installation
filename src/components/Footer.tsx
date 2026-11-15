import React from 'react';
import { BUSINESS, GUARANTEES, SERVICES } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-[#081320] text-[#CBD5E1] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand & Gas Safe */}
          <div>
            <a href="index.html" className="text-lg font-extrabold text-white hover:text-[#F2A33A] transition-colors">
              {BUSINESS.name}
            </a>
            <p className="mt-2.5 text-sm text-[#A9B7C6] leading-relaxed">
              Family-run heating engineers serving Greater Belfast for over 30 years. Reliable workmanship, honest
              quotes, and tidy homes.
            </p>
            <p className="mt-4 text-xs font-semibold text-[#F2A33A] tabular-nums">
              Gas Safe Register No: {BUSINESS.gasSafeNumber}
            </p>
          </div>

          {/* Services linking to real pages */}
          <div>
            <h2 className="text-sm font-bold text-white">Heating Services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <a href={svc.href} className="text-[#A9B7C6] hover:text-white transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h2 className="text-sm font-bold text-white">Contact &amp; Hours</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="font-semibold text-white hover:text-[#F2A33A] tabular-nums"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={BUSINESS.mobileHref} className="text-[#A9B7C6] hover:text-white tabular-nums">
                  {BUSINESS.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="text-[#A9B7C6] hover:text-white break-all">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="text-[#A9B7C6]">{BUSINESS.address}</li>
            </ul>
            <dl className="mt-4 pt-3 border-t border-white/10 space-y-1 text-xs text-[#A9B7C6]">
              {BUSINESS.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-2">
                  <dt>{h.days}</dt>
                  <dd className="tabular-nums text-white/90">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Guarantees & Site Pages */}
          <div>
            <h2 className="text-sm font-bold text-white">Our Guarantees &amp; Pages</h2>
            <ul className="mt-3 space-y-1.5 text-xs text-[#A9B7C6]">
              {GUARANTEES.slice(0, 4).map((g) => (
                <li key={g.title}>{g.title}</li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a href="about.html" className="text-[#A9B7C6] hover:text-white">
                About &amp; Guarantees
              </a>
              <a href="reviews.html" className="text-[#A9B7C6] hover:text-white">
                Customer Reviews
              </a>
              <a href="contact.html" className="text-[#F2A33A] font-semibold hover:underline">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#8D9DB0]">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>
            7-year manufacturer parts &amp; labour warranty subject to annual Gas Safe boiler servicing. Gas Safe
            details verifiable at gassaferegister.co.uk.
          </p>
        </div>
      </div>
    </footer>
  );
}
