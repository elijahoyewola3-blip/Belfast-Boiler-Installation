import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { BUSINESS, SERVICES } from '../data/content';

interface QuoteFormProps {
  selectedService?: string;
  onServiceChange?: (service: string) => void;
  focusTrigger?: number;
}

interface FormState {
  name: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  postcode?: string;
}

export function QuoteForm({ selectedService, onServiceChange, focusTrigger = 0 }: QuoteFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const getInitialService = () => {
    if (selectedService) return selectedService;
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('service');
      if (param) return param;
    }
    return SERVICES[0].formValue;
  };

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    postcode: '',
    service: getInitialService(),
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (focusTrigger > 0 && nameInputRef.current) {
      nameInputRef.current.focus({ preventScroll: true });
    }
  }, [focusTrigger]);

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    const cleanPhone = values.phone.replace(/[\s()-]/g, '');
    if (!cleanPhone || cleanPhone.length < 9 || !/^[+\d]+$/.test(cleanPhone)) {
      nextErrors.phone = 'Please enter a valid UK/NI phone or mobile number.';
    }
    if (!values.postcode.trim() || values.postcode.trim().length < 3) {
      nextErrors.postcode = 'Please enter your postcode (e.g. BT4 or BT9 6AA).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted({ ...form });
  };

  if (submitted) {
    return (
      <div
        className="bg-white text-[#1C1C1C] rounded-lg border border-[#DDD8CE] p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#1E6B43] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold text-[#0F2033]">
              Quote request received, {submitted.name}
            </h3>
            <p className="mt-2 text-sm text-[#4F565E] leading-relaxed">
              Thanks for getting in touch about <strong className="text-[#1C1C1C]">{submitted.service}</strong> in{' '}
              <strong className="text-[#1C1C1C] uppercase">{submitted.postcode}</strong>. Paul or one of our
              engineers will ring you on{' '}
              <span className="font-semibold text-[#0F2033] tabular-nums">{submitted.phone}</span> within 1 working
              day.
            </p>
            <div className="mt-5 pt-5 border-t border-[#E6E2D8] flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2033] hover:underline tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C4760D]" aria-hidden="true" />
                Need an urgent answer? Call {BUSINESS.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(null);
                  setForm({
                    name: '',
                    phone: '',
                    postcode: '',
                    service: selectedService || SERVICES[0].formValue,
                    message: '',
                  });
                }}
                className="text-sm font-semibold text-[#4F565E] hover:text-[#0F2033] underline underline-offset-4 cursor-pointer"
              >
                Send another enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white text-[#1C1C1C] rounded-lg border border-[#DDD8CE] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-semibold text-[#0F2033] mb-1.5">
            Your Name <span className="text-[#B42318]">*</span>
          </label>
          <input
            ref={nameInputRef}
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, name: e.target.value }));
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="e.g. Sarah Gallagher"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'quote-name-error' : undefined}
            className="w-full px-3.5 py-2.5 text-base bg-[#FAF9F6] border border-[#CFC9BC] rounded-md text-[#1C1C1C] placeholder:text-[#767B82] focus:outline-none focus:border-[#0F2033] focus:ring-2 focus:ring-[#0F2033]/20"
          />
          {errors.name && (
            <p id="quote-name-error" className="mt-1 text-xs font-medium text-[#B42318]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#0F2033] mb-1.5">
            Phone Number <span className="text-[#B42318]">*</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, phone: e.target.value }));
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
            }}
            placeholder="e.g. 07700 900123"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
            className="w-full px-3.5 py-2.5 text-base bg-[#FAF9F6] border border-[#CFC9BC] rounded-md text-[#1C1C1C] placeholder:text-[#767B82] tabular-nums focus:outline-none focus:border-[#0F2033] focus:ring-2 focus:ring-[#0F2033]/20"
          />
          {errors.phone && (
            <p id="quote-phone-error" className="mt-1 text-xs font-medium text-[#B42318]">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="quote-postcode" className="block text-sm font-semibold text-[#0F2033] mb-1.5">
            Postcode <span className="text-[#B42318]">*</span>
          </label>
          <input
            id="quote-postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            required
            value={form.postcode}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, postcode: e.target.value }));
              if (errors.postcode) setErrors((prev) => ({ ...prev, postcode: undefined }));
            }}
            placeholder="e.g. BT4 3AA"
            aria-invalid={Boolean(errors.postcode)}
            aria-describedby={errors.postcode ? 'quote-postcode-error' : undefined}
            className="w-full px-3.5 py-2.5 text-base bg-[#FAF9F6] border border-[#CFC9BC] rounded-md text-[#1C1C1C] placeholder:text-[#767B82] uppercase focus:outline-none focus:border-[#0F2033] focus:ring-2 focus:ring-[#0F2033]/20"
          />
          {errors.postcode && (
            <p id="quote-postcode-error" className="mt-1 text-xs font-medium text-[#B42318]">
              {errors.postcode}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-service" className="block text-sm font-semibold text-[#0F2033] mb-1.5">
            Service Needed
          </label>
          <select
            id="quote-service"
            name="service"
            value={form.service}
            onChange={(e) => {
              const val = e.target.value;
              setForm((prev) => ({ ...prev, service: val }));
              onServiceChange?.(val);
            }}
            className="w-full px-3.5 py-2.5 text-base bg-[#FAF9F6] border border-[#CFC9BC] rounded-md text-[#1C1C1C] focus:outline-none focus:border-[#0F2033] focus:ring-2 focus:ring-[#0F2033]/20"
          >
            {SERVICES.map((svc) => (
              <option key={svc.id} value={svc.formValue}>
                {svc.formValue}
              </option>
            ))}
            <option value="Other / General Enquiry">Other / General Enquiry</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="quote-message" className="block text-sm font-semibold text-[#0F2033] mb-1.5">
          Brief details <span className="font-normal text-[#6B6B6B]">(optional)</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Tell us roughly what you need — e.g. swapping an old combi boiler, moving from oil to gas, or best time to call."
          className="w-full px-3.5 py-2.5 text-base bg-[#FAF9F6] border border-[#CFC9BC] rounded-md text-[#1C1C1C] placeholder:text-[#767B82] focus:outline-none focus:border-[#0F2033] focus:ring-2 focus:ring-[#0F2033]/20"
        />
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className="w-full px-6 py-3.5 text-base font-bold text-[#0F2033] bg-[#F2A33A] hover:bg-[#E29227] rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2033]"
        >
          Get a Free Quote
        </button>
        <p className="mt-2.5 text-xs text-center text-[#5A6068]">
          No obligation. No pushy sales visits. We reply within 1 working day.
        </p>
      </div>
    </form>
  );
}
