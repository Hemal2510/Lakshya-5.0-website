import type { CSSProperties } from 'react';
import './sponsors.css';

import { sponsorGroups, titlePartner } from './sponsorsData';
import type { Sponsor, SponsorGroup } from './sponsorsData';

import heroAthlete from './assets/hero-athlete-bg.jpg';
import titlePartnerTrack from './assets/title-partner-bg.jpg';
import ctaSprinter from './assets/cta-sprinter-bg.jpg';

type SponsorPageStyle = CSSProperties & {
  '--hero-image'?: string;
  '--title-track-image'?: string;
  '--cta-image'?: string;
};

function SponsorWordmark({ sponsor }: { sponsor: Sponsor }) {
  switch (sponsor.logoKey) {
    case 'adidas':
      return (
        <span className="sponsor-wordmark wordmark-adidas" aria-label={sponsor.name}>
          <span className="adidas-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="adidas-name">adidas</span>
        </span>
      );
    case 'redbull':
      return (
        <span className="sponsor-wordmark wordmark-redbull" aria-label={sponsor.name}>
          <span className="redbull-mark" aria-hidden="true"><i /><b>★</b><i /></span>
          <span>Red Bull</span>
        </span>
      );
    case 'sbi':
      return (
        <span className="sponsor-wordmark wordmark-sbi" aria-label={sponsor.name}>
          <span className="sbi-mark" aria-hidden="true"><i /></span><span>SBI</span>
        </span>
      );
    case 'bisleri':
      return <span className="sponsor-wordmark wordmark-bisleri">Bisleri</span>;
    case 'decathlon':
      return <span className="sponsor-wordmark wordmark-decathlon"><span className="decathlon-mark">◉</span> DECATHLON</span>;
    case 'puma':
      return <span className="sponsor-wordmark wordmark-puma"><span className="puma-mark" aria-hidden="true">↗</span>PUMA</span>;
    case 'titan':
      return <span className="sponsor-wordmark wordmark-titan"><span className="titan-mark" aria-hidden="true">Ψ</span>TITAN</span>;
    case 'livguard':
      return <span className="sponsor-wordmark wordmark-livguard">Livguard</span>;
    case 'nivia':
      return <span className="sponsor-wordmark wordmark-nivia"><span className="nivia-mark" aria-hidden="true">◆</span>NIVIA</span>;
    case 'fastup':
      return <span className="sponsor-wordmark wordmark-fastup">Fast&amp;Up</span>;
    case 'swiggy':
      return <span className="sponsor-wordmark wordmark-swiggy"><span className="swiggy-mark" aria-hidden="true">S</span> SWIGGY</span>;
    case 'jio':
      return <span className="sponsor-wordmark wordmark-jio"><span>Jio</span></span>;
    case 'bookmyshow':
      return <span className="sponsor-wordmark wordmark-bookmyshow">book<span>my</span>show</span>;
    case 'campus':
      return <span className="sponsor-wordmark wordmark-campus">campus</span>;
    default:
      return <span className="sponsor-wordmark">{sponsor.name}</span>;
  }
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      className={`sponsor-card sponsor-card--${sponsor.logoKey}`}
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${sponsor.name} — ${sponsor.role}`}
    >
      <span className="sponsor-card__logo"><SponsorWordmark sponsor={sponsor} /></span>
      <span className="sponsor-card__role">{sponsor.role}</span>
    </a>
  );
}

function PartnerGroup({ group }: { group: SponsorGroup }) {
  const headingId = `${group.className}-partners-title`;

  return (
    <section
      className={`partner-group partner-group--${group.className}`}
      aria-labelledby={headingId}
    >
      <div className="section-heading">
        <h2 id={headingId}>{group.title}</h2>
        <span aria-hidden="true" />
      </div>
      <div className="partner-grid">
        {group.sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}

export default function SponsorsPage() {
  const heroStyle: SponsorPageStyle = {
    '--hero-image': `url(${heroAthlete})`,
  };
  const titlePartnerStyle: SponsorPageStyle = {
    '--title-track-image': `url(${titlePartnerTrack})`,
  };
  const ctaStyle: SponsorPageStyle = {
    '--cta-image': `url(${ctaSprinter})`,
  };

  return (
    <main className="sponsors-page">
      <section className="sponsors-hero" style={heroStyle}>
        <div className="sponsors-hero__inner">
          <p className="eyebrow">LAKSHYA 5.0 <span>/</span> SPONSORS</p>
          <h1>
            <span>GREATNESS</span>
            <em>NEVER MOVES</em>
            <span>ALONE.</span>
          </h1>
          <p className="sponsors-hero__copy">
            Every champion has a story.<br />
            Every great moment has people behind it.<br />
            To our partners — thank you for believing in<br className="desktop-break" />
            the power of sport and the spirit of Lakshya.
          </p>
          <a className="text-link" href="#partners">
            EXPLORE OUR PARTNERS <span aria-hidden="true">⟶</span>
          </a>
        </div>
        <span className="hero-light-streak hero-light-streak--one" aria-hidden="true" />
        <span className="hero-light-streak hero-light-streak--two" aria-hidden="true" />
      </section>

      <div className="sponsors-content" id="partners">
        <div className="title-partner-card-wrapper">
        <section
          className="title-partner-card"
          aria-labelledby="title-partner-heading"
          style={titlePartnerStyle}
        >
          <div className="title-partner-card__identity">
            <p className="eyebrow" id="title-partner-heading">TITLE PARTNER</p>
            <div className="tata-wordmark" aria-label={titlePartner.name}>
              <span className="tata-emblem" aria-hidden="true"><i /><b /></span>
              <span>{titlePartner.name}</span>
            </div>
          </div>
          <span className="title-partner-card__divider" aria-hidden="true" />
          <div className="title-partner-card__copy">
            <p>{titlePartner.description}</p>
            <a
              className="text-link text-link--small"
              href={titlePartner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website <span aria-hidden="true">⟶</span>
            </a>
          </div>
        </section>
        </div>

        {sponsorGroups.map((group) => (
          <PartnerGroup key={group.className} group={group} />
        ))}
      </div>

      <section className="sponsors-cta" style={ctaStyle}>
        <div className="sponsors-cta__inner">
          <p className="eyebrow">BE A PART OF</p>
          <h2>THE NEXT <span>·</span><br /><em>CHAPTER.</em></h2>
          <p className="sponsors-cta__copy">
            Partner with Lakshya and be a part of a celebration<br className="desktop-break" /> of sport, youth and limitless ambition.
          </p>
          <a href="mailto:sponsors@lakshya.in" className="outline-button">
            GET IN TOUCH <span aria-hidden="true">⟶</span>
          </a>
        </div>
        <span className="cta-light-streak" aria-hidden="true" />
      </section>
    </main>
  );
}
