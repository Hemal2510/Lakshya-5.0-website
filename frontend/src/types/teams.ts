export interface SocialLink {
    instagram?: string;
    linkedin?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    photoUrl: string;
    socials?: SocialLink;
}