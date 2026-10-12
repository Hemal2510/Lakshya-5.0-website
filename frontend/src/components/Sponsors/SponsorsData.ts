export interface SponsorItem {
    id: number;
    name: string;
    desc: string;
    src: string;
    tier: "title" | "category" | "associate";
    initials?: string;
    note?: string;
}

export const PAST_SPONSORS: SponsorItem[] = [
    {
        id: 16,
        name: "Plum BodyLovin'",
        desc: "Title Sponsor",
        src: "/images/sponsors/sponsor_title.jpg",
        tier: "title",
        initials: "PLUM",
        note: "Lakshya Grand Title Partner"
    },
    {
        id: 14,
        name: "ICICI Bank",
        desc: "Banking Partner",
        src: "/images/sponsors/sponsor_14.jpg",
        tier: "category",
        initials: "ICICI",
        note: "Official Banking Partner"
    },
    {
        id: 10,
        name: "Pepero",
        desc: "Snacks Partner",
        src: "/images/sponsors/sponsor_10.jpg",
        tier: "category",
        initials: "PEPERO",
        note: "Official Snacks Partner"
    },
    {
        id: 9,
        name: "RED BULL",
        desc: "Energy Drink",
        src: "/images/sponsors/sponsor_9.jpg",
        tier: "category",
        initials: "ENERZAL",
        note: "Official Energy Partner"
    },
    {
        id: 5,
        name: "Campa Sure",
        desc: "Hydration Partner",
        src: "/images/sponsors/sponsor_5.jpg",
        tier: "category",
        initials: "CAMPA",
        note: "Official Hydration Partner"
    },
    {
        id: 4,
        name: "Doon Merchandise",
        desc: "Merchandise Partner",
        src: "/images/sponsors/sponsor_4.jpg",
        tier: "category",
        initials: "DOON",
        note: "Official Apparel & Merch"
    },
    {
        id: 12,
        name: "Döner & Gyros",
        desc: "Food & Bev",
        src: "/images/sponsors/sponsor_12.jpg",
        tier: "category",
        initials: "D&G",
        note: "Official Food Partner"
    },
    {
        id: 13,
        name: "Döner & Gyros",
        desc: "Food & Bev",
        src: "/images/sponsors/sponsor_13.jpg",
        tier: "category",
        initials: "D&G",
        note: "Official Beverage Partner"
    },
    {
        id: 3,
        name: "ConfirmTkt",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_3.jpg",
        tier: "associate",
        initials: "CTKT"
    },
    {
        id: 6,
        name: "Beanzy",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_6.jpg",
        tier: "associate",
        initials: "BNZY"
    },
    {
        id: 7,
        name: "Circuit One",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_7.jpg",
        tier: "associate",
        initials: "C1"
    },
    {
        id: 8,
        name: "Elindore",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_8.jpg",
        tier: "associate",
        initials: "ELIN"
    },
    {
        id: 1,
        name: "Frontier Ally I",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_1.png",
        tier: "associate",
        initials: "ALLY"
    },
    {
        id: 2,
        name: "Frontier Ally II",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_2.png",
        tier: "associate",
        initials: "ALLY"
    },
    {
        id: 11,
        name: "Frontier Ally III",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_11.jpg",
        tier: "associate",
        initials: "ALLY"
    },
    {
        id: 15,
        name: "Frontier Ally IV",
        desc: "Associate Partner",
        src: "/images/sponsors/sponsor_15.jpg",
        tier: "associate",
        initials: "ALLY"
    }
];
