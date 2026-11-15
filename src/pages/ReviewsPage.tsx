import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { FiveStars } from '../components/Icons';
import { PageCtaBand, PageLayout } from '../components/Layout';
import { BUSINESS, REVIEWS } from '../data/content';

export function ReviewsPage() {
  const featuredReview = REVIEWS[0];
  const masonryReviews = REVIEWS.slice(1);

  return (
    <PageLayout activePageId="reviews">
      {/* Page Header & Masonry Reviews */}
      <section className="py-12 sm:py-16 bg-[#EFECE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <FiveStars className="w-5 h-5" />
                <span className="text-sm font-bold text-[#0F2033] tabular-nums">5.0 / 5.0 Average</span>
              </div>
              <h1 className="mt-2.5 text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2033]">
                Rated 5 stars by Belfast homeowners
              </h1>
            </div>
            <p className="text-sm sm:text-base text-[#4F565E] max-w-md">
              Real feedback from customers across East, South, North, and West Belfast — unedited, unscripted, and
              built on word of mouth.
            </p>
          </div>

          {/* Featured Full-Width Review Spotlight */}
          <article className="mt-10 bg-white border border-[#DDD8CE] rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <FiveStars className="w-4 h-4" />
              <blockquote className="mt-3 text-lg sm:text-xl font-semibold text-[#0F2033] leading-snug">
                “{featuredReview.quote}”
              </blockquote>
            </div>
            <div className="lg:text-right shrink-0">
              <p className="text-base font-bold text-[#0F2033]">{featuredReview.author}</p>
              <p className="text-xs text-[#4F565E] mt-0.5">{featuredReview.workType} · Verified Belfast Customer</p>
            </div>
          </article>

          {/* Staggered Masonry Grid */}
          <div className="mt-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {masonryReviews.map((rev) => (
              <article
                key={rev.id}
                className="break-inside-avoid bg-white border border-[#DDD8CE] rounded-lg p-6"
              >
                <FiveStars className="w-4 h-4" />
                <blockquote className="mt-3 text-base text-[#1C1C1C] leading-relaxed">
                  “{rev.quote}”
                </blockquote>
                <footer className="mt-4 pt-4 border-t border-[#EFECE5] flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-[#0F2033]">{rev.author}</span>
                  <span className="text-xs text-[#4F565E]">{rev.workType}</span>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[#D8D2C5]">
            <p className="text-base font-semibold text-[#0F2033]">
              Want an honest price from the same team?
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#0F2033] bg-white border border-[#0F2033] hover:bg-[#0F2033] hover:text-white rounded-md transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Paul Today
              </a>
              <a
                href="contact.html"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageCtaBand />
    </PageLayout>
  );
}
