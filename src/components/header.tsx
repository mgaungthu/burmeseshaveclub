"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./site-shell.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className={styles.navbar}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Burmese Shave Club home"
          onClick={() => setOpen(false)}
        >
          <img src="/assets/newlogo.jpg" alt="" width={46} height={46} />
          <span className={styles.brandName}>
            BURMESE SHAVE CLUB<sup>®</sup>
          </span>
        </Link>
        <nav
          id="main-navigation"
          className={`${styles.links} ${open ? styles.open : ""}`}
          aria-label="Main navigation"
          onClick={() => setOpen(false)}
        >
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About Us
          </Link>
          <Link href="/#features">Our Offerings</Link>
          <Link href="/#contact">Contact Us</Link>
          <Link href="/#download" className={styles.cta}>
            Explore Products
          </Link>
        </nav>
        <button
          ref={toggle}
          className={styles.toggle}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
