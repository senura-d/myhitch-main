import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center px-5 py-32">
        <div className="glass glass-sheen max-w-md p-10 text-center">
          <p className="font-display text-6xl font-semibold text-gradient">404</p>
          <h1 className="font-display mt-4 text-2xl font-semibold text-frost">
            Page not found
          </h1>
          <p className="mt-3 text-slate-500">
            This connection doesn&apos;t exist — let&apos;s get you back on the network.
          </p>
          <Link
            href="/"
            className="btn btn-primary mt-8 inline-flex rounded-full px-6 py-3.5 text-base"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
