/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vZjz0z7nRho
 */
import Link from "next/link";

export function NotAuthorized() {
  return (
    <section className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-2">
          500 - Server Error
        </h1>
        <p className="text-lg text-center max-w-lg text-zinc-500 dark:text-zinc-400 mb-6">
          You are not logged in to HSKRK network.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
          href="https://auth.apps.hskrk.pl"
        >
          Login
        </Link>
      </main>
    </section>
  );
}
