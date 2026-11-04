import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="site-shell grid min-h-[70vh] place-items-center px-6 py-16 text-slate-900" id="main-content">
      <div className="lab-surface max-w-lg p-8 text-center md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-600">
          The page you requested is not available. You can return to the professor&apos;s home page.
        </p>
        <Link
          to="/"
          className="lab-button mt-7"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
