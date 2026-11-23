import Link from "next/link";
import { pages } from "@/lib/site";
import styles from "./site-shell.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Burmese Shave Club home"
        >
          <img
            src="/assets/newlogo.jpg"
            alt=""
            width={46}
            height={46}
            loading="lazy"
          />
          <span className={styles.brandName}>
            BURMESE SHAVE CLUB<sup>®</sup>
          </span>
        </Link>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <Link href="/about">About Us</Link>
          <a href={pages.privacy.path}>Privacy Policy</a>
          <a href={pages.terms.path}>Terms of Service</a>
          <Link href="/cancel-account">Delete Account</Link>
          <Link href="/#contact">Contact Us</Link>
        </nav>
        <small>
          © {new Date().getFullYear()} Burmese Shave Club. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
