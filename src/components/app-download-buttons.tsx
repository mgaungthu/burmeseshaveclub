import styles from "./app-download-buttons.module.css";

export function AppDownloadButtons() {
  return (
    <div
      className={styles.buttons}
      role="group"
      aria-label="Download the Burmese Shave Club app"
    >
      <a
        className={styles.button}
        href="https://play.google.com/store/apps/details?id=com.burmeseshave.club"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path fill="#34a853" d="M4 2v20l10-10z" />
          <path fill="#4285f4" d="m4 2 14 7.5-4 2.5z" />
          <path fill="#fbbc04" d="m18 9.5 4 2.5-4 2.5-4-2.5z" />
          <path fill="#ea4335" d="m4 22 10-10 4 2.5z" />
        </svg>
        <span>
          <small className={styles.caption}>Get it on</small>
          <strong className={styles.label}>Google Play</strong>
        </span>
      </a>
      <a
        className={styles.button}
        href="https://apps.apple.com/az/app/burmese-shave-club/id6810204652"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M17.05 12.54c.03 3.2 2.81 4.27 2.84 4.28-.02.08-.44 1.52-1.46 3.01-.89 1.29-1.81 2.58-3.26 2.61-1.43.03-1.89-.84-3.53-.84-1.63 0-2.15.81-3.5.87-1.4.05-2.46-1.4-3.36-2.68-1.82-2.63-3.2-7.43-1.33-10.67a5.22 5.22 0 0 1 4.43-2.68c1.38-.03 2.68.93 3.52.93.84 0 2.42-1.15 4.08-.98.7.03 2.65.28 3.91 2.12-.1.06-2.33 1.36-2.3 4.03ZM14.37 4.63c.74-.9 1.24-2.15 1.1-3.4-1.06.04-2.35.71-3.11 1.61-.68.79-1.28 2.05-1.12 3.27 1.18.09 2.39-.6 3.13-1.48Z" />
        </svg>
        <span>
          <small className={styles.caption}>Download on the</small>
          <strong className={styles.label}>App Store</strong>
        </span>
      </a>
    </div>
  );
}
