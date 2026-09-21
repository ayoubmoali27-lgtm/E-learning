"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AuthCard({ initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
    agreeTerms: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleSocialAuth = (provider) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      rememberMe: false,
      agreeTerms: true,
    });
  };

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <ScrollReveal direction="zoom" delay={0}>
        <div className="relative overflow-hidden rounded-[28px] border border-[#ECE7F2] bg-white p-7 shadow-[0_12px_40px_rgba(50,35,50,0.06)] sm:p-10">
          {/* Decorative Corner Accents */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#8C74D9]/10 blur-xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-[#FF6673]/10 blur-xl" />

          {/* THANK YOU VIEW WHEN LOGGED IN OR SIGNED UP */}
          {submitted ? (
            <div className="py-6 text-center">
              {/* Animated Celebration Icon */}
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EAFBF3] text-[#227B44] shadow-inner">
                <span className="absolute -top-1 right-0 h-4 w-4 rounded-full bg-[#FFB23F]" />
                <span className="absolute -bottom-1 left-1 h-3.5 w-3.5 rounded-full bg-[#8C74D9]" />
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#227B44"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              {/* Thank you badge */}
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#EAFBF3] px-4 py-1.5 text-[11px] font-bold tracking-[0.2px] text-[#126231]">
                <span className="h-2 w-2 rounded-full bg-[#34C759]" />
                SUCCESSFUL {mode === "login" ? "LOGIN" : "REGISTRATION"}
              </div>

              {/* Headline */}
              <h2 className="text-[26px] font-bold tracking-[-0.6px] text-[#181B2E] sm:text-[30px]">
                {mode === "login" ? "Thank You for Logging In!" : "Thank You for Signing Up!"}
              </h2>

              {/* Subtitle / Personalized message */}
              <p className="mt-3 text-[14px] leading-[1.7] text-[#6D5364]">
                {mode === "login" ? (
                  <>
                    Welcome back{formData.name ? `, ${formData.name}` : ""}! Your learning progress, bookmarks, and certifications are ready.
                  </>
                ) : (
                  <>
                    Welcome to EdTech{formData.name ? `, ${formData.name}` : ""}! Your account has been created. You can now enroll in courses and start building your skills.
                  </>
                )}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/courses"
                  style={{ color: "#ffffff" }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5F50BD] py-3.5 text-[14px] font-bold shadow-md transition-all duration-300 hover:bg-[#4E40A8] hover:shadow-lg"
                >
                  <span>Explore Courses</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#DFDAEC] bg-white py-3 text-[14px] font-bold text-[#181B2E] transition-colors hover:border-[#8C74D9] hover:text-[#5F50BD]"
                >
                  Return to Home
                </Link>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-[12px] font-semibold text-[#9A909B] hover:text-[#FF6673] hover:underline"
                >
                  Log Out / Try Another Account
                </button>
              </div>
            </div>
          ) : (
            /* LOGIN / SIGN UP FORM */
            <div>
              {/* MODE TOGGLE TABS */}
              <div className="mb-7 flex rounded-full bg-[#F3F0F9] p-1">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`w-1/2 rounded-full py-2.5 text-[13px] font-bold transition-all duration-300 ${
                    mode === "login"
                      ? "bg-white text-[#5F50BD] shadow-sm"
                      : "text-[#76839A] hover:text-[#181B2E]"
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`w-1/2 rounded-full py-2.5 text-[13px] font-bold transition-all duration-300 ${
                    mode === "signup"
                      ? "bg-white text-[#5F50BD] shadow-sm"
                      : "text-[#76839A] hover:text-[#181B2E]"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* HEADER TEXT */}
              <div className="mb-6 text-center">
                <h1 className="text-[24px] font-bold tracking-[-0.6px] text-[#181B2E] sm:text-[28px]">
                  {mode === "login" ? "Welcome Back" : "Create an Account"}
                </h1>
                <p className="mt-1 text-[13px] text-[#76839A]">
                  {mode === "login"
                    ? "Enter your credentials to access your courses"
                    : "Join thousands of students learning modern skills"}
                </p>
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialAuth("Google")}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#ECE6E9] bg-white py-2.5 text-[12px] font-semibold text-[#181B2E] transition-all duration-300 hover:border-[#8C74D9] hover:bg-[#FAF8FF]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 12s.6 3.6 1.6 5.6l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"
                    />
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialAuth("GitHub")}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#ECE6E9] bg-white py-2.5 text-[12px] font-semibold text-[#181B2E] transition-all duration-300 hover:border-[#8C74D9] hover:bg-[#FAF8FF]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </button>
              </div>

              {/* DIVIDER */}
              <div className="my-6 flex items-center gap-3 text-[11px] text-[#A098A3]">
                <div className="h-px flex-1 bg-[#ECE7F2]" />
                <span>or continue with email</span>
                <div className="h-px flex-1 bg-[#ECE7F2]" />
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME INPUT (SIGNUP ONLY) */}
                {mode === "signup" && (
                  <div>
                    <label className="block text-[12px] font-bold text-[#181B2E]">
                      Full Name <span className="text-[#FF6673]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Amine Benali"
                      className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-3 text-[13px] text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                    />
                  </div>
                )}

                {/* EMAIL INPUT */}
                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Email Address <span className="text-[#FF6673]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-3 text-[13px] text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                  />
                </div>

                {/* PASSWORD INPUT */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-[12px] font-bold text-[#181B2E]">
                      Password <span className="text-[#FF6673]">*</span>
                    </label>
                    {mode === "login" && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("A password reset link would be sent to your email.");
                        }}
                        className="text-[11px] font-semibold text-[#5F50BD] hover:underline"
                      >
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative mt-1.5">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full rounded-full border border-[#DFDAEC] px-4 py-3 pr-11 text-[13px] text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9A909B] hover:text-[#181B2E]"
                    >
                      {showPassword ? (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* CHECKBOX */}
                <div className="pt-1">
                  {mode === "login" ? (
                    <label className="flex items-center gap-2 text-[12px] text-[#6D5364] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                        className="rounded border-[#DFDAEC] text-[#5F50BD] focus:ring-[#8C74D9]"
                      />
                      <span>Remember me for 30 days</span>
                    </label>
                  ) : (
                    <label className="flex items-start gap-2 text-[11px] leading-[1.5] text-[#6D5364] cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="mt-0.5 rounded border-[#DFDAEC] text-[#5F50BD] focus:ring-[#8C74D9]"
                      />
                      <span>
                        I agree to the{" "}
                        <Link href="/terms" className="text-[#5F50BD] underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-[#5F50BD] underline">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{ color: "#ffffff" }}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5F50BD] py-3.5 text-[14px] font-bold shadow-md transition-all duration-300 hover:bg-[#4E40A8] hover:shadow-lg disabled:opacity-70"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>{mode === "login" ? "Log In" : "Create Account"}</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>

              {/* FOOTER SWITCH */}
              <div className="mt-6 text-center text-[12px] text-[#76839A]">
                {mode === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="font-bold text-[#5F50BD] hover:underline"
                    >
                      Sign up for free
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-bold text-[#5F50BD] hover:underline"
                    >
                      Log in here
                    </button>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}

