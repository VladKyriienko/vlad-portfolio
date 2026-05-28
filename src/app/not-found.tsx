import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-(--page-bg) px-6">
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
