import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
];

const courses = [
  { name: "Graphic Design", href: "/courses/graphic-design" },
  { name: "Canva", href: "/courses/canva" },
  { name: "Freelancing", href: "/courses/freelancing" },
  { name: "Trading", href: "/courses/trading" },
  { name: "Video Editing", href: "/courses/video-editing" },
  { name: "Excel", href: "/courses/excel" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#181B2E] text-white">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#FF6673]/10" />
      <div className="pointer-events-none absolute -bottom-24 right-[10%] h-52 w-52 rounded-full bg-[#8C74D9]/10" />

      <span className="absolute right-[8%] top-12 h-2 w-2 rounded-full bg-[#FFB23F]" />
      <span className="absolute left-[42%] top-10 h-2 w-2 rounded-full bg-[#FF6673]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-7 pt-14 sm:px-8 lg:px-[6%] lg:pt-16">
        
        {/* TOP */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-14">
          
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-block text-[24px] font-bold tracking-[-1px] text-white transition-colors duration-300 hover:text-[#FF6673]"
            >
              Logo
            </Link>

            <p className="mt-4 max-w-[290px] text-[12px] leading-[1.8] text-[#B8BAC7]">
              Learn practical skills, grow your knowledge, and build your
              future with flexible online courses designed for real-world
              success.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6673]"
              >
                <span className="text-[15px] font-bold">f</span>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8C74D9]"
              >
                <span className="text-[13px] font-bold">X</span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB23F]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[13px] font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group w-fit text-[11px] text-[#B8BAC7] transition-all duration-300 hover:translate-x-1 hover:text-[#FF6673]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-[13px] font-bold text-white">
              Popular Courses
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {courses.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="w-fit text-[11px] text-[#B8BAC7] transition-all duration-300 hover:translate-x-1 hover:text-[#8C74D9]"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[13px] font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              
              {/* Location */}
              <div className="flex gap-3">
                <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF6673]/15 text-[#FF6673]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <p className="text-[11px] leading-[1.6] text-[#B8BAC7]">
                  123 Learning Avenue
                  <br />
                  New York, NY 10001
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 text-[11px] text-[#B8BAC7] transition-colors hover:text-white"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8C74D9]/15 text-[#A897EF] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                hello@example.com
              </a>

              {/* Phone */}
              <a
                href="tel:+12125551234"
                className="group flex items-center gap-3 text-[11px] text-[#B8BAC7] transition-colors hover:text-white"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB23F]/15 text-[#FFB23F] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                +1 (212) 555-1234
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 text-[10px] text-[#898C9E] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Logo. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/terms"
              className="transition-colors hover:text-[#FF6673]"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#FF6673]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/cookies"
              className="transition-colors hover:text-[#FF6673]"
            >
              Cookie Policy
            </Link>

            <Link
              href="/sitemap"
              className="transition-colors hover:text-[#FF6673]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}