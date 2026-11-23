import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <h1>Page not found</h1>
      <p>This page may have moved or the address may be incorrect.</p>
      <Link href="/">Return to Burmese Shave Club</Link>
    </main>
  );
}
