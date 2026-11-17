export type SportCategory = "field" | "court" | "water" | "individual";

export type FeeItem = {
  label: string;
  amount: string;
};

export type Sport = {
  id: string;
  number: string;
  name: string;
  venue: string;
  category: SportCategory;
  categoryLabel: string;
  format: string;
  description: string;
  image: string;
  imagePosition?: string;
  accent?: string;
  /** Registration fee / price (e.g. '₹5,500 / Team', 'Singles: ₹500–₹600') */
  registrationFee: string;
  /** Prize pool / bounty (e.g. '₹40,000', '₹50,000') */
  prizePool: string;
  /** Link to downloadable/viewable official rule book (e.g. Google Drive link or PDF) */
  rulebookUrl: string;
  /** Detailed breakdown of registration fees by category/event */
  feeBreakdown?: FeeItem[];
};

/**
 * Official Accommodation Packages from Registration Portal
 */
export const ACCOMMODATION_FEES = [
  { days: "1 Day", amount: "₹1,100" },
  { days: "2 Days", amount: "₹1,600" },
  { days: "3 Days", amount: "₹2,100" },
  { days: "4 Days", amount: "₹2,600" },
  { days: "5 Days", amount: "₹3,100" },
];

/**
 * Sports page data for Lakshya 5.0.
 * Images are served locally from frontend/public/images/sports/.
 */
export const SPORTS: Sport[] = [
  {
    id: "cricket",
    number: "01",
    name: "Cricket",
    venue: "Outdoor",
    category: "field",
    categoryLabel: "FIELD SPORT",
    format: "16 Players / Squad (Men's)",
    description:
      "Read the game, own the moment, and make every delivery count. Check back for official match fixtures and competition details.",
    image: "/images/sports/cricket.jpeg",
    imagePosition: "center 48%",
    registrationFee: "₹5,500 / Team",
    prizePool: "₹40,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Squad (16 Players)", amount: "₹5,500 / Team" },
    ],
  },
  {
    id: "football",
    number: "02",
    name: "Football",
    venue: "Outdoor",
    category: "field",
    categoryLabel: "FIELD SPORT",
    format: "16 Players / Squad (Men's)",
    description:
      "Pace, pressure, and the search for the winning goal. Official fixtures and tournament information will be published here.",
    image: "/images/sports/football.jpeg",
    imagePosition: "center 52%",
    registrationFee: "₹5,500 / Team",
    prizePool: "₹40,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Squad (16 Players)", amount: "₹5,500 / Team" },
    ],
  },
  {
    id: "hockey",
    number: "03",
    name: "Hockey",
    venue: "Outdoor",
    category: "field",
    categoryLabel: "FIELD SPORT",
    format: "16 Players / Squad (Men's)",
    description:
      "Quick transitions, sharp passing, and a relentless attack. Return here for confirmed match and venue information.",
    image: "/images/sports/hockey.jpeg",
    imagePosition: "center center",
    registrationFee: "₹4,000 / Team",
    prizePool: "₹30,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Squad (16 Players)", amount: "₹4,000 / Team" },
    ],
  },
  {
    id: "volleyball",
    number: "04",
    name: "Volleyball",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "12 Players / Team",
    description:
      "Power at the net and teamwork in every rally. Men's and women's competitions are represented separately in the category label.",
    image: "/images/sports/vollyball.jpeg",
    imagePosition: "center center",
    registrationFee: "₹4,000 (M) · ₹3,500 (W)",
    prizePool: "₹50,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Team (12 Players)", amount: "₹4,000 / Team" },
      { label: "Women's Team (12 Players)", amount: "₹3,500 / Team" },
    ],
  },
  {
    id: "basketball",
    number: "05",
    name: "Basketball",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "12 Players / Team",
    description:
      "Fast breaks, fearless finishes, and the next big play. Follow this page for official competition updates.",
    image: "/images/sports/basketball.jpeg",
    imagePosition: "center center",
    registrationFee: "₹4,000 (M) · ₹3,500 (W)",
    prizePool: "₹50,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Team (12 Players)", amount: "₹4,000 / Team" },
      { label: "Women's Team (12 Players)", amount: "₹3,500 / Team" },
    ],
  },
  {
    id: "waterpolo",
    number: "06",
    name: "Waterpolo",
    venue: "Indoor",
    category: "water",
    categoryLabel: "AQUATICS",
    format: "13 Players / Team (Men's)",
    description:
      "A high-intensity contest where stamina, teamwork, and timing matter. Official event information will be added when available.",
    image: "/images/sports/waterpolo.webp",
    imagePosition: "center center",
    registrationFee: "₹3,500 / Team",
    prizePool: "₹15,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Team (13 Players)", amount: "₹3,500 / Team" },
    ],
  },
  {
    id: "aquatics",
    number: "07",
    name: "Swimming (Aquatics)",
    venue: "Indoor",
    category: "water",
    categoryLabel: "AQUATICS",
    format: "Individual + Relay Events",
    description:
      "Speed, rhythm, and precision in the water. Check back for event categories, schedules, and pool-side updates.",
    image: "/images/sports/aquatics.jpeg",
    imagePosition: "center 48%",
    registrationFee: "₹250–₹900 (Indiv) · ₹500–₹600 (Relay)",
    prizePool: "₹44,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Individual (1 Event)", amount: "Men ₹300 · Women ₹250" },
      { label: "Individual (2 Events)", amount: "Men ₹550 · Women ₹450" },
      { label: "Individual (3 Events)", amount: "Men ₹700 · Women ₹650" },
      { label: "Individual (4 Events)", amount: "Men ₹900 · Women ₹800" },
      { label: "4x50m Relay", amount: "Men ₹600 · Women ₹500" },
      { label: "4x50m Mixed Relay", amount: "₹500 / Team" },
    ],
  },
  {
    id: "athletics",
    number: "08",
    name: "Athletics",
    venue: "Outdoor",
    category: "individual",
    categoryLabel: "INDIVIDUAL SPORT",
    format: "Track + Field + Relays",
    description:
      "Every fraction, every stride, every finish line. Official event lists and schedules will be shown here once announced.",
    image: "/images/sports/atheletics.jpeg",
    imagePosition: "center 45%",
    registrationFee: "₹250–₹700 (Indiv) · ₹500–₹600 (Relay)",
    prizePool: "₹62,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Individual (1 Event)", amount: "Men ₹300 · Women ₹250" },
      { label: "Individual (2 Events)", amount: "Men ₹550 · Women ₹450" },
      { label: "Individual (3 Events)", amount: "Men ₹700 · Women ₹650" },
      { label: "4x100m / 4x400m Relay", amount: "₹600 / Team" },
      { label: "4x100m Mixed Relay", amount: "₹500 / Team" },
    ],
  },
  {
    id: "badminton",
    number: "09",
    name: "Badminton",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Singles, Doubles & Mixed Doubles",
    description:
      "Explosive movement and split-second decisions. Official draws, match schedules, and venue details will be added here.",
    image: "/images/sports/badmiton.jpeg",
    imagePosition: "center center",
    registrationFee: "Singles: ₹500–₹600 · Doubles: ₹900–₹1,000",
    prizePool: "₹27,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Singles", amount: "₹600" },
      { label: "Women's Singles", amount: "₹500" },
      { label: "Mixed Doubles", amount: "₹900" },
      { label: "Men's Doubles", amount: "₹1,000" },
    ],
  },
  {
    id: "squash",
    number: "10",
    name: "Squash",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Men's & Women's Singles",
    description:
      "A compact court. Relentless movement. Tactical precision. Return for official match details and competition updates.",
    image: "/images/sports/squash.jpeg",
    imagePosition: "center center",
    registrationFee: "₹600 (Men) · ₹500 (Women)",
    prizePool: "₹15,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Singles", amount: "₹600" },
      { label: "Women's Singles", amount: "₹500" },
    ],
  },
  {
    id: "tennis",
    number: "11",
    name: "Lawn Tennis",
    venue: "Outdoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Singles & Doubles",
    description:
      "Serve with intent. Play every point. Find official tournament and match information here when released.",
    image: "/images/sports/tennis.jpeg",
    imagePosition: "center 42%",
    registrationFee: "Singles: ₹500–₹600 · Doubles: ₹1,000",
    prizePool: "₹20,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Singles", amount: "₹600" },
      { label: "Women's Singles", amount: "₹500" },
      { label: "Men's Doubles", amount: "₹1,000" },
    ],
  },
  {
    id: "table-tennis",
    number: "12",
    name: "Table Tennis",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Singles & Doubles",
    description:
      "Quick hands, sharp angles, and relentless focus. Official draws and scheduling information will be listed here.",
    image: "/images/sports/tabletennis.jpeg",
    imagePosition: "center center",
    registrationFee: "Singles: ₹500–₹600 · Doubles: ₹1,000",
    prizePool: "₹20,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Singles", amount: "₹600" },
      { label: "Women's Singles", amount: "₹500" },
      { label: "Men's Doubles", amount: "₹1,000" },
    ],
  },
  {
    id: "chess",
    number: "13",
    name: "Chess",
    venue: "Indoor",
    category: "individual",
    categoryLabel: "STRATEGY",
    format: "10+5 Rapid Open",
    description:
      "Think ahead, stay composed, and find the decisive move. Tournament format and schedule details will be announced here.",
    image: "/images/sports/chess.webp",
    imagePosition: "center center",
    registrationFee: "₹300 / Entry",
    prizePool: "₹12,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "10+5 Rapid Open Entry", amount: "₹300" },
    ],
  },
  {
    id: "powerlifting",
    number: "14",
    name: "Powerlifting",
    venue: "Indoor",
    category: "individual",
    categoryLabel: "STRENGTH",
    format: "Weight Categories (Up to 72kg, 81kg, Above 81kg)",
    description:
      "Push your limits, showcase raw strength, and rise to the challenge. Competition rules, weight categories, and schedule details will be announced here.",
    image: "/images/sports/bodybuilding.jpeg",
    imagePosition: "center center",
    registrationFee: "₹700 / Entry",
    prizePool: "₹25,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Category (All Weights)", amount: "₹700" },
    ],
  },
  {
    id: "weightlifting",
    number: "15",
    name: "Weightlifting",
    venue: "Indoor",
    category: "individual",
    categoryLabel: "STRENGTH",
    format: "Weight Categories (Up to 61kg, 67kg, 73kg, 81kg, Above 81kg)",
    description:
      "Lift with power, master your technique, and push beyond your limits. Competition rules, weight categories, and schedule details will be announced here.",
    image: "/images/sports/bodybuilding.jpeg",
    imagePosition: "center center",
    registrationFee: "₹700 / Entry",
    prizePool: "₹25,000",
    rulebookUrl: "#",
    feeBreakdown: [
      { label: "Men's Category (All Weights)", amount: "₹700" },
    ],
  },
];

export const CATEGORY_FILTERS: { label: string; value: "all" | SportCategory }[] = [
  { label: "All sports", value: "all" },
  { label: "Field", value: "field" },
  { label: "Court", value: "court" },
  { label: "Aquatics", value: "water" },
  { label: "Individual", value: "individual" },
];
