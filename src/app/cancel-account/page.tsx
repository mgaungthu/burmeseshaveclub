import { pageMetadata, pages } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata("cancel-account");
export default function Page() {
  return (
    <main className={styles.page} id="main-content">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Account &amp; privacy</div>
          <h1>Delete your account.</h1>
          <p className="intro">
            You’re in control of your Burmese Shave Club account. Delete it
            directly in the app, or contact us to request deletion if you cannot
            sign in.
          </p>
          <div className="deletion-actions">
            <a className="contact-link" href="#in-app">
              Delete in the app
            </a>
            <a className="secondary-link" href="#request-deletion">
              Request by email
            </a>
          </div>
          <p className="deletion-notice">
            <strong>Deletion is permanent.</strong> Once your account is
            deleted, you cannot restore it or sign in with that account.
            Uninstalling the app does not delete your account.
          </p>
        </div>
      </section>

      <section id="in-app" aria-labelledby="app-heading">
        <div className="container deletion-content">
          <div className="eyebrow">Option 01 · In the app</div>
          <h2 id="app-heading">Delete your account in a few steps.</h2>
          <ol className="deletion-steps">
            <li>
              Open the <strong>Burmese Shave Club</strong> app and sign in to
              the account you want to delete.
            </li>
            <li>
              Go to <strong>Profile</strong>, tap your{" "}
              <strong>Account Info</strong> card, then choose{" "}
              <strong>Delete Account</strong>.
            </li>
            <li>
              Enter your <strong>Current Password</strong>. If your account is
              linked to Google, you can use <strong>Verify With Google</strong>{" "}
              with that linked account.
            </li>
            <li>
              Type <strong>CONFIRM</strong> in the confirmation field, then tap{" "}
              <strong>Delete Account</strong> to complete deletion.
            </li>
          </ol>
          <p>
            Contact us about any outstanding order, return or payment issue
            before deleting your account. Account deletion does not itself
            request an order cancellation or refund.
          </p>
        </div>
      </section>

      <section
        className="alternate"
        id="request-deletion"
        aria-labelledby="request-heading"
      >
        <div className="container deletion-content">
          <div className="eyebrow">Option 02 · Email support</div>
          <h2 id="request-heading">Can’t access the app?</h2>
          <p>
            Send an account deletion request to{" "}
            <a href="mailto:info@burmeseshaveclub.com">
              info@burmeseshaveclub.com
            </a>
            . Use the subject <strong>Account deletion request</strong> and
            include your registered email address and phone number, if you added
            one to your account. Send it from your registered email address if
            possible.
          </p>
          <p>
            We may need to verify that you own the account before processing
            your request.{" "}
            <strong>
              Do not send your password, verification codes or payment details.
            </strong>
          </p>
          <div className="deletion-actions">
            <a
              className="contact-link"
              href="mailto:info@burmeseshaveclub.com?subject=Account%20deletion%20request&body=Hello%20Burmese%20Shave%20Club%2C%0A%0APlease%20delete%20my%20Burmese%20Shave%20Club%20account%20and%20its%20associated%20personal%20data.%0A%0ARegistered%20email%20address%3A%0ARegistered%20phone%20number%20%28if%20added%29%3A%0A%0APlease%20let%20me%20know%20if%20you%20need%20any%20further%20information%20to%20verify%20my%20account%20ownership%20and%20confirm%20when%20my%20request%20has%20been%20completed.%0A"
            >
              Email a deletion request
            </a>
          </div>
          <p className="request-note">
            This opens a draft in your email app. Review and send the email to
            submit your request. If no email app opens, send it manually to the
            address above.
          </p>
        </div>
      </section>

      <section aria-labelledby="data-heading">
        <div className="container">
          <div className="eyebrow">Your information</div>
          <h2 id="data-heading">What happens to your data?</h2>
          <div className="cards deletion-data">
            <article className="card">
              <h3>Account data is removed</h3>
              <p>
                Your account profile, saved addresses, preferences, cart and
                registered device records are deleted. Your active sessions and
                sign-in tokens are revoked.
              </p>
            </article>
            <article className="card">
              <h3>Some records remain</h3>
              <p>
                Historical orders and payment records, including contact and
                delivery information saved with orders, may remain for order
                support, disputes, accounting and applicable obligations.
              </p>
            </article>
            <article className="card">
              <h3>Retention depends on the record</h3>
              <p>
                Our <a href={`${pages.privacy.path}#retention`}>Privacy Policy</a>{" "}
                explains retention. It does not specify a fixed retention period
                for every record type. Contact us for details about retained
                data associated with your account.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="edge" aria-labelledby="help-heading">
        <div className="container deletion-content">
          <div className="eyebrow">Need help?</div>
          <h2 id="help-heading">Talk to Burmese Shave Club.</h2>
          <p>
            For help with account access or a deletion request, email{" "}
            <a href="mailto:info@burmeseshaveclub.com">
              info@burmeseshaveclub.com
            </a>{" "}
            or call <a href="tel:+959979292992">+95 997 9292 992</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
