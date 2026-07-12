"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Eye, EyeOff, Lock, Mail, User, Check, 
  ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, 
  Globe, Compass, CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { asset } from "@/lib/asset";

export default function AuthForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      alert(mode === "signin" ? "Signed in successfully!" : "Account created successfully!");
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Password strength checklist helper (very premium touch!)
  const getPasswordStrength = () => {
    if (!formData.password) return 0;
    let score = 0;
    if (formData.password.length >= 8) score += 25;
    if (/[A-Z]/.test(formData.password)) score += 25;
    if (/[0-9]/.test(formData.password)) score += 25;
    if (/[^A-Za-z0-9]/.test(formData.password)) score += 25;
    return score;
  };

  const strength = getPasswordStrength();

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid md:grid-cols-12 min-h-[580px]">
      
      {/* 1. LEFT BRANDING PANEL (hidden on mobile) */}
      <div className="hidden md:flex md:col-span-5 bg-[#f8fafc] p-8 flex-col justify-between relative overflow-hidden text-black border-r border-slate-200">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.03),transparent_60%)]" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-slate-200/50 rounded-full blur-2xl" />

        {/* Header */}
        <div className="relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-black transition-colors text-sm font-semibold mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-black" />
            Back to home
          </Link>
          <div className="flex items-center">
            <img
              src={asset("/MYHitch-Logo-transparent-scaled-e1777265547150.png")}
              alt="MYHitch Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* Content & Nodes Visual */}
        <div className="my-auto relative z-10 py-6">
          <div className="mb-6 relative flex items-center justify-center h-28 w-28 mx-auto">
            {/* Pulsing Ecosystem Orbit Visual */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-black/10"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-2 rounded-full border border-dashed border-black/15"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-black shadow-sm">
              <ShieldCheck size={20} />
            </div>

            {/* Orbiting items */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2">
              <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-[10px] shadow-sm border border-slate-200 text-black"><ShoppingBag size={10} /></span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-2">
              <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-[10px] shadow-sm border border-slate-200 text-black"><CheckCircle2 size={10} /></span>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2">
              <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-[10px] shadow-sm border border-slate-200 text-black"><Globe size={10} /></span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2">
              <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-[10px] shadow-sm border border-slate-200 text-black"><Compass size={10} /></span>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-center text-black leading-tight mb-2">
            One Secure Account.
          </h3>
          <p className="text-xs text-center text-slate-600 leading-relaxed max-w-[240px] mx-auto">
            Hitch into travel, shopping, verified services, and community impact instantly.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-[10px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} MYHitch Ecosystem. All rights reserved.</span>
        </div>
      </div>

      {/* 2. RIGHT INTERACTIVE FORM PANEL */}
      <div className="col-span-12 md:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
        
        {/* Toggle Pill Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="md:hidden flex items-center gap-1.5 text-xs text-slate-700 hover:text-black font-semibold">
            <ArrowLeft size={14} className="text-black" /> Back
          </Link>
          
          <div className="bg-slate-100 p-1 rounded-full flex relative z-10 border border-slate-200">
            <button 
              onClick={() => setMode("signin")}
              className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-colors ${mode === "signin" ? "text-white" : "text-slate-600 hover:text-black"}`}
            >
              {mode === "signin" && (
                <motion.span 
                  layoutId="activeFormTab"
                  className="absolute inset-0 bg-black rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Sign In
            </button>
            <button 
              onClick={() => setMode("signup")}
              className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-colors ${mode === "signup" ? "text-white" : "text-slate-600 hover:text-black"}`}
            >
              {mode === "signup" && (
                <motion.span 
                  layoutId="activeFormTab"
                  className="absolute inset-0 bg-black rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Register
            </button>
          </div>
        </div>

        {/* Forms content with AnimatePresence */}
        <div className="my-auto">
          <AnimatePresence mode="wait">
            {mode === "signin" ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-black">Welcome back</h2>
                  <p className="text-xs text-slate-600 mt-1">Enter your details to hitch into your unified profile.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-800">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={16} />
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 border border-slate-200 text-black placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-black/30 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold text-slate-800">Password</label>
                      <a href="#forgot" className="text-xs text-black hover:underline font-semibold">Forgot?</a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={16} />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border border-slate-200 text-black placeholder-slate-400 text-sm rounded-xl pl-10 pr-10 py-3 outline-none focus:border-black/30 focus:bg-white transition-all"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-black transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center gap-2 py-1">
                    <input 
                      type="checkbox" 
                      id="rememberMe" 
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="rounded border-slate-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer h-4 w-4 bg-slate-50"
                    />
                    <label htmlFor="rememberMe" className="text-xs text-slate-700 font-medium select-none cursor-pointer">
                      Keep me signed in
                    </label>
                  </div>

                  {/* CTA Submit Button */}
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black hover:bg-zinc-800 text-white flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Sign In
                        <ArrowRight size={16} className="text-white" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-black">Create account</h2>
                  <p className="text-xs text-slate-600 mt-1">Get your single unified MYHitch profile in seconds.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-800">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={16} />
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 text-black placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-black/30 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-800">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={16} />
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 border border-slate-200 text-black placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-black/30 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-800">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={16} />
                        <input 
                          type={showPassword ? "text" : "password"} 
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="w-full bg-slate-50 border border-slate-200 text-black placeholder-slate-400 text-sm rounded-xl pl-10 pr-10 py-3 outline-none focus:border-black/30 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-800">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={16} />
                        <input 
                          type={showPassword ? "text" : "password"} 
                          name="confirmPassword"
                          required
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="w-full bg-slate-50 border border-slate-200 text-black placeholder-slate-400 text-sm rounded-xl pl-10 pr-10 py-3 outline-none focus:border-black/30 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-600">Password strength</span>
                        <span className="font-bold text-black">
                          {strength <= 25 ? "Weak" : strength <= 75 ? "Medium" : "Strong"}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${
                            strength <= 25 ? "bg-red-500" : strength <= 75 ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${strength}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Agree Terms */}
                  <div className="flex items-start gap-2 py-1">
                    <input 
                      type="checkbox" 
                      id="agreeTerms" 
                      name="agreeTerms"
                      required
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="rounded border-slate-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer h-4 w-4 bg-slate-50 mt-0.5"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-slate-700 font-medium select-none cursor-pointer">
                      I agree to the <a href="#terms" className="text-black hover:underline font-semibold">Terms of Service</a> and <a href="#privacy" className="text-black hover:underline font-semibold">Privacy Policy</a>
                    </label>
                  </div>

                  {/* CTA Submit Button */}
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black hover:bg-zinc-800 text-white flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight size={16} className="text-white" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social Authentication Splitter */}
        <div className="mt-8">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-[10px] uppercase font-bold tracking-wider">or continue with</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-xs font-bold text-black cursor-pointer shadow-sm">
              <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-xs font-bold text-black cursor-pointer shadow-sm">
              <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.523-10-10-10z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
