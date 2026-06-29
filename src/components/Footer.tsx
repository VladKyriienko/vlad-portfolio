export function Footer() {
  return (
    <footer className="border-t border-(--header-border) py-6">
      <p className="text-center text-sm">
        © {new Date().getFullYear()} Portfolio. Built with Next.js.
      </p>
    </footer>
  );
}
