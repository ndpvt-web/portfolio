import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-base)]">
      <p
        className="font-mono text-[var(--accent)] leading-none select-none"
        style={{ fontSize: "var(--text-hero)" }}
      >
        404
      </p>
      <p
        className="mt-4 text-[var(--text-secondary)]"
        style={{ fontSize: "var(--text-heading)" }}
      >
        Page not found
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-200 font-medium"
      >
        Back to home
      </Link>
    </main>
  );
}
