export type SportCategory = "field" | "court" | "water" | "individual";

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
};

/**
 * Sports page data for Lakshya 5.0.
 * Images are served locally from frontend/public/images/sports/.
 * In Vite, files inside public/ are referenced from the site root,
 * so use paths such as /images/sports/cricket.webp (not /public/images/...).
 */
export const SPORTS: Sport[] = [
  {
    id: "cricket",
    number: "01",
    name: "Cricket",
    venue: "Outdoor",
    category: "field",
    categoryLabel: "FIELD SPORT",
    format: "Team competition",
    description:
      "Read the game, own the moment, and make every delivery count. Check back for official match fixtures and competition details.",
    image: "/images/sports/cricket.webp",
    imagePosition: "center 48%",
  },
  {
    id: "football",
    number: "02",
    name: "Football",
    venue: "Outdoor",
    category: "field",
    categoryLabel: "FIELD SPORT",
    format: "Team competition",
    description:
      "Pace, pressure, and the search for the winning goal. Official fixtures and tournament information will be published here.",
    image: "/images/sports/football.webp",
    imagePosition: "center 52%",
  },
  {
    id: "hockey",
    number: "03",
    name: "Hockey",
    venue: "Outdoor",
    category: "field",
    categoryLabel: "FIELD SPORT",
    format: "Team competition",
    description:
      "Quick transitions, sharp passing, and a relentless attack. Return here for confirmed match and venue information.",
    image: "/images/sports/hockey.webp",
    imagePosition: "center center",
  },
  {
    id: "volleyball",
    number: "04",
    name: "Volleyball",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Men's + Women's",
    description:
      "Power at the net and teamwork in every rally. Men's and women's competitions are represented separately in the category label.",
    image: "/images/sports/volleyball.webp",
    imagePosition: "center center",
  },
  {
    id: "basketball",
    number: "05",
    name: "Basketball",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Men's + Women's",
    description:
      "Fast breaks, fearless finishes, and the next big play. Follow this page for official competition updates.",
    image: "/images/sports/basketball.webp",
    imagePosition: "center center",
  },
  {
    id: "waterpolo",
    number: "06",
    name: "Waterpolo",
    venue: "Indoor",
    category: "water",
    categoryLabel: "AQUATICS",
    format: "Team competition",
    description:
      "A high-intensity contest where stamina, teamwork, and timing matter. Official event information will be added when available.",
    image: "/images/sports/waterpolo.webp",
    imagePosition: "center center",
  },
  {
    id: "aquatics",
    number: "07",
    name: "Aquatics",
    venue: "Indoor",
    category: "water",
    categoryLabel: "AQUATICS",
    format: "Individual + team events",
    description:
      "Speed, rhythm, and precision in the water. Check back for event categories, schedules, and pool-side updates.",
    image: "/images/sports/aquatics.webp",
    imagePosition: "center 48%",
  },
  {
    id: "athletics",
    number: "08",
    name: "Athletics",
    venue: "Outdoor",
    category: "individual",
    categoryLabel: "INDIVIDUAL SPORT",
    format: "Track + field events",
    description:
      "Every fraction, every stride, every finish line. Official event lists and schedules will be shown here once announced.",
    image: "/images/sports/athletics.webp",
    imagePosition: "center 45%",
  },
  {
    id: "badminton",
    number: "09",
    name: "Badminton",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Racket sport",
    description:
      "Explosive movement and split-second decisions. Official draws, match schedules, and venue details will be added here.",
    image: "/images/sports/badminton.webp",
    imagePosition: "center center",
  },
  {
    id: "squash",
    number: "10",
    name: "Squash",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Racket sport",
    description:
      "A compact court. Relentless movement. Tactical precision. Return for official match details and competition updates.",
    image: "/images/sports/racket-sport.webp",
    imagePosition: "center center",
  },
  {
    id: "tennis",
    number: "11",
    name: "Tennis",
    venue: "Outdoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Racket sport",
    description:
      "Serve with intent. Play every point. Find official tournament and match information here when released.",
    image: "/images/sports/racket-sport.webp",
    imagePosition: "center 42%",
  },
  {
    id: "table-tennis",
    number: "12",
    name: "Table Tennis",
    venue: "Indoor",
    category: "court",
    categoryLabel: "COURT SPORT",
    format: "Racket sport",
    description:
      "Quick hands, sharp angles, and relentless focus. Official draws and scheduling information will be listed here.",
    image: "/images/sports/table-tennis.webp",
    imagePosition: "center center",
  },
  {
    id: "chess",
    number: "13",
    name: "Chess",
    venue: "Indoor",
    category: "individual",
    categoryLabel: "STRATEGY",
    format: "Individual competition",
    description:
      "Think ahead, stay composed, and find the decisive move. Tournament format and schedule details will be announced here.",
    image: "/images/sports/chess.webp",
    imagePosition: "center center",
  },
];

export const CATEGORY_FILTERS: { label: string; value: "all" | SportCategory }[] = [
  { label: "All sports", value: "all" },
  { label: "Field", value: "field" },
  { label: "Court", value: "court" },
  { label: "Aquatics", value: "water" },
  { label: "Individual", value: "individual" },
];
