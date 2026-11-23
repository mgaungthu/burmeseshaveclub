import { AppDownloadButtons } from "@/components/app-download-buttons";
import { pageMetadata } from "@/lib/site";
import styles from "./page.module.css";
import { ContactForm } from "@/components/contact-form";
import { HeroParallax } from "@/components/hero-parallax";

export const metadata = pageMetadata("home");
export default function Page() {
  return (
    <main className={styles.page} id="main-content">
      <HeroParallax>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">Burmese Shave Club</div>

            <h1>
              AUTHENTIC GROOMING.
              <br />
              MADE ACCESSIBLE.
            </h1>

            <p className="hero-description">
              Genuine international shaving and personal-care products,
              competitively priced for wholesale partners and retail customers
              throughout Myanmar.
            </p>

            <AppDownloadButtons />

            <div className="hero-benefits">
              <div className="hero-benefit">
                <div className="benefit-icon" aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>100% Authentic</h3>

                  <p>Factory-fresh products from trusted global brands.</p>
                </div>
              </div>

              <div className="hero-benefit">
                <div className="benefit-icon" aria-hidden="true">
                  ◎
                </div>

                <div>
                  <h3>Bulk Price Advantage</h3>

                  <p>Cost savings from large-volume sourcing.</p>
                </div>
              </div>

              <div className="hero-benefit">
                <div className="benefit-icon" aria-hidden="true">
                  ✓
                </div>

                <div>
                  <h3>Consistent Supply</h3>

                  <p>Reliable logistics for retail shelves and businesses.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle" aria-hidden="true"></div>

            <div className="hero-dot-grid" aria-hidden="true"></div>

            <figure className="app-preview">
              <div className="hero-app-mockup">
                <img
                  src="/assets/app-home.png"
                  alt="Burmese Shave Club app home screen with products and promotions"
                  width={878}
                  height={1899}
                />
              </div>
              <figcaption className="app-preview-caption">
                <span className="preview-status-dot" aria-hidden="true" />
                App preview
              </figcaption>
            </figure>
          </div>
        </div>
      </HeroParallax>

      <section className="section features" id="features">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Why Burmese Shave Club?</div>

            <h2>Your trusted grooming supply partner.</h2>

            <p>
              We connect Myanmar with genuine shaving systems, disposables,
              cartridges, before-and-after shave care, and personal-care
              essentials.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-item">
              <div className="feature-icon" aria-hidden="true">
                ⚒
              </div>

              <h3>Authentic Global Brands</h3>

              <p>
                Shop genuine Gillette, Schick, Dorco, AXE, Oral-B and Listerine
                products from verified distribution channels.
              </p>
            </article>

            <article className="feature-item">
              <div className="feature-icon" aria-hidden="true">
                ▤
              </div>

              <h3>Wholesale Supply</h3>

              <p>
                Tiered volume discounts, flexible credit terms for verified
                partners, and dependable stock replenishment.
              </p>
            </article>

            <article className="feature-item">
              <div className="feature-icon" aria-hidden="true">
                ◎
              </div>

              <h3>Professional Grooming</h3>

              <p>
                High-volume cartridges, disposables, premium handles and
                professional packs for shops, spas and barbershops.
              </p>
            </article>

            <article className="feature-item">
              <div className="feature-icon" aria-hidden="true">
                ◇
              </div>

              <h3>Retail Value Bundles</h3>

              <p>
                Curated handle-and-refill combos that deliver premium grooming
                at a better everyday price.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="container download-grid">
          <div className="products-visual">
            <figure className="app-preview">
              <div className="app-mockup">
                <img
                  src="/assets/app-home.png"
                  alt="Burmese Shave Club app home screen with products and promotions"
                  width={878}
                  height={1899}
                />
              </div>
              <figcaption className="app-preview-caption">
                <span className="preview-status-dot" aria-hidden="true" />
                App preview
              </figcaption>
            </figure>
          </div>

          <div className="download-copy">
            <div className="download-logo">BSC</div>

            <h2>
              PREMIUM GROOMING,
              <br />
              ONE TRUSTED HUB
            </h2>

            <p>
              Source premium Gillette systems, Schick solutions and high-value
              Dorco packs from one dependable supplier—for your business or your
              daily routine.
            </p>

            <AppDownloadButtons />
          </div>

          <div className="qr-wrap">
            <img
              className="qr-code"
              src="/assets/contact-order-qr.png"
              alt="QR code to contact Burmese Shave Club and place an order"
              loading="lazy"
            />

            <span> Contact us to order </span>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">Get in touch</div>

            <h2>Contact Us</h2>

            <p>
              For wholesale partnerships, retail orders or product enquiries,
              contact the Burmese Shave Club team.
            </p>

            <div className="contact-list">
              <div className="contact-row">
                <span aria-hidden="true"> ✉ </span>

                <a href="mailto:info@burmeseshaveclub.com">
                  info@burmeseshaveclub.com
                </a>
              </div>

              <div className="contact-row">
                <span aria-hidden="true"> ☎ </span>

                <a href="tel:+959979292992"> +95 997 9292 992 </a>
              </div>

              <div className="contact-row">
                <span aria-hidden="true"> ● </span>

                <span>
                  No. 1054 GA, Ground Floor, Zarga 22 St, (4) Quarter, South
                  Oakkalar, Yangon, Myanmar
                </span>

                <a
                  href="https://maps.app.goo.gl/n22HD2d72eYsdK6E6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                  aria-label="Show Burmese Shave Club location in Google Maps"
                  title="Show in Google Maps"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
