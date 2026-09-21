import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#FAF8FF]">
      <div className="grid min-h-[610px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* LEFT */}
        <div className="relative z-10">
          {/* Small badge */}
          <div className="mb-7 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBD3] px-4 py-2 text-[11px] font-bold tracking-[0.2px] text-[#8A5200]">
            <span className="h-2 w-2 rounded-full bg-[#FFB23F]" />
            LEARN • GROW • SUCCEED
          </div>

          {/* Heading */}
          <h1 className="max-w-[540px] text-[42px] font-bold leading-[1.08] tracking-[-2px] text-[#181B2E] sm:text-[48px] lg:text-[54px]">
            An Investment In
            <br className="hidden sm:block" /> Knowledge Pays{" "}
            <span className="text-[#FF6673]">
              The
              <br className="hidden sm:block" /> Best Interest
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[#55434A]">
            Discover high-quality online courses taught by world-class
            instructors. Develop new skills, gain recognized credentials, and
            learn at your own pace from anywhere.
          </p>

          {/* BUTTON + RATING */}
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <Link
              href="/courses"
              className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-full bg-[#FF6673] px-7 text-[14px] font-bold !text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F45161] hover:shadow-lg active:translate-y-0 active:scale-95"
            >
              Explore Courses

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E4FF] text-[11px] font-bold text-white">
                4.9
              </div>

              <div>
                <div className="flex text-[15px] leading-none text-[#FFB23F]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="mt-1 text-[11px] leading-none text-[#6D5360]">
                  Over 12,000+ Students
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center lg:mx-0">
          
          {/* Green circle */}
          <div className="absolute -right-1 -top-12 h-[190px] w-[190px] rounded-full bg-[#9DEBAF] transition-transform duration-500 hover:scale-105 sm:h-[210px] sm:w-[210px]" />

          {/* White image area */}
          <div className="relative z-10 flex aspect-square w-full items-center justify-center bg-white">
            
            {/* Red dot */}
            <span className="absolute left-2 top-0 h-[15px] w-[15px] -translate-y-1/2 rounded-full bg-[#FF6673]" />

            {/* Student */}
            <Image
              src="/images/hero-student.png"
              alt="Student holding books and a tablet"
              width={470}
              height={520}
              priority
              className="relative z-10 h-[92%] w-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            />

            {/* Purple circle */}
            <div className="absolute -bottom-6 -left-5 h-[74px] w-[74px] rounded-full bg-[#8170DB]" />

            {/* Orange dot */}
            <div className="absolute -bottom-[-14px] -right-2 h-[18px] w-[18px] rounded-full bg-[#FFAD33]" />
          </div>
        </div>
      </div>
    </section>
  );
}