import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign In or Sign Up — MYHitch",
  description: "Sign in to your MYHitch account or create a new one to access Mart, JetNRest, Pass, Connect and more.",
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-[#001B48] overflow-hidden flex flex-col justify-center">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(2,69,122,0.4),rgba(0,27,72,1),rgba(0,27,72,1))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Auth Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AuthForm />
      </div>
    </main>
  );
}
