"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Close profile dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setProfileOpen(false);
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-[#FAF8FF]">
      <nav className="flex h-[78px] w-full items-center justify-between px-5 sm:px-8 md:px-[5.5%]">
        
        {/* LOGO */}
        <Link
          href="/"
          className="group text-[25px] font-bold tracking-[-0.8px] text-[#181B29]"
        >
          <span className="inline-block transition-all duration-300 group-hover:-translate-y-[2px] group-hover:text-[#5F50BD]">
            Logo
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex lg:gap-9">
          
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-[15px] font-semibold transition-colors duration-300 ${
                  active
                    ? "text-[#5F50BD]"
                    : "text-[#181B29] hover:text-[#5F50BD]"
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#5F50BD] transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* LOG IN */}
          <Link
            href="/login"
            className="text-[14px] font-bold text-[#181B29] transition-colors hover:text-[#5F50BD]"
          >
            Log In
          </Link>

          {/* SIGN UP */}
          <Link
            href="/signup"
            style={{ color: "#ffffff" }}
            className="rounded-full bg-[#5F50BD] px-6 py-[10px] text-[15px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#4E40A8] hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            Sign Up
          </Link>

          {/* ACCOUNT / PROFILE DROPDOWN */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              aria-label="Toggle Algerian student profile"
              aria-expanded={profileOpen}
              onClick={() => setProfileOpen((prev) => !prev)}
              style={{ color: "#ffffff" }}
              className={`group relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-tr from-[#B92C40] to-[#E24C60] text-[12px] font-bold tracking-tight shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:scale-105 hover:shadow-md active:scale-95 ${
                profileOpen ? "ring-2 ring-[#5F50BD] ring-offset-2" : ""
              }`}
            >
              YB
              {/* Algerian flag badge */}
              <span
                title="Étudiant Algérien 🇩🇿"
                className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] shadow-sm ring-1 ring-[#ECE7F2]"
              >
                🇩🇿
              </span>
            </button>

            {/* FLOATING ALGERIAN PROFILE POPOVER */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-3 w-[330px] rounded-2xl border border-[#ECE7F2] bg-white p-4 shadow-[0_20px_45px_rgba(24,27,46,0.15)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* HEADER PROFILE INFO */}
                <div className="flex items-start justify-between border-b border-[#F0EDF6] pb-3.5">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div className="relative shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#B92C40] to-[#E24C60] text-[15px] font-bold text-white shadow-md">
                        YB
                      </div>
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] shadow ring-1 ring-black/5">
                        🇩🇿
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="truncate text-[14px] font-bold text-[#181B2E]">
                          Yacine Belkacem
                        </h4>
                        <span className="shrink-0 text-[11px] font-semibold text-[#8C74D9]">
                          ياسين بلقاسم
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-[#76839A] truncate">
                        Étudiant • USTHB Alger
                      </p>
                      <p className="text-[11px] text-[#A098A8] truncate">
                        yacine.belkacem@edtech.dz
                      </p>
                    </div>
                  </div>

                  {/* CLOSE "X" BUTTON */}
                  <button
                    type="button"
                    onClick={() => setProfileOpen(false)}
                    aria-label="Fermer"
                    title="Fermer (✕)"
                    className="ml-2 -mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F4F1FF] text-[#76839A] transition-all duration-200 hover:scale-110 hover:bg-[#FFE8EB] hover:text-[#FF6673]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* ALGERIAN LOCATION & CONTACT TAG */}
                <div className="my-3 flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F4F1FF] px-2.5 py-1 font-semibold text-[#5F50BD]">
                    📍 Bab Ezzouar, Alger
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF4F6] px-2.5 py-1 font-semibold text-[#B92C40]">
                    📞 +213 555 24 68 10
                  </span>
                </div>

                {/* MINI ENROLLED COURSE PROGRESS */}
                <div className="mb-3 rounded-xl bg-[#FAF8FF] p-3 border border-[#EFEBF6]">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#181B2E] truncate pr-2">
                      Graphic Design Masterclass
                    </span>
                    <span className="font-extrabold text-[#5F50BD]">72%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E0F2]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8C74D9] to-[#5F50BD]"
                      style={{ width: "72%" }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-[#76839A]">
                    <span>3 cours en cours</span>
                    <span>1 certificat DZ 🏆</span>
                  </div>
                </div>

                {/* QUICK ACTIONS */}
                <div className="flex flex-col gap-1 border-t border-[#F0EDF6] pt-2">
                  <Link
                    href="/profile"
                    onClick={() => setProfileOpen(false)}
                    style={{ color: "#ffffff" }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#5F50BD] py-2 text-[12px] font-bold shadow-sm transition-all hover:bg-[#4E40A8]"
                  >
                    <span>Voir Mon Profil Complet</span>
                    <span>→</span>
                  </Link>

                  <Link
                    href="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-[12px] font-semibold text-[#181B2E] transition-colors hover:bg-[#FAF8FF] hover:text-[#5F50BD]"
                  >
                    <span className="flex items-center gap-2">
                      <span>📚</span>
                      <span>Mes Cours & Progrès</span>
                    </span>
                    <span className="rounded-full bg-[#F0EDFF] px-2 py-0.5 text-[10px] font-bold text-[#8C74D9]">
                      3
                    </span>
                  </Link>

                  <Link
                    href="/login"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-semibold text-[#B92C40] transition-colors hover:bg-[#FFF4F6]"
                  >
                    <span>🚪</span>
                    <span>Se Déconnecter</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          style={{ color: "#ffffff" }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5F50BD] transition-all duration-300 hover:scale-105 hover:bg-[#4E40A8] active:scale-95 md:hidden"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6H20" />
              <path d="M4 12H20" />
              <path d="M4 18H20" />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          open
            ? "grid-rows-[1fr] border-t border-[#E8E5F3] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-5 py-5 sm:px-8">
            
            {/* MOBILE LINKS */}
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[15px] font-semibold transition-all duration-300 hover:translate-x-1 hover:bg-[#F0EDFF] hover:text-[#5F50BD] ${
                    active
                      ? "bg-[#F0EDFF] text-[#5F50BD]"
                      : "text-[#181B29]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* MOBILE BUTTONS */}
            <div className="mt-4 flex items-center gap-3 px-4">
              {/* LOG IN */}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[#DFDAEC] bg-white px-5 py-[9px] text-[13px] font-bold text-[#181B29] transition-all hover:border-[#8C74D9] hover:text-[#5F50BD]"
              >
                Log In
              </Link>

              {/* SIGN UP */}
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                style={{ color: "#ffffff" }}
                className="rounded-full bg-[#5F50BD] px-5 py-[10px] text-[13px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#4E40A8] hover:shadow-md"
              >
                Sign Up
              </Link>

              {/* ACCOUNT / PROFILE */}
              <Link
                href="/profile"
                aria-label="Profile"
                onClick={() => setOpen(false)}
                style={{ color: "#ffffff" }}
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#B92C40] to-[#E24C60] text-[12px] font-bold shadow-sm transition-all duration-300 hover:scale-110"
              >
                YB
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[8px]">
                  🇩🇿
                </span>
              </Link>
            </div>

            {/* MOBILE ALGERIAN STUDENT PREVIEW CARD */}
            <div className="mx-4 mt-5 rounded-2xl border border-[#ECE7F2] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#B92C40] to-[#E24C60] text-[14px] font-bold text-white shadow-sm">
                    YB
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] shadow-sm ring-1 ring-[#ECE7F2]">
                    🇩🇿
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="truncate text-[13px] font-bold text-[#181B2E]">Yacine Belkacem</h4>
                    <span className="text-[10px] font-semibold text-[#8C74D9]">ياسين بلقاسم</span>
                  </div>
                  <p className="text-[11px] text-[#76839A] truncate">USTHB Alger • Bab Ezzouar</p>
                  <p className="text-[10px] text-[#5F50BD] font-medium">3 cours en cours • 1 certificat</p>
                </div>
              </div>
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                style={{ color: "#ffffff" }}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5F50BD] py-2 text-[12px] font-bold shadow-sm hover:bg-[#4E40A8]"
              >
                <span>Accéder au Profil Étudiant Algérien</span>
                <span>🇩🇿</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}