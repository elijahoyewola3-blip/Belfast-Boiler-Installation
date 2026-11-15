import React from 'react';

export function BrandMark({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0F2033" />
      <path
        d="M16 7.5C16 7.5 21.5 12.6 21.5 17.2C21.5 20.4 19.04 23 16 23C12.96 23 10.5 20.4 10.5 17.2C10.5 12.6 16 7.5 16 7.5Z"
        fill="#F2A33A"
      />
      <path
        d="M16 14C16 14 18.5 16.4 18.5 18.5C18.5 19.9 17.38 21 16 21C14.62 21 13.5 19.9 13.5 18.5C13.5 16.4 16 14 16 14Z"
        fill="#0F2033"
      />
    </svg>
  );
}

export function GasSafeBadgeMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 3L31 28H5L18 3Z" fill="#F2A33A" stroke="#0F2033" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M18 12.5C18 12.5 21 15.6 21 18.2C21 19.86 19.66 21.2 18 21.2C16.34 21.2 15 19.86 15 18.2C15 15.6 18 12.5 18 12.5Z"
        fill="#0F2033"
      />
      <rect x="12" y="23" width="12" height="2" rx="1" fill="#0F2033" />
    </svg>
  );
}

export function FiveStars({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((idx) => (
        <svg
          key={idx}
          viewBox="0 0 20 20"
          fill="#E59220"
          className={className}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.368 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}
