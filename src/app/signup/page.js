import AuthCard from "../components/AuthCard";
import Link from "next/link";

export const metadata = {
  title: "Sign Up | EdTech Learning Platform",
  description: "Create an account and start learning with world-class instructors.",
};

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-[calc(100vh-78px)] w-full items-center justify-center overflow-hidden bg-[#FAF8FF] px-5 py-16 sm:px-8">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#8C74D9]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#FF6673]/10 blur-3xl" />
      <span className="absolute left-[8%] top-20 h-2.5 w-2.5 rounded-full bg-[#FF6673]" />
      <span className="absolute right-[14%] top-24 h-3 w-3 rounded-full bg-[#FFB23F]" />
      <span className="absolute bottom-24 right-[10%] h-3.5 w-3.5 rounded-full bg-[#8C74D9]" />

      <div className="relative z-10 w-full">
        <AuthCard initialMode="signup" />
      </div>
    </main>
  );
}

