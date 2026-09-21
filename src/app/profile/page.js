"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const enrolledCourses = [
  {
    id: "graphic-design",
    title: "Graphic Design Masterclass",
    instructor: "Yasmine Mansouri",
    progress: 72,
    completedLessons: 20,
    totalLessons: 28,
    image: "/images/courses/graphic-design.jpg",
    category: "Design",
    color: "#8C74D9",
  },
  {
    id: "freelance",
    title: "Freelance Mastery & Client Acquisition",
    instructor: "Karim Benali",
    progress: 45,
    completedLessons: 10,
    totalLessons: 22,
    image: "/images/courses/freelance.jpg",
    category: "Business",
    color: "#FFB23F",
  },
  {
    id: "video-editing",
    title: "Professional Video Editing Suite",
    instructor: "Anis Dahmani",
    progress: 15,
    completedLessons: 4,
    totalLessons: 26,
    image: "/images/courses/video-editing.jpg",
    category: "Creative",
    color: "#FF6673",
  },
];

const certificates = [
  {
    id: "DZ-CERT-2025-9912",
    courseTitle: "Canva Design & Social Branding",
    instructor: "Lina Haddad",
    issueDate: "15 Novembre 2025",
    grade: "98% (Mention Très Bien)",
    badgeColor: "#FF6673",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("courses"); // 'courses' | 'certificates' | 'settings'
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Yacine Belkacem",
    arabicName: "ياسين بلقاسم",
    email: "yacine.belkacem@edtech.dz",
    phone: "+213 (0) 555 24 68 10",
    city: "Bab Ezzouar, Alger",
    country: "Algérie 🇩🇿",
    university: "USTHB — Faculté d'Informatique",
    bio: "Étudiant passionné par le UI/UX design, le développement web et le freelancing en Algérie. Objectif: lancer mon studio créatif.",
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profil mis à jour avec succès!");
  };

  return (
    <main className="w-full bg-[#FAF8FF] pb-24">
      {/* COVER & PROFILE HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#181B2E] via-[#2D2A4A] to-[#181B2E] pb-16 pt-12 text-white">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-[#FF6673]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[#8C74D9]/25 blur-3xl" />

        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* AVATAR + MAIN INFO */}
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
              {/* AVATAR BADGE */}
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#B92C40] to-[#E24C60] text-[28px] font-bold text-white shadow-xl ring-4 ring-white/20">
                  YB
                </div>
                <span
                  title="Algerian Student"
                  className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[16px] shadow-md"
                >
                  🇩🇿
                </span>
              </div>

              {/* NAME & LABELS */}
              <div className="text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <h1 className="text-[26px] font-bold tracking-tight text-white sm:text-[32px]">
                    {profile.fullName}
                  </h1>
                  <span className="text-[16px] text-white/70 font-semibold">
                    ({profile.arabicName})
                  </span>
                  <span className="rounded-full bg-[#34C759]/20 px-3 py-0.5 text-[11px] font-bold text-[#4ADE80] backdrop-blur-sm">
                    Étudiant Actif
                  </span>
                </div>

                <p className="mt-1 text-[13px] text-[#D0CDE0]">
                  🎓 {profile.university}
                </p>

                <p className="mt-1 text-[12px] text-[#A6A2BF]">
                  📍 {profile.city}, {profile.country} • Membre depuis Sept 2024
                </p>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href="/courses"
                style={{ color: "#ffffff" }}
                className="rounded-full bg-[#5F50BD] px-6 py-2.5 text-[13px] font-bold shadow-md transition-all hover:bg-[#4E40A8] hover:shadow-lg"
              >
                Explorer Cours
              </Link>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("settings");
                  setIsEditing(true);
                }}
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-white/20"
              >
                Modifier Profil
              </button>
            </div>
          </div>

          {/* STATS COUNTERS */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div>
              <p className="text-[28px] font-bold text-[#FFB23F]">3</p>
              <p className="text-[12px] text-white/70">Cours En Cours</p>
            </div>
            <div>
              <p className="text-[28px] font-bold text-[#FF6673]">34h</p>
              <p className="text-[12px] text-white/70">Temps d'Apprentissage</p>
            </div>
            <div>
              <p className="text-[28px] font-bold text-[#8C74D9]">1</p>
              <p className="text-[12px] text-white/70">Certificat Obtenu</p>
            </div>
            <div>
              <p className="text-[28px] font-bold text-[#4ADE80]">94%</p>
              <p className="text-[12px] text-white/70">Moyenne Quiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* TABS & DETAILS */}
      <section className="mx-auto -mt-6 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        {/* TAB BUTTONS */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[#ECE6E9] bg-white p-2 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab("courses")}
            className={`rounded-xl px-5 py-2.5 text-[13px] font-bold transition-all ${
              activeTab === "courses"
                ? "bg-[#5F50BD] text-white shadow-sm"
                : "text-[#5B5F75] hover:bg-[#F3F0F9] hover:text-[#181B2E]"
            }`}
          >
            Mes Cours ({enrolledCourses.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("certificates")}
            className={`rounded-xl px-5 py-2.5 text-[13px] font-bold transition-all ${
              activeTab === "certificates"
                ? "bg-[#5F50BD] text-white shadow-sm"
                : "text-[#5B5F75] hover:bg-[#F3F0F9] hover:text-[#181B2E]"
            }`}
          >
            Certificats ({certificates.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`rounded-xl px-5 py-2.5 text-[13px] font-bold transition-all ${
              activeTab === "settings"
                ? "bg-[#5F50BD] text-white shadow-sm"
                : "text-[#5B5F75] hover:bg-[#F3F0F9] hover:text-[#181B2E]"
            }`}
          >
            Coordonnées & Wilaya
          </button>
        </div>

        {/* TAB 1: ENROLLED COURSES */}
        {activeTab === "courses" && (
          <div className="mt-8 space-y-5">
            <h2 className="text-[20px] font-bold text-[#181B2E]">
              Continuer Votre Apprentissage
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="group flex flex-col overflow-hidden rounded-[22px] border border-[#ECE6E9] bg-white p-5 shadow-[0_4px_20px_rgba(50,35,50,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-[160px] w-full overflow-hidden rounded-[16px] bg-[#F3EEF3]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#5B5F75] shadow-sm">
                      {course.category}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-1 flex-col">
                    <p className="text-[11px] font-medium text-[#76839A]">
                      Formateur: {course.instructor}
                    </p>

                    <h3 className="mt-1 text-[16px] font-bold text-[#181B2E] transition-colors group-hover:text-[#5F50BD]">
                      {course.title}
                    </h3>

                    {/* PROGRESS BAR */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-[#5B5F75]">
                          {course.completedLessons}/{course.totalLessons} Leçons
                        </span>
                        <span style={{ color: course.color }}>{course.progress}%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[#F0EDF5]">
                        <div
                          style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                          className="h-full rounded-full transition-all duration-700"
                        />
                      </div>
                    </div>

                    {/* ACTION */}
                    <div className="mt-6 pt-2">
                      <Link
                        href={`/courses/${course.id}`}
                        style={{ color: "#ffffff" }}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5F50BD] py-2.5 text-[12px] font-bold shadow-sm transition-all hover:bg-[#4E40A8]"
                      >
                        <span>Continuer la leçon</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CERTIFICATES */}
        {activeTab === "certificates" && (
          <div className="mt-8 space-y-5">
            <h2 className="text-[20px] font-bold text-[#181B2E]">
              Vos Diplômes & Attestations
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="relative overflow-hidden rounded-[24px] border border-[#ECE6E9] bg-white p-7 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE8EB] text-[22px] text-[#FF6673]">
                      🎓
                    </div>
                    <span className="rounded-full bg-[#EAFBF3] px-3 py-1 text-[10px] font-bold text-[#227B44]">
                      Vérifié EdTech Algérie
                    </span>
                  </div>

                  <h3 className="mt-4 text-[18px] font-bold text-[#181B2E]">
                    {cert.courseTitle}
                  </h3>

                  <p className="mt-1 text-[12px] text-[#76839A]">
                    Instructrice: {cert.instructor} • Délivré le {cert.issueDate}
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8FF] p-3 text-[12px] font-semibold text-[#5F50BD]">
                    Résultat: {cert.grade}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#F0ECEF] pt-4 text-[11px] text-[#76839A]">
                    <span>ID: {cert.id}</span>
                    <button
                      type="button"
                      onClick={() => alert(`Téléchargement du certificat ${cert.id}...`)}
                      className="font-bold text-[#5F50BD] hover:underline"
                    >
                      Télécharger PDF ⬇
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SETTINGS & WILAYA */}
        {activeTab === "settings" && (
          <div className="mt-8 max-w-[800px] rounded-[24px] border border-[#ECE6E9] bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-[20px] font-bold text-[#181B2E]">
              Informations Personnelles & Wilaya
            </h2>
            <p className="mt-1 text-[13px] text-[#76839A]">
              Gérez vos coordonnées d'étudiant algérien et vos préférences de contact.
            </p>

            <form onSubmit={handleSaveProfile} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Nom Complet (Français)
                  </label>
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-2.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    الاسم الكامل (بالعربية)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={profile.arabicName}
                    onChange={(e) => setProfile({ ...profile, arabicName: e.target.value })}
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-2.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-2.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Numéro de Téléphone (Algérie)
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-2.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Commune & Wilaya
                  </label>
                  <input
                    type="text"
                    value={profile.city}
                    onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-2.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Université / Institut
                  </label>
                  <input
                    type="text"
                    value={profile.university}
                    onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                    className="mt-1.5 w-full rounded-full border border-[#DFDAEC] px-4 py-2.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#181B2E]">
                  Bio / Présentation
                </label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="mt-1.5 w-full rounded-[18px] border border-[#DFDAEC] p-3.5 text-[13px] text-[#181B2E] outline-none focus:border-[#8C74D9]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  style={{ color: "#ffffff" }}
                  className="rounded-full bg-[#5F50BD] px-8 py-3 text-[13px] font-bold shadow-md transition-all hover:bg-[#4E40A8]"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}

