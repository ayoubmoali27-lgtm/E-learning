import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const stats = [
  { value: "320+", label: "Curated Courses", color: "#FF6673" },
  { value: "20,000+", label: "Active Students", color: "#8C74D9" },
  { value: "98.4%", label: "Satisfaction Rate", color: "#FFB23F" },
  { value: "50+", label: "Expert Instructors", color: "#5F50BD" },
];

const values = [
  {
    title: "Accessible Education",
    description: "Quality knowledge shouldn't have geographical or financial gatekeepers. We make learning flexible on any device.",
    color: "#8C74D9",
    bg: "#EEE9FF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="14" height="11" rx="2" />
        <path d="M8 20h4M10 16v4" />
        <rect x="15" y="9" width="6" height="10" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Practical, Project-First",
    description: "Theory is only useful when applied. Our courses prioritize hands-on projects you can proudly showcase in your portfolio.",
    color: "#FF6673",
    bg: "#FFE8EB",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 17l5-5 4 3 7-8" />
        <path d="M16 7h4v4" />
      </svg>
    ),
  },
  {
    title: "Lifelong Growth",
    description: "The modern job market evolves fast. We cultivate curiosity and continuous self-improvement for every stage of your career.",
    color: "#B87B1C",
    bg: "#FFF1D9",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3 1.4 4.1L18 8.5l-4.6 1.4L12 14l-1.4-4.1L6 8.5l4.6-1.4L12 3Z" />
        <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      </svg>
    ),
  },
  {
    title: "Community & Mentorship",
    description: "Learning alone is tough. Connect with like-minded peers, receive instructor feedback, and celebrate milestone wins together.",
    color: "#5F50BD",
    bg: "#F0EDFF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const instructors = [
  {
    name: "Yasmine Mansouri",
    role: "Head of Design & Visual Arts",
    bio: "Former Art Director with 10+ years designing brand systems for leading creative agencies.",
    specialty: "Graphic Design & Branding",
    students: "8,400+",
    color: "#8C74D9",
    initials: "YM",
  },
  {
    name: "Karim Benali",
    role: "Business & Freelance Strategist",
    bio: "Top-rated independent consultant who has guided thousands of professionals to transition into freelance independence.",
    specialty: "Client Acquisition & Pricing",
    students: "6,200+",
    color: "#FFB23F",
    initials: "KB",
  },
  {
    name: "Sofiane Meziane",
    role: "Financial Analyst & Trader",
    bio: "Ex-quantitative analyst breaking down technical charting and market mechanics for everyday investors.",
    specialty: "Market Analysis & Risk",
    students: "5,100+",
    color: "#FF6673",
    initials: "SM",
  },
  {
    name: "Amel Khelifi",
    role: "Senior Data & Analytics Lead",
    bio: "Data specialist simplifying spreadsheets, automated business dashboards, and predictive decision making.",
    specialty: "Excel & Data Analytics",
    students: "9,300+",
    color: "#5F50BD",
    initials: "AK",
  },
];

export const metadata = {
  title: "About Us | EdTech Learning Platform",
  description: "Learn about our mission, our instructors, and our commitment to practical, flexible education.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FAF8FF] pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EDFF] via-[#FAF8FF] to-[#FAF8FF] py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[#FF6673]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#8C74D9]/15 blur-3xl" />
        <span className="absolute left-[15%] top-10 h-2.5 w-2.5 rounded-full bg-[#FFB23F]" />
        <span className="absolute right-[20%] top-16 h-3 w-3 rounded-full bg-[#8C74D9]" />

        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
          <div className="mx-auto max-w-[800px] text-center">
            {/* Badge & Heading */}
            <ScrollReveal direction="up" delay={0}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFE8EA] px-4 py-2 text-[11px] font-bold tracking-[0.3px] text-[#B72D3F]">
                <span className="h-2 w-2 rounded-full bg-[#FF6673]" />
                OUR MISSION & PURPOSE
                <span className="h-2 w-2 rounded-full bg-[#FF6673]" />
              </div>

              <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-[#181B2E] sm:text-[46px] lg:text-[54px]">
                Empowering Curious Minds to <span className="text-[#8170DB]">Learn Without Limits</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[660px] text-[15px] leading-[1.75] text-[#6D5364] sm:text-[16px]">
                We believe high-caliber education should be interactive, adaptable, and aligned with real-world industries. We connect passionate learners with skilled instructors from around the world.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/courses"
                  style={{ color: "#ffffff" }}
                  className="rounded-full bg-[#FF6673] px-7 py-3 text-[14px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F45161] hover:shadow-lg"
                >
                  Browse Our Courses
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#DFDAEC] bg-white px-7 py-3 text-[14px] font-bold text-[#181B2E] transition-all duration-300 hover:border-[#8C74D9] hover:text-[#5F50BD]"
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="mx-auto -mt-6 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <ScrollReveal direction="zoom" delay={80}>
          <div className="grid grid-cols-2 gap-4 rounded-[24px] border border-[#ECE6E9] bg-white p-6 shadow-[0_8px_30px_rgba(50,35,50,0.04)] sm:grid-cols-4 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  style={{ color: stat.color }}
                  className="text-[32px] font-bold tracking-tight sm:text-[38px]"
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] font-semibold text-[#76839A] sm:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* STORY & SHOWCASE SECTION */}
      <section className="mx-auto mt-24 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: TEXT */}
          <ScrollReveal direction="right" delay={100}>
            <div>
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBD3] px-4 py-1.5 text-[10px] font-bold tracking-[0.2px] text-[#8A5200]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB23F]" />
                HOW WE STARTED
              </div>

              <h2 className="text-[30px] font-bold leading-tight tracking-[-1px] text-[#181B2E] sm:text-[38px]">
                Built by Educators, Driven by <span className="text-[#8170DB]">Student Success</span>
              </h2>

              <p className="mt-5 text-[14px] leading-[1.8] text-[#6D5364]">
                Traditional online courses often leave students feeling isolated and overwhelmed with abstract theory. We decided to build a platform that focuses entirely on practical mastery: concise video lessons, hands-on design and business projects, and real instructor feedback.
              </p>

              {/* TIMELINE / HIGHLIGHTS */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFE8EB] text-[#FF6673]">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#181B2E]">Industry-Relevant Curricula</h4>
                    <p className="text-[12px] text-[#76839A]">Every syllabus is refreshed quarterly to reflect the tools and workflows used in modern companies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEE9FF] text-[#8C74D9]">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#181B2E]">Self-Paced Flexibility</h4>
                    <p className="text-[12px] text-[#76839A]">Learn whenever you want, rewatch lessons, and complete exercises at your own rhythm.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF1D9] text-[#FFB23F]">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#181B2E]">Real Career Portfolios</h4>
                    <p className="text-[12px] text-[#76839A]">Graduate with tangible assets and case studies you can immediately show to clients or employers.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: IMAGE WITH DECORATIVE ACCENTS */}
          <ScrollReveal direction="left" delay={150}>
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[35px] bg-[#DED9F6]" />
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[35px] bg-[#F5E5D7]" />

              <div className="group relative overflow-hidden rounded-[27px] border-[12px] border-white bg-[#F3F0EC] shadow-[0_12px_36px_rgba(55,40,60,0.08)]">
                <div className="relative aspect-[1.18/1] w-full overflow-hidden rounded-[16px]">
                  <Image
                    src="/images/about-learning (2).jpg"
                    alt="Students collaborating and learning together"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <span className="absolute left-6 top-8 z-20 h-3 w-3 rounded-full bg-[#FFB23F]" />
              <span className="absolute -right-2 top-6 z-20 h-10 w-10 rounded-full bg-[#FF6673]" />
              <span className="absolute -left-3 top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full bg-[#83E8A1]" />
              <span className="absolute -bottom-4 right-10 z-20 h-11 w-11 rounded-full bg-[#8170DB]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <ScrollReveal direction="up" delay={0}>
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBD3] px-4 py-1.5 text-[10px] font-bold tracking-[0.2px] text-[#8A5200]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB23F]" />
              WHAT GUIDES US
            </div>
            <h2 className="text-[30px] font-bold tracking-[-1px] text-[#181B2E] sm:text-[36px]">
              Our Core Values
            </h2>
            <p className="mt-2 text-[13px] text-[#714D58] sm:text-[14px]">
              The foundational principles behind how we build our courses and support every student.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, index) => (
            <ScrollReveal key={v.title} direction="up" delay={index * 90} className="h-full">
              <div className="group h-full rounded-[20px] border border-[#ECE6E9] bg-white p-7 shadow-[0_5px_20px_rgba(50,35,50,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDD4F6] hover:shadow-[0_12px_28px_rgba(50,35,50,0.08)]">
                <div
                  style={{ backgroundColor: v.bg, color: v.color }}
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  {v.icon}
                </div>
                <h3 className="text-[16px] font-bold text-[#181B2E]">{v.title}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.65] text-[#76839A]">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* MEET OUR INSTRUCTORS */}
      <section className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <ScrollReveal direction="up" delay={0}>
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFE8EA] px-4 py-1.5 text-[10px] font-bold tracking-[0.3px] text-[#B72D3F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6673]" />
              EXPERT EDUCATORS
            </div>
            <h2 className="text-[30px] font-bold tracking-[-1px] text-[#181B2E] sm:text-[36px]">
              Learn from Proven Mentors
            </h2>
            <p className="mt-2 text-[13px] text-[#714D58] sm:text-[14px]">
              Our instructors aren't just teachers—they are active practitioners bringing daily industry knowledge to the classroom.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((inst, index) => (
            <ScrollReveal key={inst.name} direction="up" delay={index * 90} className="h-full">
              <div className="group flex h-full flex-col rounded-[22px] border border-[#ECE6E9] bg-white p-6 shadow-[0_5px_20px_rgba(50,35,50,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(50,35,50,0.1)]">
                {/* AVATAR */}
                <div
                  style={{ backgroundColor: `${inst.color}15`, color: inst.color }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-[24px] font-bold transition-transform duration-300 group-hover:scale-105"
                >
                  {inst.initials}
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-[17px] font-bold text-[#181B2E]">{inst.name}</h3>
                  <p style={{ color: inst.color }} className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider">
                    {inst.specialty}
                  </p>
                  <p className="mt-3 text-[12px] leading-[1.6] text-[#76839A]">{inst.bio}</p>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between border-t border-[#F0ECEE] pt-4 text-[11px] text-[#736A7A]">
                    <span>Students Taught</span>
                    <span className="font-bold text-[#181B2E]">{inst.students}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto mt-24 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <ScrollReveal direction="zoom" delay={100}>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#FF6673] to-[#FF8591] p-8 text-white sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-[#8C74D9]/20 blur-2xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-[620px]">
                <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  Join 20,000+ Students
                </span>
                <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-[-0.8px] sm:text-[36px]">
                  Ready to transform your career and creative skills?
                </h2>
                <p className="mt-2 text-[14px] text-white/90">
                  Explore our catalog of hands-on courses and start learning at your own pace today.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/courses"
                  style={{ color: "#FF6673" }}
                  className="rounded-full bg-white px-7 py-3 text-[14px] font-bold shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAF8FF] hover:shadow-xl"
                >
                  Explore All Courses
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

