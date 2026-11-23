import { pageMetadata } from "@/lib/site";
import styles from "../../styles/policy.module.css";

export const metadata = pageMetadata("terms");
export default function Page() {
  return (
    <main className={styles.page} id="main-content">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Legal &amp; Service Terms</div>

          <h1>Terms &amp; Conditions</h1>

          <p className="intro">
            These Terms &amp; Conditions govern your access to and use of the
            Burmese Shave Club website, mobile application, account features,
            shopping, ordering, payment, delivery and related services.
          </p>

          <div className="policy-meta">
            <span>
              <strong>Effective date:</strong> September 26, 2026
            </span>

            <span>
              <strong>Applies to:</strong> Website, mobile app, purchases and
              customer services
            </span>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <div className="container policy-layout">
          <aside
            className="policy-nav"
            aria-label="Terms and Conditions sections"
          >
            <strong>On this page</strong>

            <div className="policy-nav-links">
              <a href="#agreement">1. Agreement to these terms</a>
              <a href="#eligibility">2. Account &amp; eligibility</a>
              <a href="#products">3. Products &amp; availability</a>
              <a href="#pricing">4. Pricing &amp; promotions</a>
              <a href="#orders">5. Orders</a>
              <a href="#payments">6. Payments</a>
              <a href="#delivery">7. Delivery</a>
              <a href="#cancellation">8. Cancellation</a>
              <a href="#returns">9. Returns &amp; order issues</a>
              <a href="#acceptable-use">10. Acceptable use</a>
              <a href="#content">11. Content &amp; intellectual property</a>
              <a href="#third-parties">12. Third-party services</a>
              <a href="#availability">13. Service availability</a>
              <a href="#liability">14. Responsibility &amp; liability</a>
              <a href="#changes">15. Changes to these terms</a>
              <a href="#contact">16. Contact us</a>
            </div>
          </aside>

          <article className="policy-content">
            <div className="notice">
              <strong>Important:</strong> Please read these Terms &amp;
              Conditions before using Burmese Shave Club or placing an order. By
              using our services or submitting an order, you agree to these
              terms and any applicable information shown during checkout.
            </div>

            <section className="policy-block" id="agreement">
              <h2>1. Agreement to these terms</h2>

              <p>
                These Terms &amp; Conditions apply to your use of Burmese Shave
                Club's website, mobile application and related services. They
                also apply when you create an account, browse products, save
                addresses, add products to your cart, place an order, submit
                payment information or contact us for support.
              </p>

              <p>
                If you do not agree to these terms, you should not use the
                services or submit an order.
              </p>
            </section>

            <section className="policy-block" id="eligibility">
              <h2>2. Account and eligibility</h2>

              <p>
                Some Burmese Shave Club features are available without an
                account, while features such as cart, checkout, saved addresses,
                orders and certain account services may require you to sign in.
              </p>

              <p>
                When creating an account, you must provide accurate information
                and keep your account details reasonably up to date. You are
                responsible for maintaining the confidentiality of your login
                credentials and for activity performed through your account.
              </p>

              <p>
                Email verification may be required before certain account
                features can be used. We may also support third-party sign-in
                methods, such as Google Sign-In, where available.
              </p>
            </section>

            <section className="policy-block" id="products">
              <h2>3. Products and availability</h2>

              <p>
                We aim to present product names, descriptions, images, pricing
                and availability as accurately as practical. Product packaging,
                appearance or other details may vary from images shown due to
                manufacturer updates, regional packaging or photography.
              </p>

              <p>
                Product availability may change without notice. Adding a product
                to your cart does not reserve stock. An order may be rejected or
                adjusted if an item is unavailable or there is insufficient
                stock when the order is processed.
              </p>

              <p>
                Burmese Shave Club focuses on authentic grooming and
                personal-care products sourced through trusted channels.
              </p>
            </section>

            <section className="policy-block" id="pricing">
              <h2>4. Pricing, discounts and promotions</h2>

              <p>
                Prices are shown in the currency displayed in the service,
                including Myanmar Kyat where applicable. Product prices,
                promotions, discounts, shipping charges and other amounts may
                change from time to time.
              </p>

              <p>
                The total payable amount is calculated during checkout using the
                current product prices, applicable discounts, shipping charges,
                taxes or other displayed charges. The checkout total shown
                before order submission is the amount that applies to that order
                unless a correction is required because of an obvious pricing or
                system error.
              </p>

              <p>
                Promotional offers may have their own eligibility conditions,
                validity periods, stock limits or other restrictions.
              </p>
            </section>

            <section className="policy-block" id="orders">
              <h2>5. Orders</h2>

              <p>
                When you submit an order, you are making a request to purchase
                the selected products using the delivery address and payment
                method provided at checkout.
              </p>

              <p>
                An order may remain pending while payment, stock or other order
                details are reviewed. Receiving an order confirmation does not
                prevent us from contacting you if information is incomplete,
                stock is unavailable, payment cannot be verified or another
                issue prevents fulfillment.
              </p>

              <p>
                You are responsible for checking the products, quantities,
                delivery details and payment information before submitting an
                order.
              </p>
            </section>

            <section className="policy-block" id="payments">
              <h2>6. Payments</h2>

              <p>
                Available payment methods are shown during checkout and may vary
                over time.
              </p>

              <h3>Electronic or manual-transfer payments</h3>

              <p>
                Where a payment method requires proof of payment, you must
                submit the requested payment reference and payment proof image.
                The payment may remain pending until Burmese Shave Club reviews
                and approves the submission.
              </p>

              <p>
                You are responsible for ensuring that payment information and
                proof correspond to the correct order and amount. Uploading
                proof does not by itself confirm that payment has been approved.
              </p>

              <h3>Cash on delivery</h3>

              <p>
                Where cash on delivery is available and selected, payment proof
                may not be required at checkout. Payment will instead be due in
                accordance with the delivery arrangement shown for the order.
              </p>
            </section>

            <section className="policy-block" id="delivery">
              <h2>7. Delivery</h2>

              <p>
                Burmese Shave Club provides delivery to supported locations
                using the delivery options available for the order. Shipping
                charges are calculated according to the applicable delivery
                configuration and are shown during checkout before the order is
                submitted.
              </p>

              <p>
                You must provide a complete and accurate delivery address,
                recipient name and contact number. Delivery delays or failed
                delivery may occur if the address or contact information is
                incomplete or incorrect, or because of circumstances outside our
                reasonable control.
              </p>

              <p>
                Any delivery estimate shown in the service is an estimate unless
                expressly stated otherwise.
              </p>
            </section>

            <section className="policy-block" id="cancellation">
              <h2>8. Cancellation</h2>

              <p>
                An order may be eligible for cancellation while it is still
                pending and payment has not been approved. Cancellation may no
                longer be available after the order has progressed beyond the
                eligible stage.
              </p>

              <p>
                If a cancellation option is available for your order, follow the
                cancellation flow in the app or contact Burmese Shave Club for
                assistance.
              </p>
            </section>

            <section className="policy-block" id="returns">
              <h2>9. Returns, damaged products and order issues</h2>

              <p>
                If you receive an incorrect, damaged or otherwise problematic
                order, contact Burmese Shave Club as soon as reasonably possible
                and provide the relevant order information.
              </p>

              <p>
                Any return, replacement, refund or other resolution will depend
                on the circumstances of the order, product condition, payment
                status and applicable Burmese Shave Club policy at the time the
                request is reviewed.
              </p>

              <p>
                This page does not create a broader return or refund right where
                a specific return or refund policy has not been published.
              </p>
            </section>

            <section className="policy-block" id="acceptable-use">
              <h2>10. Acceptable use</h2>

              <p>
                You must use Burmese Shave Club only for lawful purposes and in
                a way that does not interfere with the operation or security of
                the services.
              </p>

              <p>You must not:</p>

              <ul>
                <li>
                  Attempt to gain unauthorized access to accounts, systems or
                  data.
                </li>
                <li>
                  Use false or misleading information to place orders or submit
                  payments.
                </li>
                <li>Upload malicious, unlawful or unrelated content.</li>
                <li>
                  Interfere with, overload or attempt to bypass service
                  protections.
                </li>
                <li>
                  Use automated methods to misuse the service or disrupt normal
                  operation.
                </li>
                <li>
                  Use Burmese Shave Club in a way that violates applicable law
                  or another person's rights.
                </li>
              </ul>

              <p>
                We may restrict access to the services where reasonably
                necessary to protect customers, orders, systems or the integrity
                of the platform.
              </p>
            </section>

            <section className="policy-block" id="content">
              <h2>11. Content and intellectual property</h2>

              <p>
                Burmese Shave Club's website and app may contain brand elements,
                text, graphics, layouts, photographs, software and other content
                owned by Burmese Shave Club or used with appropriate permission.
              </p>

              <p>
                You may use the services for their intended personal or business
                purchasing purposes. You may not copy, reproduce, modify,
                distribute or exploit protected Burmese Shave Club content
                except where permitted by law or with our prior authorization.
              </p>

              <p>
                Product names, logos and trademarks belonging to third-party
                manufacturers remain the property of their respective owners.
              </p>
            </section>

            <section className="policy-block" id="third-parties">
              <h2>12. Third-party services and links</h2>

              <p>
                Some features may rely on or link to third-party services, such
                as authentication providers, maps, analytics or external
                websites. Your use of those services may also be subject to
                their own terms and policies.
              </p>

              <p>
                Burmese Shave Club is not responsible for the independent
                content, policies or operation of third-party services outside
                our control.
              </p>
            </section>

            <section className="policy-block" id="availability">
              <h2>13. Service availability</h2>

              <p>
                We work to keep the website, mobile app and related services
                available, but uninterrupted or error-free access cannot be
                guaranteed.
              </p>

              <p>
                We may update, maintain, suspend or modify features where
                reasonably necessary for security, operations, product
                improvements or business requirements. Where practical, we aim
                to avoid unnecessary disruption to active customer orders.
              </p>
            </section>

            <section className="policy-block" id="liability">
              <h2>14. Responsibility and liability</h2>

              <p>
                Burmese Shave Club is responsible for providing its services
                with reasonable care. At the same time, some events may occur
                outside our reasonable control, including network failures,
                third-party service interruptions, courier delays or other
                external events.
              </p>

              <p>
                Nothing in these Terms &amp; Conditions is intended to exclude
                or limit rights or responsibilities that cannot legally be
                excluded or limited under applicable law.
              </p>

              <p>
                To the extent permitted by applicable law, Burmese Shave Club is
                not responsible for indirect or consequential losses that were
                not reasonably foreseeable from the use of the services or a
                particular transaction.
              </p>
            </section>

            <section className="policy-block" id="changes">
              <h2>15. Changes to these Terms &amp; Conditions</h2>

              <p>
                We may update these Terms &amp; Conditions when our services,
                ordering processes, payment methods, delivery arrangements or
                applicable requirements change.
              </p>

              <p>
                When an update is made, the effective date at the top of this
                page may be revised. The version in effect when you use the
                service or submit an order will apply as appropriate to that
                activity.
              </p>
            </section>

            <section className="policy-block" id="contact">
              <h2>16. Contact us</h2>

              <p>
                If you have questions about these Terms &amp; Conditions, an
                order or your use of Burmese Shave Club, contact us:
              </p>

              <p>
                <strong>Email:</strong>
                <a href="mailto:info@burmeseshaveclub.com">
                  info@burmeseshaveclub.com
                </a>
              </p>

              <p>
                <strong>Phone:</strong>
                <a href="tel:+959979292992">+95 997 9292 992</a>
              </p>

              <p>
                <strong>Address:</strong> No. 1054 GA, Ground Floor, Zarga 22
                St, (4) Quarter, South Oakkalar, Yangon, Myanmar
              </p>
            </section>
          </article>
        </div>
      </section>

      <section className="edge">
        <div className="container">
          <div className="eyebrow">Need help?</div>

          <h2>Questions about an order or these terms?</h2>

          <p>
            Contact Burmese Shave Club if you need help with an order, payment,
            delivery or any part of these Terms &amp; Conditions.
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
          </div>
        </div>
      </section>
    </main>
  );
}
