import { pageMetadata } from "@/lib/site";
import styles from "../../styles/policy.module.css";

export const metadata = pageMetadata("privacy");
export default function Page() {
  return (
    <main className={styles.page} id="main-content">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Legal &amp; Privacy</div>

          <h1>Privacy Policy</h1>

          <p className="intro">
            This Privacy Policy explains how Burmese Shave Club collects, uses,
            stores and protects information when you use our website, mobile
            application and related services.
          </p>

          <div className="policy-meta">
            <span>
              <strong>Effective date:</strong> September 26, 2026
            </span>

            <span>
              <strong>Applies to:</strong> Website, mobile app and customer
              services
            </span>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <div className="container policy-layout">
          <aside className="policy-nav" aria-label="Privacy Policy sections">
            <strong>On this page</strong>

            <div className="policy-nav-links">
              <a href="#overview">1. Overview</a>
              <a href="#information-we-collect">2. Information we collect</a>
              <a href="#how-we-use-information">3. How we use information</a>
              <a href="#sharing">4. How information is shared</a>
              <a href="#payments">5. Payments &amp; proof uploads</a>
              <a href="#notifications">6. Notifications &amp; device data</a>
              <a href="#analytics">7. Analytics</a>
              <a href="#retention">8. Data retention</a>
              <a href="#security">9. Security</a>
              <a href="#choices">10. Your choices &amp; rights</a>
              <a href="#children">11. Children's privacy</a>
              <a href="#third-parties">12. Third-party services</a>
              <a href="#changes">13. Changes to this policy</a>
              <a href="#contact">14. Contact us</a>
            </div>
          </aside>

          <article className="policy-content">
            <div className="notice">
              <strong>Summary:</strong> We collect information needed to operate
              your account, process orders, deliver products, handle payments,
              provide support and improve our services. We do not use this page
              to claim collection of information that is not part of our current
              services.
            </div>

            <section className="policy-block" id="overview">
              <h2>1. Overview</h2>

              <p>
                Burmese Shave Club provides retail and related customer services
                through our website and mobile application. This Privacy Policy
                describes how information is handled when you create an account,
                shop for products, save delivery addresses, place orders, submit
                payment information or payment proof, receive notifications,
                contact support or otherwise use our services.
              </p>

              <p>
                By using our services, you acknowledge that your information
                will be handled as described in this Privacy Policy.
              </p>
            </section>

            <section className="policy-block" id="information-we-collect">
              <h2>2. Information we collect</h2>

              <h3>Account information</h3>

              <p>
                When you create or use an account, we may collect information
                such as your name, email address, phone number and account
                authentication information.
              </p>

              <p>
                If you choose Google Sign-In, we may receive basic account
                information made available through the Google sign-in process,
                such as your Google account identifier, name, email address and
                profile image where provided.
              </p>

              <h3>Delivery and address information</h3>

              <p>
                When you save an address or place an order, we may collect
                delivery details such as recipient name, phone number, alternate
                phone number where provided, address lines, building, floor,
                unit, landmark, township, city, state or region, postal code,
                country code, delivery instructions and location coordinates
                where you choose to provide them.
              </p>

              <h3>Shopping and order information</h3>

              <p>
                We collect information about products added to your cart,
                checkout details, selected payment method, orders, order status,
                discounts, shipping charges, taxes and related transaction
                records needed to provide the service.
              </p>

              <h3>Payment-related information</h3>

              <p>
                For payment methods that require manual verification, we may
                collect a payment reference and an uploaded payment proof image,
                such as a transfer screenshot. Cash-on-delivery orders may not
                require payment proof at checkout.
              </p>

              <h3>Support and communication information</h3>

              <p>
                If you contact us through customer support, chat or other
                communication channels, we may collect the information you
                provide in those communications so that we can respond and
                assist you.
              </p>

              <h3>Technical and device information</h3>

              <p>
                Our services may process technical information necessary to
                operate the website and mobile app, such as device platform,
                app-related identifiers, authentication tokens and push
                notification tokens when notification features are enabled.
              </p>
            </section>

            <section className="policy-block" id="how-we-use-information">
              <h2>3. How we use information</h2>

              <p>
                We use information collected through our services for purposes
                that include:
              </p>

              <ul>
                <li>Creating, maintaining and securing your account.</li>
                <li>Authenticating sign-in and maintaining your session.</li>
                <li>Providing product, cart and checkout functionality.</li>
                <li>Processing and managing orders.</li>
                <li>Preparing and coordinating product delivery.</li>
                <li>
                  Reviewing payment proof where a payment method requires it.
                </li>
                <li>
                  Sending service-related notifications and order updates.
                </li>
                <li>Responding to customer support requests and enquiries.</li>
                <li>Preventing misuse and protecting our services.</li>
                <li>Understanding website usage and improving our services.</li>
                <li>
                  Complying with applicable business, accounting and legal
                  requirements.
                </li>
              </ul>
            </section>

            <section className="policy-block" id="sharing">
              <h2>4. How information is shared</h2>

              <p>
                We do not share personal information except where reasonably
                necessary to operate our services, complete transactions,
                support customers, protect the service or meet applicable
                requirements.
              </p>

              <p>
                Information may be shared with service providers or business
                partners that help us operate relevant parts of the service,
                such as delivery coordination, authentication, infrastructure,
                analytics or customer communications. We limit such sharing to
                information reasonably needed for those functions.
              </p>

              <p>
                We may also disclose information where required by applicable
                law, regulation, legal process or a valid request from an
                authorized authority, or when necessary to protect the rights,
                safety and security of Burmese Shave Club, our customers or
                others.
              </p>
            </section>

            <section className="policy-block" id="payments">
              <h2>5. Payments and proof uploads</h2>

              <p>
                Depending on the payment method you select, checkout may require
                a payment reference and a payment proof image. These materials
                are used to review and confirm payment for the relevant order.
              </p>

              <p>
                Please avoid including unrelated sensitive information in a
                payment proof image. Only upload the information needed to
                verify the payment associated with your order.
              </p>
            </section>

            <section className="policy-block" id="notifications">
              <h2>6. Notifications and device data</h2>

              <p>
                If push notifications are enabled, our mobile app may register a
                push notification token together with basic device information,
                such as the device platform or an app-specific device
                identifier, so that we can send relevant service notifications.
              </p>

              <p>
                You can control notification permissions through your device
                settings. Disabling push notifications will not prevent you from
                using the core shopping and ordering features of the app,
                although you may no longer receive certain updates as push
                notifications.
              </p>
            </section>

            <section className="policy-block" id="analytics">
              <h2>7. Analytics</h2>

              <p>
                Our website uses analytics technology to help us understand how
                visitors use the site and to improve website performance and
                content. This may involve processing information such as page
                interactions, browser or device information and other usage data
                generated when you visit the site.
              </p>
            </section>

            <section className="policy-block" id="retention">
              <h2>8. Data retention</h2>

              <p>
                We retain information for as long as reasonably necessary to
                operate your account, provide requested services, maintain order
                and transaction records, resolve disputes, prevent misuse and
                satisfy applicable business, accounting or legal obligations.
              </p>

              <p>
                Retention periods may differ depending on the type of
                information and the purpose for which it is used.
              </p>
            </section>

            <section className="policy-block" id="security">
              <h2>9. Security</h2>

              <p>
                We use reasonable administrative and technical measures designed
                to protect information against unauthorized access, alteration,
                disclosure or loss. However, no website, application,
                transmission method or storage system can be guaranteed to be
                completely secure.
              </p>

              <p>
                You are responsible for keeping your account credentials and
                device access secure and for notifying us if you believe your
                account may have been accessed without authorization.
              </p>
            </section>

            <section className="policy-block" id="choices">
              <h2>10. Your choices and rights</h2>

              <p>
                Depending on your use of our services and applicable
                requirements, you may be able to review or update certain
                account and address information directly in the app.
              </p>

              <p>
                You may also contact us to ask about your personal information,
                request correction of inaccurate information, or request
                deletion or other handling where appropriate and legally
                permitted.
              </p>

              <p>
                Some information may need to be retained where necessary for
                completed orders, transaction records, fraud prevention, dispute
                resolution, accounting or other legitimate business and legal
                purposes.
              </p>
            </section>

            <section className="policy-block" id="children">
              <h2>11. Children's privacy</h2>

              <p>
                Burmese Shave Club is a shopping and grooming-products service
                and is not designed specifically for children. If you believe
                that a child has provided personal information to us without
                appropriate authorization, please contact us so that we can
                review the situation and take appropriate action.
              </p>
            </section>

            <section className="policy-block" id="third-parties">
              <h2>12. Third-party services and links</h2>

              <p>
                Our services may contain links to third-party websites or rely
                on third-party technologies for specific functions, such as
                authentication, analytics or external maps. Those services may
                have their own privacy practices and terms.
              </p>

              <p>
                This Privacy Policy applies to Burmese Shave Club's handling of
                information and does not replace the privacy policies of
                third-party services that you choose to use.
              </p>
            </section>

            <section className="policy-block" id="changes">
              <h2>13. Changes to this Privacy Policy</h2>

              <p>
                We may update this Privacy Policy when our services, business
                practices or applicable requirements change. When we make an
                update, we may revise the effective date shown at the top of
                this page.
              </p>

              <p>
                We encourage you to review this page periodically so you
                understand the current version of our privacy practices.
              </p>
            </section>

            <section className="policy-block" id="contact">
              <h2>14. Contact us</h2>

              <p>
                If you have questions or requests related to this Privacy Policy
                or your information, contact Burmese Shave Club:
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

          <h2>Questions about your privacy or account?</h2>

          <p>
            Contact Burmese Shave Club if you have a privacy-related question,
            want to correct your information or need help with your account.
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
