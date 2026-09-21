"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allCourses, getCourseById } from "../../data/coursesData";
import ScrollReveal from "../../components/ScrollReveal";

export default function CourseDetailPage({ params }) {
  // Unwrap params using React.use() for Next.js 15/16 App Router
  const resolvedParams = use(params);
  const course = getCourseById(resolvedParams.id);

  const [activeModule, setActiveModule] = useState(0);
  const [enrolled, setEnrolled] = useState(false);

  if (!course) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FAF8FF] px-5 py-20 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFE8EB] text-[24px] text-[#FF6673]">
          ⚠️
        </div>
        <h1 className="text-[28px] font-bold text-[#181B2E]">Course Not Found</h1>
        <p className="mt-2 text-[14px] text-[#76839A]">
          The course you are looking for does not exist or has been relocated.
        </p>
        <Link
          href="/courses"
          style={{ color: "#ffffff" }}
          className="mt-6 rounded-full bg-[#5F50BD] px-7 py-3 text-[14px] font-bold shadow-sm transition-all hover:bg-[#4E40A8]"
        >
          Explore All Courses
        </Link>
      </main>
    );
  }

  const relatedCourses = allCourses.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <main className="w-full bg-[#FAF8FF] pb-24">
      {/* HEADER / BREADCRUMB */}
      <section className="border-b border-[#ECE7F2] bg-white py-4">
        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-2 px-5 text-[12px] font-medium text-[#76839A] sm:px-8 lg:px-[6%]">
          <Link href="/" className="hover:text-[#5F50BD]">
            Home
          </Link>
          <span>›</span>
          <Link href="/courses" className="hover:text-[#5F50BD]">
            Courses
          </Link>
          <span>›</span>
          <span className="font-semibold text-[#181B2E] truncate max-w-[220px] sm:max-w-none">
            {course.title}
          </span>
        </div>
      </section>

      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#181B2E] to-[#25283D] py-12 text-white sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#8C74D9]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-[#FF6673]/20 blur-3xl" />

        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 items-center">
            {/* LEFT: COURSE HERO INFO */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  style={{ backgroundColor: course.color }}
                  className="rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                >
                  {course.category}
                </span>
                {course.badge && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    ★ {course.badge}
                  </span>
                )}
                <span className="text-[12px] text-white/70">• {course.level}</span>
              </div>

              <h1 className="mt-4 text-[30px] font-bold leading-tight tracking-[-1px] sm:text-[38px] lg:text-[44px]">
                {course.title}
              </h1>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#D8D6E2] sm:text-[16px]">
                {course.fullDescription}
              </p>

              {/* RATING & STATS */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[13px]">
                <div className="flex items-center gap-1.5 font-bold text-[#FFB23F]">
                  <span>★</span>
                  <span>{course.rating}</span>
                  <span className="font-normal text-white/70">({course.reviews} ratings)</span>
                </div>

                <div className="flex items-center gap-1 text-white/80">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-1 text-white/80">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M10 9l5 3-5 3V9z" />
                  </svg>
                  <span>{course.lessons} Lessons</span>
                </div>

                <div className="text-white/70">
                  🌐 {course.language}
                </div>
              </div>

              {/* INSTRUCTOR MINI INFO */}
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  style={{ backgroundColor: course.instructor.avatarBg }}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm"
                >
                  {course.instructor.avatar}
                </div>
                <div>
                  <p className="text-[11px] text-white/60">Created by</p>
                  <p className="text-[13px] font-bold text-white">{course.instructor.name}</p>
                </div>
              </div>
            </div>

            {/* RIGHT: DESKTOP CARD PREVIEW */}
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-[24px] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-video w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6673] text-white shadow-lg transition-transform hover:scale-110">
                      ▶
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + FLOATING SIDEBAR */}
      <section className="mx-auto mt-10 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-14">
          
          {/* LEFT: DETAILED SYLLABUS, OBJECTIVES, INSTRUCTOR */}
          <div className="space-y-12">
            
            {/* WHAT YOU'LL LEARN */}
            <ScrollReveal direction="up" delay={0}>
              <div className="rounded-[24px] border border-[#ECE7F2] bg-white p-7 shadow-[0_4px_25px_rgba(50,35,50,0.03)] sm:p-8">
                <h2 className="text-[20px] font-bold text-[#181B2E]">What You'll Learn</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {course.learningObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAFBF3] text-[12px] font-bold text-[#227B44]">
                        ✓
                      </div>
                      <p className="text-[13px] leading-[1.6] text-[#4F4B5C]">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CURRICULUM SYLLABUS */}
            <ScrollReveal direction="up" delay={50}>
              <div className="rounded-[24px] border border-[#ECE7F2] bg-white p-7 shadow-[0_4px_25px_rgba(50,35,50,0.03)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0ECEF] pb-5">
                  <div>
                    <h2 className="text-[20px] font-bold text-[#181B2E]">Course Curriculum</h2>
                    <p className="mt-1 text-[12px] text-[#76839A]">
                      {course.curriculum.length} modules • {course.lessons} total lessons • {course.duration}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModule(activeModule === -1 ? 0 : -1)}
                    className="text-[12px] font-bold text-[#5F50BD] hover:underline"
                  >
                    {activeModule === -1 ? "Expand All Modules" : "Collapse Modules"}
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  {course.curriculum.map((mod, idx) => {
                    const isOpen = activeModule === idx || activeModule === -1;
                    return (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-[16px] border border-[#ECE6E9] transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveModule(isOpen ? -2 : idx)}
                          className="flex w-full items-center justify-between bg-[#FAF8FF] p-4 text-left transition-colors hover:bg-[#F0EDFF]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#5F50BD] shadow-sm">
                              0{idx + 1}
                            </span>
                            <span className="text-[14px] font-bold text-[#181B2E]">
                              {mod.module}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-[12px] text-[#76839A]">
                            <span>{mod.duration}</span>
                            <span className="text-[14px] font-bold text-[#5F50BD]">
                              {isOpen ? "−" : "+"}
                            </span>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="divide-y divide-[#F4F1F5] bg-white px-5 py-2">
                            {mod.lessons.map((lesson, lIdx) => (
                              <div
                                key={lIdx}
                                className="flex items-center justify-between py-3 text-[13px] text-[#55434A]"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-[#8C74D9]">▶</span>
                                  <span>{lesson}</span>
                                </div>
                                <span className="text-[11px] text-[#9A909B]">Preview</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* REQUIREMENTS */}
            <ScrollReveal direction="up" delay={50}>
              <div className="rounded-[24px] border border-[#ECE7F2] bg-white p-7 shadow-[0_4px_25px_rgba(50,35,50,0.03)] sm:p-8">
                <h2 className="text-[20px] font-bold text-[#181B2E]">Prerequisites & Requirements</h2>
                <ul className="mt-4 space-y-2 text-[13px] text-[#6D5364]">
                  {course.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6673]" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* INSTRUCTOR FULL BIO */}
            <ScrollReveal direction="up" delay={50}>
              <div className="rounded-[24px] border border-[#ECE7F2] bg-white p-7 shadow-[0_4px_25px_rgba(50,35,50,0.03)] sm:p-8">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#8C74D9]">
                  Meet Your Instructor
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div
                    style={{ backgroundColor: `${course.instructor.avatarBg}15`, color: course.instructor.avatarBg }}
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-[26px] font-bold shadow-sm"
                  >
                    {course.instructor.avatar}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#181B2E]">{course.instructor.name}</h3>
                    <p style={{ color: course.instructor.avatarBg }} className="text-[12px] font-semibold">
                      {course.instructor.role}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-[12px] text-[#76839A]">
                      <span>★ 4.9 Instructor Rating</span>
                      <span>•</span>
                      <span>{course.instructor.studentsCount} Students</span>
                      <span>•</span>
                      <span>{course.instructor.coursesCount} Courses</span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[13px] leading-[1.75] text-[#6D5364] border-t border-[#F0ECEF] pt-4">
                  {course.instructor.bio}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: FLOATING PURCHASE CARD */}
          <div className="lg:sticky lg:top-8 self-start space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-[#DFDAEC] bg-white p-6 shadow-[0_12px_40px_rgba(50,35,50,0.08)] sm:p-8">
              {/* IMAGE FOR MOBILE */}
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-[18px] lg:hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* PRICING */}
              <div className="flex items-baseline gap-3">
                <span className="text-[34px] font-bold text-[#181B2E]">{course.price}</span>
                <span className="text-[16px] text-[#9A909B] line-through">{course.originalPrice}</span>
                <span className="rounded-full bg-[#FFE8EB] px-2.5 py-0.5 text-[11px] font-bold text-[#FF6673]">
                  50% OFF
                </span>
              </div>

              <p className="mt-1 text-[11px] text-[#76839A]">⏰ Special promotion ends soon</p>

              {/* ENROLL BUTTON */}
              <div className="mt-6 space-y-3">
                {enrolled ? (
                  <div className="rounded-2xl bg-[#EAFBF3] p-4 text-center border border-[#BCECD4]">
                    <p className="text-[14px] font-bold text-[#126231]">✓ You are enrolled in this course!</p>
                    <Link
                      href="/courses"
                      className="mt-2 inline-block text-[12px] font-semibold text-[#5F50BD] hover:underline"
                    >
                      Start Lesson 1 Now
                    </Link>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setEnrolled(true)}
                    style={{ color: "#ffffff" }}
                    className="w-full rounded-full bg-[#5F50BD] py-3.5 text-[14px] font-bold shadow-md transition-all duration-300 hover:bg-[#4E40A8] hover:shadow-lg active:scale-95"
                  >
                    Enroll in Course Now
                  </button>
                )}

                <Link
                  href="/signup"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#DFDAEC] py-3 text-[13px] font-bold text-[#181B2E] transition-colors hover:border-[#8C74D9] hover:text-[#5F50BD]"
                >
                  Create Account to Save
                </Link>
              </div>

              <div className="mt-5 text-center text-[11px] text-[#9A909B]">
                🔒 30-Day Full Money-Back Guarantee
              </div>

              {/* WHAT'S INCLUDED */}
              <div className="mt-7 border-t border-[#F0ECEF] pt-6">
                <h4 className="text-[13px] font-bold text-[#181B2E]">This course includes:</h4>
                <div className="mt-3 space-y-2.5">
                  {course.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[12px] text-[#55434A]">
                      <span className="text-[#34C759]">✔</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SHARE LINK */}
              <div className="mt-7 border-t border-[#F0ECEF] pt-4 text-center">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText?.(window.location.href);
                    alert("Course link copied to clipboard!");
                  }}
                  className="text-[12px] font-semibold text-[#5F50BD] hover:underline"
                >
                  🔗 Share this course with friends
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED COURSES */}
        <section className="mt-24 border-t border-[#ECE7F2] pt-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-[24px] font-bold text-[#181B2E] sm:text-[28px]">
                Learners Also Viewed
              </h2>
              <p className="mt-1 text-[13px] text-[#76839A]">
                Explore related subjects and expand your skillset.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-[13px] font-bold text-[#5F50BD] hover:underline"
            >
              See All Courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((rc) => (
              <Link
                key={rc.id}
                href={`/courses/${rc.id}`}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#ECE6E9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-[180px] w-full overflow-hidden bg-[#F3EEF3]">
                  <Image
                    src={rc.image}
                    alt={rc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#5B5F75] shadow-sm">
                    {rc.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-[#736A7A]">
                    <span>{rc.lessons} Lessons</span>
                    <span className="font-bold text-[#FFB23F]">★ {rc.rating}</span>
                  </div>
                  <h3 className="mt-2 text-[15px] font-bold leading-snug text-[#181B2E] group-hover:text-[#5F50BD]">
                    {rc.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between border-t border-[#F0ECEF] pt-3 text-[13px] font-bold text-[#181B2E]">
                    <span>{rc.price}</span>
                    <span className="text-[11px] font-semibold text-[#5F50BD]">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

