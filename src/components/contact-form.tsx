"use client";

import { useRef, useState, type FormEvent } from "react";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [pending, setPending] = useState(false);
  const busy = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    busy.current = true;
    setPending(true);
    setIsError(false);
    setStatus("Sending your message…");
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
          signal: AbortSignal.timeout(20000),
        },
      );
      const data = await response.json().catch(() => null);
      if (!response.ok) {
        const fallback =
          response.status === 429
            ? "Too many messages. Please wait a minute and try again."
            : "Unable to send your message. Please try again or email info@burmeseshaveclub.com.";
        throw new Error(
          typeof data?.message === "string" ? data.message : fallback,
        );
      }
      // A static host may return its HTML fallback with status 200.
      if (typeof data?.message !== "string")
        throw new Error(
          "The contact service is unavailable. Please email info@burmeseshaveclub.com.",
        );
      setStatus(data.message);
      form.reset();
    } catch (error) {
      setIsError(true);
      setStatus(
        error instanceof Error &&
          !["TypeError", "TimeoutError", "AbortError"].includes(error.name)
          ? error.message
          : "Unable to reach the contact service. Please try again or email info@burmeseshaveclub.com.",
      );
    } finally {
      busy.current = false;
      setPending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={submit} aria-busy={pending}>
      <div className={styles.row}>
        <label className={styles.field}>
          Your name
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label className={styles.field}>
          Your email
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            required
          />
        </label>
      </div>
      <label className={styles.field}>
        Subject (optional)
        <input name="subject" maxLength={200} />
      </label>
      <label className={styles.field}>
        Message
        <textarea name="message" maxLength={5000} required />
      </label>
      <button className={styles.submit} type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </button>
      <p
        className={`${styles.status} ${isError ? styles.error : ""}`}
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
}
