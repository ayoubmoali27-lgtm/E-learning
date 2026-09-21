import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Accessible Education",
    description:
      "Make high-quality learning available anywhere, on any device.",
    color: "#8C74D9",
    bg: "#EEE9FF",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="14" height="11" rx="2" />
        <path d="M8 20h4M10 16v4" />
        <rect x="15" y="9" width="6" height="10" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Practical Skills",
    description:
      "Help learners develop real-world skills they can use in their careers.",
    color: "#FF6673",
    bg: "#FFE8EB",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 17l5-5 4 3 7-8" />
        <path d="M16 7h4v4" />
      </svg>
    ),
  },
  {
    title: "Lifelong Growth",
    description:
      "Create a learning experience that encourages continuous personal and professional development.",
    color: "#B87B1C",
    bg: "#FFF1D9",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m12 3 1.4 4.1L18 8.5l-4.6 1.4L12 14l-1.4-4.1L6 8.5l4.6-1.4L12 3Z" />
        <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F5FF] py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -bottom-20 left-[30%] h-[180px] w-[180px] rounded-full bg-[#DDD5FF]/20 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-[6%]">
        
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-[#FFE8EA] px-4 py-2 text-[10px] font-bold tracking-[0.3px] text-[#B72D3F]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#FF6673]" />
            ABOUT US
            <span className="h-[5px] w-[5px] rounded-full bg-[#FF6673]" />
          </div>

          {/* Heading */}
          <div className="relative w-fit">
            <h2 className="text-[31px] font-bold leading-[1.15] tracking-[-1px] text-[#181B2E] sm:text-[38px]">
              Learning{" "}
              <span className="text-[#8170DB]">
                Without Limits
              </span>
            </h2>

            <span className="absolute -right-8 -top-5 hidden h-[9px] w-[9px] rounded-full bg-[#FF6673] sm:block" />
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[570px] text-[13px] leading-[1.75] text-[#6D5364] sm:text-[14px]">
            We believe quality education should be accessible, engaging, and
            designed around the learner. Our platform connects ambitious
            students with practical knowledge and experienced instructors from
            anywhere.
          </p>

          {/* Features */}
          <div className="mt-7 space-y-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex items-center gap-4 rounded-[14px] border border-[#EAE4E9] bg-white px-4 py-3.5 shadow-[0_3px_12px_rgba(55,40,60,0.04)] transition-all duration-300 hover:translate-x-1.5 hover:border-[#DDD4F6] hover:shadow-[0_7px_18px_rgba(55,40,60,0.08)]"
              >
                {/* Icon */}
                <div
                  style={{
                    backgroundColor: feature.bg,
                    color: feature.color,
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[12px] font-bold text-[#35354A] sm:text-[13px]">
                    {feature.title}
                  </h3>

                  <p className="mt-[2px] text-[10px] leading-[1.4] text-[#8A8797] sm:text-[11px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/about"
            style={{ color: "#ffffff" }}
            className="group mt-7 inline-flex min-h-[46px] items-center justify-center gap-3 rounded-full bg-[#FF6673] px-7 text-[13px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F45161] hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            Learn More About Us

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-[600px]">
          
          {/* Soft colored back layers */}
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[35px] bg-[#DED9F6]" />
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[35px] bg-[#F5E5D7]" />

          {/* Image frame */}
          <div className="group relative overflow-hidden rounded-[27px] border-[14px] border-white bg-[#F3F0EC] shadow-[0_10px_30px_rgba(55,40,60,0.08)]">
            <div className="relative aspect-[1.18/1] w-full overflow-hidden rounded-[16px]">
              <Image
                src="/images/about-learning (2).jpg"
                alt="Students learning together"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Orange dot */}
          <span className="absolute left-5 top-7 z-20 h-[12px] w-[12px] rounded-full bg-[#FFB23F]" />

          {/* Red circle */}
          <span className="absolute right-4 top-4 z-20 h-[43px] w-[43px] rounded-full bg-[#FF6673]" />

          {/* Green dot */}
          <span className="absolute -left-2 top-1/2 z-20 h-[19px] w-[19px] -translate-y-1/2 rounded-full bg-[#83E8A1]" />

          {/* Purple circle */}
          <span className="absolute bottom-5 left-5 z-20 h-[50px] w-[50px] rounded-full bg-[#8170DB]" />

          {/* Bottom green dot */}
          <span className="absolute -bottom-5 left-1/2 z-20 h-[11px] w-[11px] rounded-full bg-[#8DDF9F]" />
        </div>
      </div>
    </section>
  );
}