"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const faqs = [
  {
    question: "How do online courses work on your platform?",
    answer:
      "All our courses are 100% self-paced. Once enrolled, you receive instant lifetime access to video lectures, downloadable resource files, quizzes, and community forums on any desktop, tablet, or smartphone.",
  },
  {
    question: "Do I receive a recognized certificate upon completion?",
    answer:
      "Yes! Upon successfully finishing all lessons and assignments for a course, you receive a verifiable, shareable digital certificate that can be added to your LinkedIn profile or resume.",
  },
  {
    question: "What is your refund or satisfaction policy?",
    answer:
      "We offer a 30-day money-back guarantee on all courses. If you feel the course didn't meet your expectations, contact our support team within 30 days of purchase for a full, no-questions-asked refund.",
  },
  {
    question: "Can I get personalized instructor feedback on my work?",
    answer:
      "Yes! Every course includes dedicated discussion boards and project review channels where instructors and mentors review submissions, answer questions, and provide constructive guidance.",
  },
  {
    question: "Do you offer discounts for teams and enterprises?",
    answer:
      "We offer corporate accounts and team licensing with volume discounts, admin progress tracking, and custom learning paths. Send us a message using the form above to discuss team pricing.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'submitting' | 'submitted' | 'error'
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    // Simulate sending network request
    setTimeout(() => {
      setFormStatus("submitted");
      setFormData({ name: "", email: "", subject: "general", message: "" });
    }, 900);
  };

  return (
    <main className="w-full bg-[#FAF8FF] pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EDFF] via-[#FAF8FF] to-[#FAF8FF] py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[#FF6673]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#8C74D9]/15 blur-3xl" />
        <span className="absolute left-[14%] top-10 h-2.5 w-2.5 rounded-full bg-[#FFB23F]" />
        <span className="absolute right-[18%] top-14 h-3 w-3 rounded-full bg-[#FF6673]" />

        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
          <ScrollReveal direction="up" delay={0}>
            <div className="mx-auto max-w-[760px] text-center">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFEBD3] px-4 py-2 text-[11px] font-bold tracking-[0.3px] text-[#8A5200]">
                <span className="h-2 w-2 rounded-full bg-[#8C74D9]" />
                WE'RE HERE TO HELP
                <span className="h-2 w-2 rounded-full bg-[#FFB23F]" />
              </div>

              <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-[#181B2E] sm:text-[46px] lg:text-[54px]">
                We'd Love to <span className="text-[#8170DB]">Hear From You</span>
              </h1>

              <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-[1.7] text-[#6D5364] sm:text-[16px]">
                Have a question about a course, technical issues, or corporate training? Reach out and our support specialists will respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto mt-4 w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          
          {/* LEFT: INFO CARDS */}
          <ScrollReveal direction="right" delay={100}>
            <div className="space-y-6">
              <div>
                <h2 className="text-[24px] font-bold tracking-[-0.6px] text-[#181B2E]">
                  Get in Direct Contact
                </h2>
                <p className="mt-1 text-[13px] text-[#76839A]">
                  Reach us through any of our channels or submit the inquiry form.
                </p>
              </div>

              {/* LOCATION CARD */}
              <div className="flex items-start gap-4 rounded-[20px] border border-[#ECE6E9] bg-white p-5 shadow-[0_4px_20px_rgba(50,35,50,0.03)] transition-all duration-300 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFE8EB] text-[#FF6673]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#181B2E]">Headquarters</h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[#6D5364]">
                    123 Learning Avenue, Suite 400<br />
                    New York, NY 10001, United States
                  </p>
                </div>
              </div>

              {/* EMAIL CARD */}
              <div className="flex items-start gap-4 rounded-[20px] border border-[#ECE6E9] bg-white p-5 shadow-[0_4px_20px_rgba(50,35,50,0.03)] transition-all duration-300 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEE9FF] text-[#8C74D9]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#181B2E]">Email Us</h3>
                  <p className="mt-1 text-[13px] text-[#6D5364]">General: <a href="mailto:hello@example.com" className="font-semibold text-[#5F50BD] hover:underline">hello@example.com</a></p>
                  <p className="text-[13px] text-[#6D5364]">Support: <a href="mailto:support@example.com" className="font-semibold text-[#5F50BD] hover:underline">support@example.com</a></p>
                </div>
              </div>

              {/* PHONE CARD */}
              <div className="flex items-start gap-4 rounded-[20px] border border-[#ECE6E9] bg-white p-5 shadow-[0_4px_20px_rgba(50,35,50,0.03)] transition-all duration-300 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1D9] text-[#FFB23F]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#181B2E]">Phone Support</h3>
                  <p className="mt-1 text-[13px] text-[#6D5364]">+1 (212) 555-1234</p>
                  <p className="text-[11px] text-[#9A909B]">Mon – Fri, 9:00 AM – 6:00 PM EST</p>
                </div>
              </div>

              {/* QUICK CALLOUT */}
              <div className="rounded-[22px] bg-[#FAF3F5] p-6 border border-[#F2DEE4]">
                <h4 className="text-[14px] font-bold text-[#B72D3F]">Need Rapid Support?</h4>
                <p className="mt-1 text-[12px] leading-[1.6] text-[#714D58]">
                  Enrolled students can log in and submit priority tickets directly through the student portal for an average response time of under 2 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: INTERACTIVE CONTACT FORM */}
          <ScrollReveal direction="left" delay={150}>
            <div className="rounded-[28px] border border-[#ECE7F2] bg-white p-7 shadow-[0_10px_35px_rgba(50,35,50,0.05)] sm:p-10">
            <h3 className="text-[22px] font-bold tracking-[-0.5px] text-[#181B2E]">
              Send Us a Message
            </h3>
            <p className="mt-1 text-[13px] text-[#76839A]">
              Fill out the form below and we'll reply to your email promptly.
            </p>

            {formStatus === "submitted" ? (
              <div className="my-8 rounded-[20px] bg-[#EAFBF3] p-8 text-center border border-[#BCECD4]">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#34C759] text-white">
                  ✓
                </div>
                <h4 className="text-[18px] font-bold text-[#126231]">Message Sent Successfully!</h4>
                <p className="mt-2 text-[13px] text-[#227B44]">
                  Thank you for reaching out. One of our course advisors will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 rounded-full bg-[#34C759] px-6 py-2 text-[13px] font-bold text-white shadow-sm hover:bg-[#2EB34E]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {formStatus === "error" && (
                  <div className="rounded-xl bg-[#FFE8EB] p-3 text-[12px] font-semibold text-[#D93043]">
                    Please fill out all required fields before sending.
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[12px] font-bold text-[#181B2E]">
                      Your Name <span className="text-[#FF6673]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Amine Benali"
                      className="mt-2 w-full rounded-full border border-[#DFDAEC] px-5 py-3 text-[13px] text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#181B2E]">
                      Email Address <span className="text-[#FF6673]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="mt-2 w-full rounded-full border border-[#DFDAEC] px-5 py-3 text-[13px] text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    What can we help you with?
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-2 w-full rounded-full border border-[#DFDAEC] bg-white px-5 py-3 text-[13px] font-semibold text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                  >
                    <option value="general">General Question</option>
                    <option value="course-advice">Course Recommendation & Guidance</option>
                    <option value="technical">Technical Support / Account Access</option>
                    <option value="teams">Team & Corporate Training</option>
                    <option value="instructor">Become an Instructor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#181B2E]">
                    Message <span className="text-[#FF6673]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your learning goals or question..."
                    className="mt-2 w-full rounded-[20px] border border-[#DFDAEC] p-4 text-[13px] text-[#181B2E] outline-none transition-colors focus:border-[#8C74D9] focus:ring-2 focus:ring-[#8C74D9]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  style={{ color: "#ffffff" }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5F50BD] py-3.5 text-[14px] font-bold shadow-md transition-all duration-300 hover:bg-[#4E40A8] hover:shadow-lg disabled:opacity-60"
                >
                  {formStatus === "submitting" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto mt-24 w-full max-w-[1000px] px-5 sm:px-8">
        <ScrollReveal direction="up" delay={0}>
          <div className="mx-auto mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBD3] px-4 py-1.5 text-[10px] font-bold tracking-[0.2px] text-[#8A5200]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB23F]" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-[28px] font-bold tracking-[-0.8px] text-[#181B2E] sm:text-[34px]">
              Common Inquiries
            </h2>
            <p className="mt-2 text-[13px] text-[#714D58] sm:text-[14px]">
              Quick answers to the questions we receive most frequently.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[18px] border border-[#ECE6E9] bg-white transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-[15px] font-bold text-[#181B2E] transition-colors hover:text-[#5F50BD]"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F4F1FF] text-[16px] text-[#5F50BD] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[13px] leading-[1.7] text-[#6D5364] border-t border-[#F8F6FA]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

