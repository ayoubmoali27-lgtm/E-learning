"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

import { allCourses } from "../data/coursesData";

const categories = ["All", "Design", "Business", "Finance", "Creative", "Productivity"];
const levels = ["All Levels", "Beginner", "Intermediate", "Beginner to Pro"];

const benefits = [
  {
    title: "Self-Paced Learning",
    desc: "Study on your own schedule with lifetime access on any device.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#FF6673",
    bg: "#FFE8EB",
  },
  {
    title: "Verified Certificate",
    desc: "Earn an accredited completion certificate to showcase on LinkedIn.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 15l-3-3m0 0l3-3m-3 3h12M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      </svg>
    ),
    color: "#8C74D9",
    bg: "#EEE9FF",
  },
  {
    title: "Hands-on Projects",
    desc: "Apply real skills through practical projects built for real client work.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    color: "#FFB23F",
    bg: "#FFF1D9",
  },
  {
    title: "Expert Mentorship",
    desc: "Get personalized feedback and direct answers from veteran instructors.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#5F50BD",
    bg: "#F0EDFF",
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" || course.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesLevel =
        selectedLevel === "All Levels" || course.level.toLowerCase() === selectedLevel.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.instructor.name.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, searchQuery, selectedLevel]);

  return (
    <main className="w-full bg-[#FAF8FF] pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EDFF] via-[#FAF8FF] to-[#FAF8FF] py-16 sm:py-20">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FF6673]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#8C74D9]/15 blur-3xl" />
        <span className="absolute left-[12%] top-8 h-2.5 w-2.5 rounded-full bg-[#FFB23F]" />
        <span className="absolute right-[14%] top-14 h-3 w-3 rounded-full bg-[#FF6673]" />

        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
          <div className="mx-auto max-w-[760px] text-center">
            {/* Badge */}
            <ScrollReveal direction="up" delay={0}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFEBD3] px-4 py-2 text-[11px] font-bold tracking-[0.3px] text-[#8A5200]">
                <span className="h-2 w-2 rounded-full bg-[#FF6673]" />
                EXPAND YOUR HORIZONS
                <span className="h-2 w-2 rounded-full bg-[#8C74D9]" />
              </div>

              <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-[#181B2E] sm:text-[46px] lg:text-[52px]">
                Explore Our <span className="text-[#8170DB]">Online Courses</span>
              </h1>

              <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-[1.7] text-[#6D5364] sm:text-[16px]">
                Learn in-demand skills from industry experts. Choose from design, business, finance, and productivity courses built for real-world impact.
              </p>
            </ScrollReveal>

            {/* SEARCH BAR */}
            <ScrollReveal direction="up" delay={150}>
              <div className="relative mx-auto mt-8 max-w-[580px]">
                <div className="relative flex items-center overflow-hidden rounded-full border border-[#DFDAEC] bg-white shadow-[0_8px_30px_rgba(50,35,50,0.06)] transition-all duration-300 focus-within:border-[#8170DB] focus-within:shadow-[0_10px_35px_rgba(129,112,219,0.18)]">
                  <span className="pl-5 text-[#8C74D9]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses, skills, or instructors..."
                    className="w-full bg-transparent px-4 py-4 text-[14px] text-[#181B2E] placeholder-[#9A909B] outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="mr-2 flex h-7 w-7 items-center justify-center rounded-full text-[#9A909B] hover:bg-[#F4F1FF] hover:text-[#181B2E]"
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                  <div className="pr-2">
                    <span className="inline-flex rounded-full bg-[#8C74D9] px-4 py-2 text-[12px] font-bold text-white shadow-sm">
                      Search
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FILTER TABS & TOOLBAR */}
      <section className="mx-auto w-full max-w-[1400px] px-5 pt-8 sm:px-8 lg:px-[6%]">
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col gap-6 border-b border-[#ECE7F2] pb-6 md:flex-row md:items-center md:justify-between">
            
            {/* CATEGORY PILLS */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300 ${
                      active
                        ? "bg-[#5F50BD] text-white shadow-sm scale-105"
                        : "bg-white text-[#5B5F75] border border-[#ECE6E9] hover:border-[#8C74D9] hover:text-[#5F50BD]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* LEVEL DROPDOWN & RESULT COUNT */}
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-medium text-[#76839A]">
                Showing <span className="font-bold text-[#181B2E]">{filteredCourses.length}</span> courses
              </span>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="rounded-full border border-[#ECE6E9] bg-white px-4 py-2 text-[13px] font-semibold text-[#181B2E] outline-none transition-colors hover:border-[#8C74D9] focus:border-[#5F50BD]"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </ScrollReveal>

        {/* COURSES GRID */}
        {filteredCourses.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <ScrollReveal
                key={course.id}
                direction="up"
                delay={(index % 3) * 90}
                className="h-full"
              >
                <Link
                  href={`/courses/${course.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#ECE6E9] bg-white shadow-[0_5px_20px_rgba(50,35,50,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(50,35,50,0.12)] cursor-pointer"
                >
                  {/* COURSE IMAGE */}
                  <div className="relative h-[210px] w-full overflow-hidden bg-[#F3EEF3]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* CATEGORY BADGE */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#5B5F75] shadow-sm backdrop-blur-sm">
                      {course.category}
                    </span>

                    {/* STATUS BADGE */}
                    {course.badge && (
                      <span
                        style={{ backgroundColor: course.color }}
                        className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
                      >
                        {course.badge}
                      </span>
                    )}

                    {/* SUBTLE OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.04]" />
                  </div>

                  {/* CONTENT AREA */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* LESSONS + DURATION + RATING */}
                    <div className="flex items-center justify-between text-[11px] text-[#736A7A]">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8C74D9" strokeWidth="2">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M10 9l5 3-5 3V9z" />
                          </svg>
                          {course.lessons} Lessons
                        </span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>

                      <div className="flex items-center gap-1 font-bold text-[#181B29]">
                        <span className="text-[#FFB23F]">★</span>
                        <span>{course.rating}</span>
                        <span className="text-[10px] font-normal text-[#9A909B]">({course.reviews})</span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-3 text-[17px] font-bold leading-[1.35] text-[#181B2E] transition-colors duration-300 group-hover:text-[#5F50BD]">
                      {course.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[12px] leading-[1.6] text-[#6E6779] line-clamp-2">
                      {course.description}
                    </p>

                    {/* INSTRUCTOR */}
                    <div className="mt-5 flex items-center gap-3">
                      <div
                        style={{ backgroundColor: `${course.instructor.avatarBg}20`, color: course.instructor.avatarBg }}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold"
                      >
                        {course.instructor.avatar}
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-[#181B29]">{course.instructor.name}</p>
                        <p className="text-[10px] text-[#9A909B]">{course.instructor.role}</p>
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="my-5 h-px bg-[#F0ECEE]" />

                    {/* PRICING & CTA */}
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[20px] font-bold text-[#181B2E]">{course.price}</span>
                          <span className="text-[12px] text-[#A098A3] line-through">{course.originalPrice}</span>
                        </div>
                        <span className="text-[10px] font-semibold text-[#8C74D9]">{course.level}</span>
                      </div>

                      <span
                        style={{ color: "#ffffff" }}
                        className="rounded-full bg-[#5F50BD] px-5 py-2 text-[12px] font-bold shadow-sm transition-all duration-300 group-hover:bg-[#4E40A8] group-hover:shadow-md"
                      >
                        View Course
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* NO RESULTS */
          <div className="mx-auto my-16 max-w-[450px] rounded-[20px] border border-dashed border-[#DFDAEC] bg-white p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8EB] text-[#FF6673]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#181B2E]">No courses found</h3>
            <p className="mt-2 text-[13px] text-[#76839A]">
              We couldn't find anything matching your search criteria. Try a different keyword or clear filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLevel("All Levels");
                setSearchQuery("");
              }}
              className="mt-5 rounded-full bg-[#8C74D9] px-6 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[#7861C4]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* WHY LEARN WITH US */}
      <section className="mx-auto mt-24 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <div className="rounded-[28px] border border-[#ECE7F2] bg-white p-8 sm:p-12 shadow-[0_10px_35px_rgba(50,35,50,0.04)]">
          <ScrollReveal direction="up" delay={0}>
            <div className="mx-auto mb-12 max-w-[620px] text-center">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFE8EA] px-4 py-1.5 text-[10px] font-bold tracking-[0.3px] text-[#B72D3F]">
                <span className="h-2 w-2 rounded-full bg-[#FF6673]" />
                THE EDTECH ADVANTAGE
              </div>
              <h2 className="text-[28px] font-bold tracking-[-0.8px] text-[#181B2E] sm:text-[34px]">
                Why Choose Our Courses?
              </h2>
              <p className="mt-2 text-[13px] text-[#756477] sm:text-[14px]">
                Every curriculum is curated with industry leaders to give you practical, career-defining capabilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, index) => (
              <ScrollReveal key={b.title} direction="up" delay={index * 90}>
                <div className="group h-full rounded-[18px] border border-[#F0ECEF] bg-[#FAF8FF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#DFDAEC] hover:bg-white hover:shadow-lg">
                  <div
                    style={{ backgroundColor: b.bg, color: b.color }}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  >
                    {b.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#181B2E]">{b.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.6] text-[#76839A]">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto mt-20 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <ScrollReveal direction="zoom" delay={100}>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#5F50BD] to-[#8C74D9] p-8 text-white sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-[#FF6673]/20 blur-2xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-[620px]">
                <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  Get Started Today
                </span>
                <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-[-0.8px] sm:text-[36px]">
                  Ready to take your skill set to the next level?
                </h2>
                <p className="mt-2 text-[14px] text-white/80">
                  Join over 20,000+ motivated learners today. Unlimited access to all lessons and project files.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/signup"
                  style={{ color: "#181B2E" }}
                  className="rounded-full bg-white px-7 py-3 text-[14px] font-bold shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAF8FF] hover:shadow-xl"
                >
                  Create Free Account
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  Talk to Advisor
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

