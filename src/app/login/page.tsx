import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign In or Sign Up — MYHitch",
  description: "Sign in to your MYHitch account or create a new one to access Mart, JetNRest, Pass, Connect and more.",
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-center">
      {/* Soft light ambient glow for premium aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,232,238,0.2),rgba(255,255,255,1),rgba(255,255,255,1))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-[120px] pointer-events-none" />

      {/* Auth Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AuthForm />
      </div>
    </main>
  );
}
