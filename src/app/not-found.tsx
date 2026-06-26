import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 py-24">
      <h1 className="text-2xl font-semibold text-(--text-primary)">
        404 — Page not found
      </h1>
      <p className="text-(--text-secondary)">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-(--btn-primary-bg) px-5 py-2.5 text-sm font-medium text-(--btn-primary-text) transition hover:bg-(--btn-primary-bg-hover)"
      >
        Back to home
      </Link>
    </div>
  );
}
