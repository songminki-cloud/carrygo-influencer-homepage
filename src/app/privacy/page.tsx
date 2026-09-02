import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CarryGo",
  description: "Privacy Policy for CarryGo.",
};

export default function PrivacyPage() {
  return (
    <main className="site-shell privacy-shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <Link className="wordmark" href="/" aria-label="CarryGo home">
          CarryGo
        </Link>
        <span className="disclosure">Privacy Policy</span>
      </header>

      <article className="privacy-page">
        <p className="eyebrow">CarryGo Seoul</p>
        <h1>Privacy Policy</h1>
        <p className="intro">
          CarryGo is an AI K-fashion curator homepage that links visitors to CarryGo social channels.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We do not collect account registration details, payment information, or sensitive personal information on this
            website. If you contact us by email, we may receive your email address and the contents of your message.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>
            We use contact information only to respond to inquiries, manage social channel requests, and improve CarryGo
            content operations.
          </p>
        </section>

        <section>
          <h2>Third-Party Links</h2>
          <p>
            This website links to third-party platforms, including Instagram, Pinterest, and YouTube. Those services have
            their own privacy practices and policies.
          </p>
        </section>

        <section>
          <h2>Cookies and Analytics</h2>
          <p>
            This website does not currently use advertising cookies or its own analytics tracking. Hosting providers and
            linked social platforms may process technical data under their own policies.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact <a href="mailto:help@carrygoseoul.com">help@carrygoseoul.com</a>.
          </p>
        </section>

        <p className="privacy-updated">Last updated: September 2, 2026</p>
      </article>
    </main>
  );
}
