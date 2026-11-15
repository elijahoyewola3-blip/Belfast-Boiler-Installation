import heroEngineerImg from '../assets/images/hero_boiler_engineer_1794774593919.jpg';
import craftPipeworkImg from '../assets/images/craft_copper_pipework_1794774594094.jpg';
import serviceVanImg from '../assets/images/service_van_belfast_1794774594604.jpg';

export const BUSINESS = {
  name: 'Belfast Boiler Installations',
  ownerLead: 'Paul',
  phoneDisplay: '028 9000 0142',
  phoneHref: 'tel:02890000142',
  mobileDisplay: '07700 900 412',
  mobileHref: 'tel:07700900412',
  email: 'enquiries@belfastboilerinstallations.co.uk',
  gasSafeNumber: '548291',
  address: 'Castlereagh Road, East Belfast, BT5',
  hours: [
    { days: 'Monday – Friday', time: '08:00 – 18:00' },
    { days: 'Saturday', time: '08:30 – 14:00' },
    { days: 'Emergency Breakdowns', time: 'Priority callback for existing customers' },
  ],
};

export const IMAGES = {
  heroEngineer: {
    src: heroEngineerImg,
    alt: 'Heating engineer Paul inspecting pressure and fittings on a newly installed white combi boiler inside a Belfast utility room',
    caption: 'Paul commissioning a new A-rated combi boiler in East Belfast — copper pipework pressure-tested before hand-over.',
  },
  craftPipework: {
    src: craftPipeworkImg,
    alt: 'Close-up of heating engineer hands tightening a brass compression fitting on copper pipework beside a magnetic boiler filter',
    caption: 'Clean copper pipework and magnetic filter fitted as standard on every installation.',
  },
  serviceVan: {
    src: serviceVanImg,
    alt: 'Dark navy heating service van parked along a red-brick terraced residential street in Belfast',
    caption: 'On the road across East, South, North, and West Belfast — plus surrounding towns.',
  },
};

export interface NavPage {
  label: string;
  href: string;
  id: string;
}

export const SERVICE_NAV_PAGES: NavPage[] = [
  { id: 'boiler-installations', label: 'Boiler Installations', href: 'boiler-installations.html' },
  { id: 'boiler-servicing', label: 'Boiler Servicing & Certs', href: 'boiler-servicing.html' },
  { id: 'convert-to-gas', label: 'Convert to Gas', href: 'convert-to-gas.html' },
  { id: 'commercial-boilers', label: 'Commercial Boilers', href: 'commercial-boilers.html' },
  { id: 'smart-heating-controls', label: 'Smart Heating Controls', href: 'smart-heating-controls.html' },
];

export const MAIN_NAV_PAGES: NavPage[] = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'reviews', label: 'Reviews', href: 'reviews.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' },
];

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  ctaLabel: string;
  formValue: string;
  href: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'boiler-installation',
    index: '01',
    title: 'Boiler Installation & Replacement',
    summary: 'Reliable A-rated combi, system, and regular boilers fitted in 1–2 days with zero mess.',
    detail:
      'We size the boiler properly to your home, radiators, and hot-water demand — never overselling. Every new boiler comes with a FREE magnetic system filter, chemical cleanse, inhibitor, and a 7-year parts & labour warranty.',
    ctaLabel: 'Boiler Installations',
    formValue: 'Boiler Installation & Replacement',
    href: 'boiler-installations.html',
  },
  {
    id: 'convert-to-gas',
    index: '02',
    title: 'Convert to Gas',
    summary: 'Move away from expensive oil tanks and deliveries to instant mains gas heating.',
    detail:
      'We handle the complete changeover from your old oil boiler to efficient natural gas — coordinating pipe runs, meter box connection, radiator balancing, and safe tank decommissioning.',
    ctaLabel: 'Oil to Gas Conversions',
    formValue: 'Convert Oil to Gas',
    href: 'convert-to-gas.html',
  },
  {
    id: 'boiler-service',
    index: '03',
    title: 'Boiler Service & Gas Safety Certificates',
    summary: 'Thorough annual servicing that keeps your manufacturer warranty valid and bills down.',
    detail:
      'More than a quick glance — we strip down, clean the condensate trap and burner, test flue emissions, check gas pressure, and hand you a full service record.',
    ctaLabel: 'Servicing & Safety Checks',
    formValue: 'Boiler Service & Safety Check',
    href: 'boiler-servicing.html',
  },
  {
    id: 'landlord-certs',
    index: '04',
    title: 'Landlord Gas Safety Certificates (CP12)',
    summary: 'Dependable annual safety checks for Belfast landlords, HMOs, and letting agents.',
    detail:
      'We coordinate politely with your tenants, turn up on time, inspect every gas appliance and flue, and email your digital CP12 certificate the same day.',
    ctaLabel: 'Landlord Certificates',
    formValue: 'Landlord Gas Safety Certificate (CP12)',
    href: 'boiler-servicing.html#landlord-certificates',
  },
  {
    id: 'smart-controls',
    index: '05',
    title: 'Smart Heating Controls',
    summary: 'Room-by-room control from your phone so you never heat an empty house.',
    detail:
      'Neat installation and setup of Hive, Nest, Tado, or programmable wireless thermostats — and we walk you through how to use it before we leave.',
    ctaLabel: 'Smart Heating Controls',
    formValue: 'Smart Heating Controls',
    href: 'smart-heating-controls.html',
  },
  {
    id: 'commercial',
    index: '06',
    title: 'Commercial Boiler Installations',
    summary: 'Dependable heating & hot-water systems for Belfast offices, shops, churches, and hospitality venues.',
    detail:
      'Scheduled around your trading hours to keep downtime to a minimum, with full commercial Gas Safe sign-off and ongoing maintenance plans.',
    ctaLabel: 'Commercial Boilers',
    formValue: 'Commercial Boiler Installation',
    href: 'commercial-boilers.html',
  },
];

export interface GuaranteeItem {
  title: string;
  description: string;
}

export const GUARANTEES: GuaranteeItem[] = [
  {
    title: '7-Year FREE Parts & Labour Warranty',
    description:
      'Manufacturer-backed cover registered by us on the day we finish. No hidden annual warranty top-up fees.',
  },
  {
    title: 'FREE Magnetic Filter, Cleanse & Inhibitor',
    description:
      'Worth over £220, fitted as standard on every installation to trap black sludge and protect your new heat exchanger.',
  },
  {
    title: 'Gas Safe Registered Engineers',
    description:
      'Every pipe, flue, and safety test is completed and signed off by our own experienced Belfast Gas Safe engineers.',
  },
  {
    title: '£5M Public Liability Insurance',
    description:
      'Full cover for domestic homes, tenanted properties, and commercial premises across Northern Ireland.',
  },
  {
    title: 'On-Time & Spotless Home Promise',
    description:
      'We arrive when promised, lay heavy-duty dust sheets from your front door, and remove all old packaging and scrap.',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Quote',
    description:
      'Paul visits your home at a time that suits, checks your pipework and radiators, and sends one clear fixed price — no pushy sales reps.',
  },
  {
    number: '02',
    title: 'Install',
    description:
      'Our engineers arrive at 8am sharp, protect your floors, fit your new boiler with neat copper pipework, and flush the system.',
  },
  {
    number: '03',
    title: 'Certify',
    description:
      'We commission the boiler, register your 7-year warranty, and issue your Gas Safe Building Regulations compliance certificate.',
  },
  {
    number: '04',
    title: 'Aftercare',
    description:
      'We follow up to make sure your home is warm, show you the thermostat controls, and remind you when next year’s service is due.',
  },
];

export interface ReviewItem {
  id: string;
  author: string;
  quote: string;
  workType: string;
  featured?: boolean;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'elliott',
    author: 'Elliott McPherson',
    quote:
      'Outstanding from start to finish… fixed a small leak that wasn’t even their responsibility… transparent quote, no hidden costs.',
    workType: 'Boiler Installation',
    featured: true,
  },
  {
    id: 'simone',
    author: 'Simone Lafferty',
    quote:
      'New boiler installed to the highest standard… fixed an unrelated leak under our sink… went above and beyond.',
    workType: 'New Boiler Fit',
  },
  {
    id: 'gerry',
    author: 'Gerry McAuley',
    quote:
      'Arrived on time, job done within the agreed time frame… replaced our boiler and radiators. 100% recommend.',
    workType: 'Boiler & Radiators',
  },
  {
    id: 'patricia',
    author: 'Patricia',
    quote:
      'Replaced old boiler and seven radiators… left house spotless… price could never be beaten.',
    workType: 'Full Heating Upgrade',
  },
  {
    id: 'grainne',
    author: 'Grainne Rogan',
    quote:
      'Changed from oil to gas… arrived 8am, stayed until 9pm until the job was done. Friendly, professional and kind.',
    workType: 'Oil to Gas Conversion',
  },
  {
    id: 'matthew',
    author: 'Matthew Anderson',
    quote:
      'Cut our hot water bill by at least two thirds… after care checking in to make sure all is working well.',
    workType: 'Combi Upgrade',
  },
  {
    id: 'colin',
    author: 'Colin Watters',
    quote: 'Unreal service… quick and reliable.',
    workType: 'Boiler Service & Repair',
  },
];

export const BELFAST_AREAS = [
  {
    region: 'East Belfast',
    districts: 'Ballyhackamore · Belmont · Stormont · Castlereagh · Cregagh · Knock',
  },
  {
    region: 'South Belfast',
    districts: 'Ormeau · Malone · Lisburn Road · Stranmillis · Rosetta · Four Winds',
  },
  {
    region: 'North & West Belfast',
    districts: 'Cavehill · Antrim Road · Cliftonville · Falls · Andersonstown · Finaghy',
  },
  {
    region: 'Greater Belfast & Ards',
    districts: 'Holywood · Dundonald · Newtownabbey · Lisburn · Carryduff · Bangor',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How much does a new boiler installation cost in Belfast?',
    answer:
      'A straight combi-to-combi replacement typically starts from £1,850 to £2,450 depending on the boiler output and brand. Because every Belfast terraced, semi, or detached home has different pipework and flue routes, Paul visits in person for 15 minutes and gives you one fixed, written quote with no hidden extras.',
  },
  {
    question: 'How long does a boiler replacement or oil-to-gas conversion take?',
    answer:
      'A like-for-like boiler swap is usually completed within a single working day (arriving at 8am and heating back on before tea). Full oil-to-gas conversions or installations adding new radiators typically take 1 to 2 days, and we never leave you without heating overnight without prior agreement.',
  },
  {
    question: 'What does the 7-year FREE parts & labour warranty cover?',
    answer:
      'It covers all internal boiler components, call-out charges, and repair labour directly with the manufacturer for 7 full years from installation date. We register the warranty for you on completion; the only requirement is a standard annual Gas Safe service to keep it valid.',
  },
  {
    question: 'Can you convert our home from oil heating to mains gas?',
    answer:
      'Yes — oil-to-gas conversions are one of our most common jobs across East, South, and West Belfast. We check mains availability at your street, coordinate with Phoenix Energy or Firmus for the meter connection, remove your old oil boiler, run clean new gas pipework, and commission your new combi boiler.',
  },
  {
    question: 'Do you carry out Landlord Gas Safety Certificates (CP12)?',
    answer:
      'Yes. We work with private landlords and letting agents across Greater Belfast. We arrange access directly with your tenant, test the boiler, hob, and pipework, and email the signed digital CP12 certificate the same afternoon.',
  },
  {
    question: 'Why do you include a free magnetic filter and system cleanse?',
    answer:
      'Over years of use, radiators build up rust and sludge that can quickly clog a brand-new boiler’s heat exchanger. Flushing the system, adding corrosion inhibitor, and fitting a magnetic filter keeps the water clean, lowers gas bills, and protects your 7-year warranty.',
  },
];
