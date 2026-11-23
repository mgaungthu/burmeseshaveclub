import { pageMetadata } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata("about");
export default function Page() {
  return (
    <main className={styles.page} id="main-content">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Established 2024</div>

          <h1>Making premium shaving accessible to Myanmar.</h1>

          <p className="intro">
            Burmese Shave Club is a wholesale and retail supplier of authentic
            international men's grooming hardware and personal-care products. We
            bridge trusted global manufacturers with Myanmar's local businesses
            and consumers.
          </p>

          <div className="facts">
            <div className="fact">
              <strong>Industry</strong>

              <span>
                Personal-care distribution, wholesale and e-commerce retail
              </span>
            </div>

            <div className="fact">
              <strong>Business model</strong>

              <span>Hybrid B2B wholesale and B2C direct retail</span>
            </div>

            <div className="fact">
              <strong>Core promise</strong>

              <span>
                100% authentic products, bulk price advantages and consistent
                supply
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">What we do</div>

          <h2>Genuine grooming products, reliably sourced.</h2>

          <p className="section-copy">
            We source high-quality multi-blade systems, disposable razors,
            replacement cartridges, before-and-after shave care and
            personal-care products from verified international distribution
            channels. Our portfolio includes Gillette, Schick, Dorco, AXE,
            Oral-B and Listerine.
          </p>

          <div className="cards">
            <article className="card">
              <h3>Authenticity first</h3>

              <p>
                Factory-fresh products sourced through official stores,
                principals and trusted suppliers—so buyers can shop without the
                risk of counterfeit lookalikes.
              </p>
            </article>

            <article className="card">
              <h3>Value through volume</h3>

              <p>
                Large import volumes let us pass meaningful savings to retail
                shoppers and our wholesale partners.
              </p>
            </article>

            <article className="card">
              <h3>One trusted hub</h3>

              <p>
                Secure premium Gillette systems and high-value Dorco bulk packs
                from a single dependable supplier and invoice.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="alternate">
        <div className="container">
          <div className="eyebrow">Operational channels</div>

          <h2>Supporting businesses and individual shoppers.</h2>

          <div className="channels" style={{ marginTop: "34px" }}>
            <article className="channel">
              <h3>B2B Wholesale Division</h3>

              <p>
                We serve local retail pharmacies, supermarket chains, premium
                barbershops and independent cosmetics distributors with tiered
                volume discounts, flexible credit terms for verified partners
                and reliable logistics.
              </p>

              <ul>
                <li>Bulk razors and cartridges for high-turnover shelves</li>

                <li>
                  Professional disposable and premium-handle packs for spas and
                  barbershops
                </li>

                <li>Reliable replenishment to help prevent stockouts</li>
              </ul>
            </article>

            <article className="channel">
              <h3>B2C Retail &amp; Digital Club</h3>

              <p>
                For modern gentlemen seeking genuine high-end shaving systems,
                our retail offering delivers authentic products and value
                bundles without the uncertainty of counterfeit goods online.
              </p>

              <ul>
                <li>Genuine multi-blade systems with lubricating strips</li>

                <li>Curated handle-and-cartridge combo packs</li>

                <li>Competitive pricing for everyday premium grooming</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="portfolio-hero">
            <img
              src="/assets/brand-portfolio-hero.png"
              alt="Premium razors, replacement cartridges and personal-care products from Burmese Shave Club"
              loading="lazy"
            />

            <div className="portfolio-hero-copy">
              <div className="eyebrow">Brand portfolio</div>

              <h2>Brand Portfolio &amp; Offerings</h2>

              <p>
                From ultra-premium grooming systems to cost-effective daily
                disposables, we stock trusted products across the market.
              </p>
            </div>
          </div>

          <div className="portfolio">
            <table>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Primary focus</th>
                  <th>Key product lines stocked</th>
                  <th>Target segment</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Gillette</td>

                  <td>Premium technology and precision</td>

                  <td>Fusion5, ProGlide, Mach3, Guard, Guard 3</td>

                  <td>Tech-focused shavers and premium retail</td>
                </tr>

                <tr>
                  <td>Schick</td>

                  <td>Skin protection and comfort</td>

                  <td>Exacta2, Quattro4, Hydro5</td>

                  <td>Sensitive-skin and ergonomic-design fans</td>
                </tr>

                <tr>
                  <td>Dorco</td>

                  <td>High-value multi-blade systems</td>

                  <td>Pace 6 Pro, Pace 2, Prime Double Edge</td>

                  <td>Wholesale heavy buyers and high-ROI retail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="edge" id="contact">
        <div className="container">
          <div className="eyebrow">Get in touch</div>

          <h2>Partner with Burmese Shave Club.</h2>

          <p>
            Contact us for wholesale partnerships, retail orders and product
            enquiries.
          </p>

          <div className="contact">
            <div className="contact-details">
              <a href="tel:+959979292992">+95 997 9292 992</a>

              <a href="mailto:info@burmeseshaveclub.com">
                info@burmeseshaveclub.com
              </a>

              <a href="https://burmeseshaveclub.com/">burmeseshaveclub.com</a>
            </div>

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
      </section>
    </main>
  );
}
