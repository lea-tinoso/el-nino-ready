export type LevelKey = 'drought' | 'dry' | 'below' | 'near'
export type Level = {
  label: string
  short: string
  tone: string
  meaning: string
}
export type Region = {
  name: string
  level: LevelKey
  note: string
  links?: [string, string][]
}
// [name, region code, lat, lng, level override?]
export type Province = [string, string, number, number, LevelKey?]
export type ChecklistGroup = {
  id: string
  title: string
  items: [string, string, string][]
}

// Content for El Niño Ready. Edit this file to update advice; no code changes needed.
// Source for statuses: PAGASA El Niño Advisory No. 5 (7 Oct 2026), October 2026 outlook.

export const ADVISORY = {
  name: 'PAGASA El Niño Advisory No. 5',
  issued: '7 October 2026',
  covers: 'October 2026',
  url: 'https://pubfiles.pagasa.dost.gov.ph/pagasaweb/files/climate/elninolanina/EN_Advisory_5.pdf',
  simpleUrl:
    'https://pubfiles.pagasa.dost.gov.ph/pagasaweb/files/climate/elninolanina/Simplified_EN_Advisory_5.pdf',
  listUrl:
    'https://bagong.pagasa.dost.gov.ph/climate/el-nino-la-nina/advisories',
  summary:
    'A strong to very strong El Niño is present and may peak before the end of 2026. PAGASA expects it to last until the first half of 2027.',
}

// Status levels, most to least severe.
export const LEVELS: Record<LevelKey, Level> = {
  drought: {
    label: 'Drought or dry spell likely',
    short: 'Highest risk',
    tone: 'red',
    meaning:
      'PAGASA expects drought or a dry spell here by the end of the month. Expect water interruptions, crop stress and high heat. Start saving water now.',
  },
  dry: {
    label: 'Dry conditions likely',
    short: 'Elevated risk',
    tone: 'orange',
    meaning:
      'Rainfall is expected to be below normal for a stretch. Water supply and farms can start to feel it. Prepare now so a dry spell does not catch you off guard.',
  },
  below: {
    label: 'Below-normal rain expected',
    short: 'Watch',
    tone: 'yellow',
    meaning:
      'Less rain than usual is forecast this month. Water and heat problems can build over the next few months, so prepare early.',
  },
  near: {
    label: 'Near-normal rain this month',
    short: 'Stay alert',
    tone: 'blue',
    meaning:
      'Rain is forecast to be close to normal this month, but El Niño is still active and conditions can change. Keep your basics ready.',
  },
}

export const REGIONS: Record<string, Region> = {
  NCR: {
    name: 'Metro Manila (NCR)',
    level: 'below',
    note: "Most of Metro Manila's water comes from Angat Dam. When its level drops, Maynilad and Manila Water may lower pressure or schedule interruptions.",
    links: [
      ['Maynilad advisories', 'https://www.mayniladwater.com.ph'],
      ['Manila Water advisories', 'https://www.manilawater.com'],
    ],
  },
  CAR: {
    name: 'Cordillera (CAR)',
    level: 'below',
    note: 'Vegetable and rice farms in the highlands depend on steady rain. Abra and Kalinga are flagged for dry conditions this month.',
  },
  I: {
    name: 'Ilocos Region (I)',
    level: 'below',
    note: 'Rice and tobacco farms may need to plan around less irrigation water.',
  },
  II: {
    name: 'Cagayan Valley (II)',
    level: 'below',
    note: 'Isabela is flagged for dry conditions this month. Batanes and Cagayan are forecast near-normal rain for now.',
  },
  III: {
    name: 'Central Luzon (III)',
    level: 'below',
    note: 'Central Luzon is a major rice area. Irrigation releases may be reduced if dams run low.',
  },
  IVA: {
    name: 'CALABARZON (IV-A)',
    level: 'below',
    note: 'Quezon is flagged for dry conditions this month. Heat in urban Cavite, Laguna and Rizal can be high.',
  },
  MIMAROPA: {
    name: 'MIMAROPA',
    level: 'dry',
    note: 'Most of MIMAROPA is flagged for dry conditions this month. Island water sources can run low quickly.',
  },
  V: {
    name: 'Bicol Region (V)',
    level: 'drought',
    note: 'Most of Bicol is flagged for drought or dry spell by the end of October. This is one of the hardest-hit regions right now.',
  },
  VI: {
    name: 'Western Visayas (VI)',
    level: 'dry',
    note: 'Western Visayas is flagged for dry conditions this month. Rice and sugarcane farms may be affected.',
  },
  NIR: {
    name: 'Negros Island Region (NIR)',
    level: 'near',
    note: 'The Negros provinces had way below-normal rainfall in September. October rain is forecast near-normal, but water sources may still be low.',
  },
  VII: {
    name: 'Central Visayas (VII)',
    level: 'near',
    note: "October rain is forecast near-normal. Cebu's water supply has been strained in past El Niño years, so conserve early.",
  },
  VIII: {
    name: 'Eastern Visayas (VIII)',
    level: 'drought',
    note: 'Eastern Visayas is flagged for drought or dry spell by the end of October. This is one of the hardest-hit regions right now.',
  },
  IX: {
    name: 'Zamboanga Peninsula (IX)',
    level: 'near',
    note: 'October rain is forecast near-normal. Zamboanga City has had water rationing in past El Niño years.',
  },
  X: {
    name: 'Northern Mindanao (X)',
    level: 'near',
    note: 'October rain is forecast near-normal. Hydropower in Mindanao depends on rivers, so watch for power advisories.',
  },
  XI: {
    name: 'Davao Region (XI)',
    level: 'near',
    note: 'October rain is forecast near-normal. Banana and other plantation crops are sensitive to long dry stretches.',
  },
  XII: {
    name: 'SOCCSKSARGEN (XII)',
    level: 'near',
    note: 'October rain is forecast near-normal. Corn and rice farms should still plan for a drier first half of 2027.',
  },
  XIII: {
    name: 'Caraga (XIII)',
    level: 'below',
    note: 'Surigao del Norte and Dinagat Islands are flagged for drought or dry spell. The rest of Caraga expects below-normal rain.',
  },
  BARMM: {
    name: 'BARMM',
    level: 'near',
    note: 'October rain is forecast near-normal. Island provinces like Sulu and Tawi-Tawi rely on rainwater and wells, so store water early.',
  },
}

// Province overrides where the advisory names a province specifically.
// [name, region, lat, lng, level override?]
export const PROVINCES: Province[] = [
  ['Metro Manila', 'NCR', 14.6, 121.0],
  ['Abra', 'CAR', 17.6, 120.62, 'dry'],
  ['Apayao', 'CAR', 18.02, 121.18],
  ['Benguet', 'CAR', 16.46, 120.59],
  ['Ifugao', 'CAR', 16.8, 121.12],
  ['Kalinga', 'CAR', 17.41, 121.44, 'dry'],
  ['Mountain Province', 'CAR', 17.09, 120.98],
  ['Ilocos Norte', 'I', 18.2, 120.59],
  ['Ilocos Sur', 'I', 17.57, 120.39],
  ['La Union', 'I', 16.62, 120.32],
  ['Pangasinan', 'I', 15.95, 120.45],
  ['Batanes', 'II', 20.45, 121.97, 'near'],
  ['Cagayan', 'II', 17.61, 121.73, 'near'],
  ['Isabela', 'II', 17.0, 121.85, 'dry'],
  ['Nueva Vizcaya', 'II', 16.48, 121.15],
  ['Quirino', 'II', 16.51, 121.52],
  ['Aurora', 'III', 15.76, 121.56],
  ['Bataan', 'III', 14.68, 120.54],
  ['Bulacan', 'III', 14.84, 120.9],
  ['Nueva Ecija', 'III', 15.55, 120.97],
  ['Pampanga', 'III', 15.03, 120.69],
  ['Tarlac', 'III', 15.48, 120.59],
  ['Zambales', 'III', 15.33, 119.98],
  ['Batangas', 'IVA', 13.76, 121.06],
  ['Cavite', 'IVA', 14.28, 120.87],
  ['Laguna', 'IVA', 14.28, 121.42],
  ['Quezon', 'IVA', 13.94, 121.62, 'dry'],
  ['Rizal', 'IVA', 14.59, 121.18],
  ['Marinduque', 'MIMAROPA', 13.45, 121.84],
  ['Occidental Mindoro', 'MIMAROPA', 12.9, 120.95],
  ['Oriental Mindoro', 'MIMAROPA', 13.0, 121.3],
  ['Palawan', 'MIMAROPA', 9.74, 118.74],
  ['Romblon', 'MIMAROPA', 12.58, 122.27],
  ['Albay', 'V', 13.14, 123.74],
  ['Camarines Norte', 'V', 14.11, 122.95],
  ['Camarines Sur', 'V', 13.58, 123.28],
  ['Catanduanes', 'V', 13.58, 124.23],
  ['Masbate', 'V', 12.37, 123.62],
  ['Sorsogon', 'V', 12.97, 124.0],
  ['Aklan', 'VI', 11.71, 122.37],
  ['Antique', 'VI', 10.74, 121.94],
  ['Capiz', 'VI', 11.59, 122.75],
  ['Guimaras', 'VI', 10.6, 122.59],
  ['Iloilo', 'VI', 10.85, 122.5],
  ['Negros Occidental', 'NIR', 10.4, 123.0],
  ['Negros Oriental', 'NIR', 9.6, 123.1],
  ['Siquijor', 'NIR', 9.2, 123.59],
  ['Bohol', 'VII', 9.85, 124.15],
  ['Cebu', 'VII', 10.32, 123.89],
  ['Biliran', 'VIII', 11.56, 124.4],
  ['Eastern Samar', 'VIII', 11.61, 125.43],
  ['Leyte', 'VIII', 11.0, 124.8],
  ['Northern Samar', 'VIII', 12.4, 124.64],
  ['Samar', 'VIII', 11.78, 124.88],
  ['Southern Leyte', 'VIII', 10.25, 125.0],
  ['Zamboanga del Norte', 'IX', 8.2, 123.0],
  ['Zamboanga del Sur', 'IX', 7.83, 123.44],
  ['Zamboanga City', 'IX', 6.91, 122.08],
  ['Zamboanga Sibugay', 'IX', 7.78, 122.59],
  ['Bukidnon', 'X', 8.0, 125.0],
  ['Camiguin', 'X', 9.18, 124.72],
  ['Lanao del Norte', 'X', 8.05, 123.9],
  ['Misamis Occidental', 'X', 8.35, 123.7],
  ['Misamis Oriental', 'X', 8.6, 124.8],
  ['Davao de Oro', 'XI', 7.6, 125.97],
  ['Davao del Norte', 'XI', 7.45, 125.75],
  ['Davao del Sur', 'XI', 7.07, 125.61],
  ['Davao Occidental', 'XI', 6.2, 125.6],
  ['Davao Oriental', 'XI', 7.1, 126.3],
  ['Cotabato', 'XII', 7.1, 124.9],
  ['Sarangani', 'XII', 5.95, 125.2],
  ['South Cotabato', 'XII', 6.35, 124.85],
  ['Sultan Kudarat', 'XII', 6.55, 124.4],
  ['Agusan del Norte', 'XIII', 8.95, 125.54],
  ['Agusan del Sur', 'XIII', 8.4, 125.9],
  ['Dinagat Islands', 'XIII', 10.1, 125.6, 'drought'],
  ['Surigao del Norte', 'XIII', 9.75, 125.5, 'drought'],
  ['Surigao del Sur', 'XIII', 8.9, 126.2],
  ['Basilan', 'BARMM', 6.6, 122.0],
  ['Lanao del Sur', 'BARMM', 7.85, 124.3],
  ['Maguindanao del Norte', 'BARMM', 7.2, 124.3],
  ['Maguindanao del Sur', 'BARMM', 6.85, 124.6],
  ['Sulu', 'BARMM', 6.0, 121.0],
  ['Tawi-Tawi', 'BARMM', 5.1, 119.9],
]

export const CHECKLIST: ChecklistGroup[] = [
  {
    id: 'water',
    title: 'Tubig',
    items: [
      [
        'water-store',
        'Store drinking water for at least 3 days',
        '4 L a person a day',
      ],
      [
        'water-cover',
        'Cover every stored container, or dengue mosquitoes breed in it',
        '10 min',
      ],
      [
        'water-leaks',
        'Fix dripping faucets and leaking toilets',
        'One weekend',
      ],
      [
        'water-reuse',
        'Reuse hugas-bigas and laundry rinse water for flushing and plants',
        'Daily',
      ],
      [
        'water-sched',
        "Follow your water utility's interruption schedule",
        'Weekly',
      ],
      [
        'water-safe',
        "Boil water for 1 minute if you don't know where it came from",
        '1 min',
      ],
    ],
  },
  {
    id: 'heat',
    title: 'Init',
    items: [
      [
        'heat-index',
        "Check PAGASA's heat index. 42°C and up is danger",
        'Daily',
      ],
      [
        'heat-signs',
        'Learn heat stroke signs: hot dry skin, confusion, fainting. Call 911',
        '5 min',
      ],
      [
        'heat-drink',
        'Drink water before you feel thirsty; go easy on coffee and alcohol',
        'All day',
      ],
      [
        'heat-hours',
        'Avoid heavy outdoor work from late morning to mid-afternoon',
        '10 am–3 pm',
      ],
      [
        'heat-check',
        'Check on lolo, lola, babies, pregnant family and anyone with heart problems',
        'Daily',
      ],
      [
        'heat-car',
        'Never leave children or pets in a parked vehicle',
        'Always',
      ],
      [
        'heat-illness',
        'Watch for diarrhea and dengue; both rise when water is scarce',
        'Ongoing',
      ],
    ],
  },
  {
    id: 'food',
    title: 'Pagkain',
    items: [
      [
        'food-budget',
        "Budget for higher rice, vegetable and fish prices. Don't panic-buy",
        'Monthly',
      ],
      [
        'food-stock',
        'Keep a modest stock of rice, canned goods and noodles',
        '1 week',
      ],
      [
        'farm-ma',
        'Farmers: ask your Municipal Agriculturist about drought-tolerant varieties',
        '1 visit',
      ],
      [
        'farm-pcic',
        'Farmers and fisherfolk: ask about PCIC crop and livestock insurance',
        '1 visit',
      ],
      ['farm-water', 'Water plants early morning or late afternoon', 'Daily'],
    ],
  },
  {
    id: 'power',
    title: 'Kuryente',
    items: [
      ['power-aircon', 'Set aircon to 25°C and run a fan with it', '25°C'],
      [
        'power-backup',
        'Charge power banks and keep a flashlight ready for brownouts',
        'Weekly',
      ],
      ['power-unplug', "Unplug appliances you aren't using", 'Daily'],
      [
        'money-fund',
        'If you can, set aside a small fund for water, food and medicine',
        'Monthly',
      ],
    ],
  },
  {
    id: 'fire',
    title: 'Sunog',
    items: [
      [
        'fire-burn',
        "Don't burn trash or dry grass. It spreads fast and is illegal (RA 9003)",
        'Always',
      ],
      [
        'fire-wiring',
        'Avoid octopus connections and check old wiring',
        '1 hour',
      ],
      [
        'fire-plan',
        'Agree on an exit plan and a meeting place with your household',
        '15 min',
      ],
    ],
  },
]

// Rows: [name, number as shown, tel: link, small note?]. The comma in a tel: link pauses, then dials the local.
export const HOTLINES: [string, string, string, string?][] = [
  ['National emergency', '911', 'tel:911'],
  ['Philippine Red Cross', '143', 'tel:143'],
  [
    'NDRRMC Operations Center',
    '(02) 8911-5061 to 65',
    'tel:+63289115061,100',
    'local 100',
  ],
  ['DOH Health Emergency', '1555', 'tel:1555'],
]

// The government's directory of agency hotlines.
export const EHOTLINES_URL = 'https://ehotlines.e.gov.ph/'

export const FAQ: [string, string][] = [
  [
    'What is El Niño?',
    'El Niño happens when the Pacific Ocean near the equator gets warmer than usual. That shifts rain patterns around the world. For the Philippines, it usually means less rain, hotter days and longer dry stretches.',
  ],
  [
    'Is this the same as a typhoon?',
    'No. Typhoon prep is about wind and floods. El Niño prep is about water, heat, food prices and fire. PAGASA notes that typhoons can still form and bring heavy rain during El Niño, so keep your typhoon basics too.',
  ],
  [
    'How long will it last?',
    'PAGASA expects El Niño to continue until the first half of 2027, with a possible peak before the end of 2026.',
  ],
  [
    'What is the difference between dry condition, dry spell and drought?',
    'These are PAGASA terms. A dry spell is below-normal rain for 3 months in a row (or way below-normal for 2). A drought is below-normal rain for 5 months in a row (or way below-normal for 3). A dry condition is below-normal rain for 2 months in a row, an earlier stage.',
  ],
  [
    'Where does this information come from?',
    "Province statuses come from PAGASA's monthly El Niño advisory. The checklist follows common public-health and disaster-preparedness advice. Every source is linked at the bottom of the page.",
  ],
  [
    "Why can't I just wait for the government?",
    "You should still follow your LGU's advisories. But help can be slow or uneven, so the safest plan is to prepare your own household, then help your neighbors. Tayo-tayo na lang.",
  ],
]

// The staircase statement for each level: [what PAGASA expects, when, verdict].
export const STATEMENT: Record<LevelKey, [string, string, string]> = {
  drought: [
    'drought or a dry spell',
    'by the end of October.',
    'Highest risk. Start now.',
  ],
  dry: ['dry conditions', 'this October.', 'Elevated risk. Prepare.'],
  below: ['less rain than usual', 'this October.', 'Watch closely.'],
  near: ['near-normal rain,', 'but El Niño is not done.', 'Stay ready.'],
}

// The receipt. Rows: [what to do, how long].
export const TIMELINE: { when: string; rows: [string, string][] }[] = [
  {
    when: 'This week',
    rows: [
      ['Store 3 days of drinking water', '1 hour'],
      ['Cover every container', '10 min'],
      ['Save the hotlines below', '2 min'],
    ],
  },
  {
    when: 'Before November',
    rows: [
      ['Fix leaks at home', '1 weekend'],
      ['Ask about drought-tolerant seeds', '1 visit'],
      ['Agree on a family plan', '15 min'],
    ],
  },
  {
    when: 'Peak, before the end of 2026',
    rows: [
      ['Check the heat index', 'Daily'],
      ['Check on lolo and lola', 'Daily'],
    ],
  },
  { when: 'Until mid-2027', rows: [['Keep the habits going', '6+ months']] },
]

// What's next. Edit freely: rows are [when, title, one line].
export type RoadmapWhen = 'Next' | 'Later' | 'Maybe'
export const ROADMAP: [RoadmapWhen, string, string][] = [
  [
    'Next',
    'Local emergency contacts',
    'Your province and city DRRMO, hospitals and utilities, from official government pages.',
  ],
  [
    'Next',
    'Works offline',
    'Open the checklist and hotlines even with no signal or no load.',
  ],
  [
    'Next',
    'Printable checklist',
    'One page for the ref door or the barangay bulletin board.',
  ],
  [
    'Later',
    'Tagalog, Cebuano, Ilocano',
    'The whole guide in more languages, not just the headings.',
  ],
  [
    'Later',
    'Heat index alerts',
    "Today's PAGASA heat index for your province, with what to do.",
  ],
  [
    'Maybe',
    'Water interruption schedule',
    "Links to your water utility's advisories by province.",
  ],
  [
    'Maybe',
    'Province-level detail',
    'Go past region-level once PAGASA data allows it.',
  ],
]

// Where "Suggest a feature" goes. ImprovMX forwards ideas@ to lea's inbox, so their own address stays hidden.
export const SUGGEST_URL =
  'mailto:ideas@elninoready.org?subject=' +
  encodeURIComponent('El Niño Ready: feature idea')

// lea's calendar, as shown in What's next.
export const SCHEDULE: [string, string][] = [
  ['November', 'Thailand. Updates may be slow.'],
  ['December', 'BTS. Updates may be very slow.'],
  ['January', 'Back to shipping.'],
]

// The chilimansi ask, shown in the popup and on the chilimansi page.
export const CHILI_PITCH =
  "El Niño Ready is a personal project, built to help fellow Filipinos get ready. It's free and it stays free. If it helped you or really you just want to make my day, you can buy me a chilimansi pancit canton. Totally optional."

// Chilimansi packs bought so far. Not counted automatically yet.
export const CANTON_COUNT = 0
