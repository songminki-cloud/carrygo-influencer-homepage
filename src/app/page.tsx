import Link from "next/link";
import { ImageRail } from "./components/ImageRail";
import { SocialLaunch } from "./components/SocialLaunch";
import { siteContent } from "./content";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <Link className="wordmark" href="/" aria-label="CarryGo home">
          {siteContent.brand}
        </Link>
        <span className="disclosure">{siteContent.disclosure}</span>
      </header>

      <section className="hero-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.eyebrow}</p>
          <h1 id="hero-title">{siteContent.headline}</h1>
          <p className="intro">{siteContent.intro}</p>
        </div>
        <ImageRail />
      </section>

      <section className="launch-panel" aria-label="CarryGo social links">
        {siteContent.socials.map((link, index) => (
          <SocialLaunch key={link.label} link={link} index={index} />
        ))}
      </section>

      <footer className="footerline">
        {siteContent.footerLinks.map((link) => (
          <a href={link.href} key={link.label} rel="noopener noreferrer" target={link.href.startsWith("http") ? "_blank" : undefined}>
            {link.label}
          </a>
        ))}
      </footer>
    </main>
  );
}
