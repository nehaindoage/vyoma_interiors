export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  scope: string[];
  materials: string[];
  typicalDecisions: string;
}

export interface PropertyType {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pop-false-ceilings',
    title: 'POP & False Ceilings',
    subtitle: 'Ceiling design & detailing',
    description: 'Precision gypsum and POP false ceilings engineered for concealed lighting, acoustic comfort, and flawless architectural lines.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    scope: ['Gypsum board & POP cornices', 'Cove lighting channels & profile lights', 'AC duct concealment & service traps', 'Leveling & anti-crack mesh reinforcement'],
    materials: ['Saint-Gobain / Gyproc boards', 'GI framing framework (heavy gauge)', 'Anchor fasteners & joint compounds'],
    typicalDecisions: 'Deciding drop levels based on beam heights and lighting layout before framing begins.'
  },
  {
    id: 'flooring-tile-work',
    title: 'Flooring & Tile Work',
    subtitle: 'Surfaces, layouts & edges',
    description: 'Expert marble laying, vitrified tile fixing, wooden flooring installation, and precision skirting with laser leveling.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    scope: ['Large-format tile & Italian marble fixing', 'Wooden flooring & laminate installation', 'Skirting, stair nosing & threshold polishing', 'Waterproofing for wet areas & balconies'],
    materials: ['Fosroc / Weber adhesives & grouts', 'Laser-leveled spacers', 'Approved vitrified & natural stone slabs'],
    typicalDecisions: 'Selecting tile joint widths, tile direction relative to natural light, and transition profiles.'
  },
  {
    id: 'custom-woodwork',
    title: 'Custom Woodwork',
    subtitle: 'Cabinetry & useful storage',
    description: 'Bespoke wardrobes, TV media consoles, vanity units, and architectural paneling crafted to exact room dimensions.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    scope: ['Wardrobes with internal compartmentalization', 'Entertainment consoles & wall paneling', 'Vanity units, crockery shelves & study desks', 'Hardware fitting & soft-close mechanisms'],
    materials: ['Century / Greenply BWR grade plywood', 'Hettich / Hafele hinges & channels', 'Merino laminates, veneers & PU finishes'],
    typicalDecisions: 'Choosing internal hardware configuration, edge banding quality, and laminate vs veneer finish.'
  },
  {
    id: 'wall-painting',
    title: 'Wall Painting & Finishes',
    subtitle: 'Preparation & finish',
    description: 'Meticulous surface preparation, putty sanding, primer application, and premium emulsion or textured wall finishes.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    scope: ['Multi-coat wall putty & sanding', 'Anti-fungal primer & sealing', 'Royal luxury emulsion & velvet touch finishes', 'Texture painting & Duco polish on wood'],
    materials: ['Asian Paints Royale / Berger Silk', 'Birla White wall putty', 'Asian Paints TruCare primers'],
    typicalDecisions: 'Selecting sheen levels (matte vs luster) and accent wall color schemes per room.'
  }
];

export const PROPERTY_TYPES_DATA: PropertyType[] = [
  {
    id: 'independent-house',
    title: 'Independent House',
    subtitle: 'Multi-level living spaces',
    description: 'Complete finishing solutions tailored to independent structural layouts, staircases, and boundary integration.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'villa',
    title: 'Villa',
    subtitle: 'Expansive private estates',
    description: 'High-end interior finishing, double-height ceiling treatments, and luxurious architectural detailing.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'independent-floor',
    title: 'Independent Floor',
    subtitle: 'Builder floor residences',
    description: 'Optimized space planning, bespoke false ceilings, and smart storage units for floor-wise owners.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'apartment',
    title: 'Apartment',
    subtitle: 'Modern high-rise living',
    description: 'Efficient finishing packages designed for apartment regulations, service shafts, and seamless modular alignment.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_PROJECTS = [
  {
    id: 1,
    title: 'Kankarbagh Luxury Residence',
    city: 'Patna',
    propertyType: 'Independent House',
    services: ['POP Ceilings', 'Custom Woodwork', 'Wall Painting'],
    materials: 'Gyproc gypsum, Greenply BWR, Asian Paints Royale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    caption: 'Clean cove lighting ceiling with custom walnut veneer TV console and matte emulsion walls.'
  },
  {
    id: 2,
    title: 'Boring Road Duplex Apartment',
    city: 'Patna',
    propertyType: 'Apartment',
    services: ['Flooring & Tile Work', 'POP Ceilings'],
    materials: 'Italian marble look tiles, Saint-Gobain profiles',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    caption: 'Seamless large-format vitrified flooring paired with minimalist false ceiling profile lights.'
  },
  {
    id: 3,
    title: 'Fraser Road Executive Floor',
    city: 'Patna',
    propertyType: 'Independent Floor',
    services: ['Custom Woodwork', 'Wall Painting', 'Flooring'],
    materials: 'Century plywood, Hettich soft-close, Asian Paints Silk',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    caption: 'Floor-to-ceiling bedroom wardrobes in neutral cashmere matte laminate with integrated handles.'
  },
  {
    id: 4,
    title: 'Bailey Road Contemporary Villa',
    city: 'Patna',
    propertyType: 'Villa',
    services: ['All Four Core Services'],
    materials: 'Full turnkey finishing package',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    caption: 'Double-height living room execution featuring intricate POP detailing and bespoke wall finishes.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Written Scope',
    description: 'Share your property type, floor plan, and finishing requirements. We review feasibility and scope boundaries.'
  },
  {
    step: '02',
    title: 'Assess',
    subtitle: 'Material Clarity',
    description: 'Site inspection to measure dimensions, check civil readiness, and select approved material grades and finishes.'
  },
  {
    step: '03',
    title: 'Estimate',
    subtitle: 'Transparent Quotation',
    description: 'Detailed written estimate covering measurements, labour, material specifications, milestones, and applicable taxes.'
  },
  {
    step: '04',
    title: 'Execute',
    subtitle: 'Change Approval',
    description: 'Structured site execution under supervision. Any changes are documented and approved before work proceeds.'
  },
  {
    step: '05',
    title: 'Handover',
    subtitle: 'Final Walkthrough',
    description: 'Comprehensive review of all finished surfaces and workmanship against the approved scope during project closure.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Can I hire Vyoma for only one service?',
    answer: 'Yes. Enquiries can be for ceilings, flooring, custom woodwork or wall painting individually. Feasibility and scope are confirmed after reviewing the property.',
    category: 'Services'
  },
  {
    question: 'How will the cost of my project be calculated?',
    answer: 'The estimate depends on measurements, site condition, materials, design details and labour. The written quote should clarify what is included and excluded.',
    category: 'Pricing'
  },
  {
    question: 'Who purchases the materials?',
    answer: 'Material procurement responsibilities should be agreed before work begins. Approved brands, grades, finishes and responsibilities should be recorded in the scope.',
    category: 'Materials'
  },
  {
    question: 'Do I need complete design drawings?',
    answer: 'You can start with requirements, measurements or reference images. Detailed drawings or approvals may be needed before certain execution work begins.',
    category: 'Process'
  },
  {
    question: 'How long will my project take?',
    answer: 'Duration depends on work scope, site readiness, material availability and coordination. A project-specific schedule should be agreed after assessment.',
    category: 'Timelines'
  },
  {
    question: 'Is a site visit available in my city?',
    answer: 'Share your project location and requirements. The team can then confirm whether a visit is feasible and whether any visit charges apply.',
    category: 'Reach'
  },
  {
    question: 'Can I change finishes during the project?',
    answer: 'Changes can be discussed and documented. Any cost or timeline implications should be approved before revised work starts.',
    category: 'Process'
  },
  {
    question: 'Does Vyoma accept enquiries outside Bihar?',
    answer: 'Yes, enquiries are welcome across India. Execution feasibility, site logistics and commercial terms are reviewed individually.',
    category: 'Reach'
  },
  {
    question: 'How are payment milestones decided?',
    answer: 'Payment terms should be stated in the approved quotation or agreement, including applicable taxes and any material advances.',
    category: 'Pricing'
  },
  {
    question: 'What happens at handover?',
    answer: 'The agreed work and visible finishes should be reviewed against the approved scope. Any observations are documented and discussed during project closure.',
    category: 'Handover'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Vyoma handled our 3BHK flat finishing in Patna with absolute transparency. No hidden surprises, clear material specs, and exceptional workmanship on the false ceiling and wardrobes.',
    client: 'Rajesh & Sunita Sinha',
    city: 'Patna',
    projectType: 'Apartment 3BHK',
    source: 'Verified Homeowner',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    quote: 'As an architect working on residential floors, finding an execution team that adheres strictly to approved drawings and quality standards is rare. Vyoma delivered precisely as promised.',
    client: 'Ar. Manish Kumar',
    city: 'Patna',
    projectType: 'Independent Floor Project',
    source: 'Professional Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    quote: 'The attention to detail in our villa false ceilings and custom woodwork was phenomenal. Their milestone-based progress kept us fully informed every step of the way.',
    client: 'Priya Sharma',
    city: 'Patna',
    projectType: 'Villa Finishing',
    source: 'Verified Homeowner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const REGIONS_DATA = [
  { name: 'Bihar (Primary)', status: 'Patna Base • Active Teams', primary: true },
  { name: 'Delhi (NCT)', status: 'Enquiry & Project Review', primary: false },
  { name: 'Haryana', status: 'Enquiry & Project Review', primary: false },
  { name: 'Uttar Pradesh', status: 'Enquiry & Project Review', primary: false },
  { name: 'Jharkhand', status: 'Enquiry & Project Review', primary: false },
  { name: 'West Bengal', status: 'Enquiry & Project Review', primary: false },
  { name: 'Maharashtra', status: 'Enquiry & Project Review', primary: false },
  { name: 'Karnataka', status: 'Enquiry & Project Review', primary: false },
  { name: 'Telangana', status: 'Enquiry & Project Review', primary: false },
  { name: 'Gujarat', status: 'Enquiry & Project Review', primary: false }
];
