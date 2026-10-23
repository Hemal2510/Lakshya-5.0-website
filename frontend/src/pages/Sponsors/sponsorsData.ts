export type SponsorLogoKey =
  | 'adidas'
  | 'redbull'
  | 'sbi'
  | 'bisleri'
  | 'decathlon'
  | 'puma'
  | 'titan'
  | 'livguard'
  | 'nivia'
  | 'fastup'
  | 'swiggy'
  | 'jio'
  | 'bookmyshow'
  | 'campus';

export type PartnerGroupName = 'gold' | 'silver' | 'associate';

export interface Sponsor {
  id: string;
  name: string;
  logoKey: SponsorLogoKey;
  role: string;
  url: string;
}

export interface SponsorGroup {
  title: string;
  className: PartnerGroupName;
  sponsors: Sponsor[];
}

export interface TitlePartner {
  name: string;
  description: string;
  url: string;
}

export const sponsorGroups: SponsorGroup[] = [
  {
    title: 'Gold Partners',
    className: 'gold',
    sponsors: [
      { id: 'adidas', name: 'adidas', logoKey: 'adidas', role: 'Sportswear Partner', url: 'https://www.adidas.co.in/' },
      { id: 'redbull', name: 'Red Bull', logoKey: 'redbull', role: 'Energy Partner', url: 'https://www.redbull.com/' },
      { id: 'sbi', name: 'SBI', logoKey: 'sbi', role: 'Banking Partner', url: 'https://sbi.co.in/' },
      { id: 'bisleri', name: 'Bisleri', logoKey: 'bisleri', role: 'Hydration Partner', url: 'https://www.bisleri.com/' },
    ],
  },
  {
    title: 'Silver Partners',
    className: 'silver',
    sponsors: [
      { id: 'decathlon', name: 'DECATHLON', logoKey: 'decathlon', role: 'Equipment Partner', url: 'https://www.decathlon.in/' },
      { id: 'puma', name: 'PUMA', logoKey: 'puma', role: 'Apparel Partner', url: 'https://in.puma.com/' },
      { id: 'titan', name: 'TITAN', logoKey: 'titan', role: 'Timekeeping Partner', url: 'https://www.titan.co.in/' },
      { id: 'livguard', name: 'Livguard', logoKey: 'livguard', role: 'Power Partner', url: 'https://www.livguard.com/' },
    ],
  },
  {
    title: 'Associate Partners',
    className: 'associate',
    sponsors: [
      { id: 'nivia', name: 'NIVIA', logoKey: 'nivia', role: 'Footwear Partner', url: 'https://www.niviasports.com/' },
      { id: 'fastup', name: 'Fast&Up', logoKey: 'fastup', role: 'Nutrition Partner', url: 'https://www.fastandup.in/' },
      { id: 'swiggy', name: 'SWIGGY', logoKey: 'swiggy', role: 'Food Partner', url: 'https://www.swiggy.com/' },
      { id: 'jio', name: 'Jio', logoKey: 'jio', role: 'Connectivity Partner', url: 'https://www.jio.com/' },
      { id: 'bookmyshow', name: 'bookmyshow', logoKey: 'bookmyshow', role: 'Ticketing Partner', url: 'https://in.bookmyshow.com/' },
      { id: 'campus', name: 'campus', logoKey: 'campus', role: 'Media Partner', url: 'https://www.campusshoes.com/' },
    ],
  },
];

export const titlePartner: TitlePartner = {
  name: 'TATA',
  description: 'Driving a stronger, healthier and more connected tomorrow.',
  url: 'https://www.tata.com/',
};
