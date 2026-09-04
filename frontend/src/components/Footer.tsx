import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { ArrowUp, MapPin, Phone, Trophy, Users } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative z-30 bg-[#070504] text-[#d6c7b2] overflow-hidden pt-10 pb-6 border-t-2 border-[#472513] select-none">
            {/* =========================================================================
                SOLID OPAQUE BACKDROP & WARM SALOON AMBIANCE (No Grid Bleed-Through)
            ========================================================================= */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-[#070504]">
                {/* Saloon Gas-Lamp Warmth overlay on solid base */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse at 50% 0%, rgba(184, 84, 31, 0.22) 0%, rgba(7, 5, 4, 1) 75%)",
                    }}
                />

                {/* Subtle Horizontal Texture Lines */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 24px,
                            rgba(212, 155, 85, 0.6) 24px,
                            rgba(212, 155, 85, 0.6) 25px
                        )`,
                    }}
                />

                {/* Centered Frontier Watermark */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden select-none">
                    <span
                        className="font-serif font-black text-6xl sm:text-8xl md:text-9xl leading-none uppercase tracking-[0.2em] text-[#d49b55]/[0.05]"
                        style={{
                            fontFamily: "'Playfair Display', 'Georgia', serif",
                        }}
                    >
                        LAKSHYA
                    </span>
                    <span className="font-serif font-bold text-[9px] sm:text-xs uppercase tracking-[0.55em] text-[#c7834a]/[0.12] -mt-1 sm:-mt-3">
                        CHASE WHAT LIES BEYOND
                    </span>
                </div>
            </div>

            {/* =========================================================================
                MAIN LAKSHYA 5.0 VINTAGE NOTICE BOARD CONTAINER
            ========================================================================= */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Decorative Border */}
                <div className="flex justify-between items-center max-w-md mx-auto px-6 mb-1 text-[#8a4a22]/70 text-xs">
                    <span>═════════════</span>
                    <span className="text-[10px] tracking-[0.25em] font-serif text-[#d49b55] font-bold">★ LAKSHYA 2026 ★</span>
                    <span>═════════════</span>
                </div>

                {/* Header Badge & Title */}
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-0.5 border-y border-[#8a5229]/70 bg-[#160d07] shadow-sm">
                        <span className="text-[10px] sm:text-[11px] font-serif font-bold tracking-[0.28em] text-[#e0b070] uppercase">
                            IIT INDORE · 5TH EDITION
                        </span>
                    </div>

                    <h2
                        className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-[0.18em] text-[#f4e6d4] uppercase"
                        style={{
                            fontFamily: "'Playfair Display', 'Georgia', serif",
                            textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 25px rgba(212,155,85,0.25)",
                        }}
                    >
                        LAKSHYA 5.0
                    </h2>

                    <p className="mt-0.5 text-[11px] sm:text-xs font-serif italic tracking-[0.22em] text-[#c7834a]">
                        — CHASE WHAT LIES BEYOND —
                    </p>
                </div>

                {/* The Frontier Ledger Board Container */}
                <div className="relative rounded-xs border-2 border-[#54301a] bg-gradient-to-b from-[#160e09] via-[#0f0906] to-[#080503] p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.95),inset_0_0_25px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(212,155,85,0.2)] mb-6">
                    {/* Antique Brass Corner Plates */}
                    <span className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#c98342]" />
                    <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#c98342]" />
                    <span className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#c98342]" />
                    <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#c98342]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#382012]">
                        {/* Column 1: About Lakshya */}
                        <div className="flex flex-col justify-between pt-4 md:pt-0">
                            <div>
                                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-[#301b10]">
                                    <Trophy className="w-3.5 h-3.5 text-[#c7834a]" />
                                    <span className="font-serif text-[11px] font-bold tracking-[0.2em] text-[#e0b070] uppercase">
                                        ABOUT LAKSHYA
                                    </span>
                                </div>
                                <p className="font-serif text-xs leading-relaxed text-[#b5a38f] mb-4">
                                    Central India's premier annual collegiate sports festival hosted by IIT Indore. Bringing together elite athletes from across the nation to celebrate grit, glory, and sportsmanship.
                                </p>
                            </div>

                            <div className="pt-3 border-t border-[#2e190e] text-[11px] text-[#91765f] flex items-start gap-2">
                                <MapPin className="w-3.5 h-3.5 text-[#c7834a] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-[#e0b070] font-serif font-bold text-[10px] tracking-wider uppercase">
                                        IIT INDORE
                                    </div>
                                    <div className="text-[10px] leading-tight text-[#8c7764]">
                                        Simrol, Khandwa Rd, Indore, MP — 453552
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Event Contacts (Vertically Centered & Balanced) */}
                        <div className="flex flex-col justify-center pt-4 md:pt-0 md:pl-8 my-auto">
                            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-[#301b10]">
                                <Phone className="w-3.5 h-3.5 text-[#c7834a]" />
                                <span className="font-serif text-[11px] font-bold tracking-[0.2em] text-[#e0b070] uppercase">
                                    CONTACT FOR EVENTS
                                </span>
                            </div>

                            <div className="space-y-3">
                                {/* Samarth Sharma */}
                                <div className="p-2.5 rounded-xs bg-[#1a0f08] border border-[#3d2212] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] hover:border-[#8a4e22] transition-colors">
                                    <div className="flex items-baseline justify-between gap-2">
                                        <div className="font-serif font-bold text-xs text-[#f0e2cf] tracking-wide">
                                            Samarth Sharma
                                        </div>
                                        <div className="text-[9px] font-serif text-[#c7834a] uppercase tracking-wider font-semibold">
                                            Public Relations
                                        </div>
                                    </div>
                                    <a
                                        href="tel:+918928088784"
                                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#a38b74] hover:text-[#e0b070] transition-colors mt-0.5"
                                    >
                                        <Phone className="w-2.5 h-2.5 text-[#c7834a]" />
                                        <span>+91 8928088784</span>
                                    </a>
                                </div>

                                {/* Sajal Jain */}
                                <div className="p-2.5 rounded-xs bg-[#1a0f08] border border-[#3d2212] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] hover:border-[#8a4e22] transition-colors">
                                    <div className="flex items-baseline justify-between gap-2">
                                        <div className="font-serif font-bold text-xs text-[#f0e2cf] tracking-wide">
                                            Sajal Jain
                                        </div>
                                        <div className="text-[9px] font-serif text-[#c7834a] uppercase tracking-wider font-semibold">
                                            Accommodation
                                        </div>
                                    </div>
                                    <a
                                        href="tel:+919140222151"
                                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#a38b74] hover:text-[#e0b070] transition-colors mt-0.5"
                                    >
                                        <Phone className="w-2.5 h-2.5 text-[#c7834a]" />
                                        <span>+91 9140222151</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Fest Leadership & Social Connect */}
                        <div className="flex flex-col justify-between pt-4 md:pt-0 md:pl-8">
                            <div>
                                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-[#301b10]">
                                    <Users className="w-3.5 h-3.5 text-[#c7834a]" />
                                    <span className="font-serif text-[11px] font-bold tracking-[0.2em] text-[#e0b070] uppercase">
                                        LEADERSHIP
                                    </span>
                                </div>

                                <div className="space-y-3 mb-4">
                                    {/* Jagrit */}
                                    <div className="p-2.5 rounded-xs bg-[#1a0f08] border border-[#3d2212] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] hover:border-[#8a4e22] transition-colors">
                                        <div className="flex items-baseline justify-between gap-2">
                                            <span className="font-serif font-bold text-xs text-[#f0e2cf] tracking-wide">
                                                Jagrit
                                            </span>
                                            <span className="text-[9px] font-serif text-[#c7834a] uppercase tracking-wider font-semibold">
                                                Overall Coordinator
                                            </span>
                                        </div>
                                        <a
                                            href="tel:+916280259964"
                                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#a38b74] hover:text-[#e0b070] transition-colors mt-0.5"
                                        >
                                            <Phone className="w-2.5 h-2.5 text-[#c7834a]" />
                                            <span>+91 6280259964</span>
                                        </a>
                                    </div>

                                    {/* Nishant Bhalani */}
                                    <div className="p-2.5 rounded-xs bg-[#1a0f08] border border-[#3d2212] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] hover:border-[#8a4e22] transition-colors">
                                        <div className="flex items-baseline justify-between gap-2">
                                            <span className="font-serif font-bold text-xs text-[#f0e2cf] tracking-wide">
                                                Nishant Bhalani
                                            </span>
                                            <span className="text-[9px] font-serif text-[#c7834a] uppercase tracking-wider font-semibold">
                                                Events Manager
                                            </span>
                                        </div>
                                        <a
                                            href="tel:+919586353536"
                                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#a38b74] hover:text-[#e0b070] transition-colors mt-0.5"
                                        >
                                            <Phone className="w-2.5 h-2.5 text-[#c7834a]" />
                                            <span>+91 9586353536</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Stamped Social Buttons */}
                            <div className="flex items-center gap-2 pt-2 border-t border-[#2e190e]">
                                <a
                                    href="https://www.instagram.com/lakshya_iiti/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-[#54301a] bg-[#160d07] hover:bg-[#2b160a] hover:border-[#a35d2d] text-[#d6c7b2] hover:text-[#f2e2cb] text-[10px] font-serif font-bold tracking-wider transition-all duration-200 shadow-sm"
                                >
                                    <FaInstagram className="w-3 h-3 text-[#c7834a]" />
                                    <span>INSTAGRAM</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/lakshyafest-iit-indore/?originalSubdomain=in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-[#54301a] bg-[#160d07] hover:bg-[#2b160a] hover:border-[#a35d2d] text-[#d6c7b2] hover:text-[#f2e2cb] text-[10px] font-serif font-bold tracking-wider transition-all duration-200 shadow-sm"
                                >
                                    <FaLinkedin className="w-3 h-3 text-[#c7834a]" />
                                    <span>LINKEDIN</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================================================================
                    BOTTOM ENGRAVING BAR
                ========================================================================= */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] font-serif text-[#78614e] tracking-wider uppercase">
                    <div>
                        &copy; 2026-2027 LAKSHYA · IIT INDORE · ALL RIGHTS RESERVED
                    </div>

                    <div className="flex items-center gap-2 text-[10px] italic text-[#a3683b] tracking-[0.18em]">
                        <span>◆</span>
                        <span>CHASE WHAT LIES BEYOND</span>
                        <span>◆</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1 px-3 py-1 border border-[#54301a] bg-[#160d07] hover:bg-[#2b160a] hover:border-[#a35d2d] text-[#d49b55] text-[10px] tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                    >
                        <span>TOP</span>
                        <ArrowUp className="w-2.5 h-2.5 text-[#c7834a]" />
                    </button>
                </div>
            </div>
        </footer>
    );
}