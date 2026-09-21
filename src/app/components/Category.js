import Link from "next/link";

const topCategories = [
  {
    icon: "💼",
    title: "Business & Management",
    courses: "120+ Courses",
    bg: "#FFF1DD",
  },
  {
    icon: "📢",
    title: "Digital Marketing",
    courses: "85+ Courses",
    bg: "#FFE7EA",
  },
  {
    icon: "🗄",
    title: "Data Science",
    courses: "110+ Courses",
    bg: "#E8EEFF",
  },
  {
    icon: "✨",
    title: "Artificial Intelligence",
    courses: "75+ Courses",
    bg: "#F1E7FF",
  },
  {
    icon: "</>",
    title: "Web Development",
    courses: "140+ Courses",
    bg: "#E7F8F5",
  },
  {
    icon: "✏️",
    title: "UX Design",
    courses: "95+ Courses",
    bg: "#F4EAFE",
  },
];

const bottomCategories = [
  {
    icon: "🛡",
    title: "Cybersecurity",
    courses: "48+ Courses",
    bg: "#FFE5EA",
  },
  {
    icon: "⊕",
    title: "Foreign Languages",
    courses: "64+ Courses",
    bg: "#E6F8F1",
  },
  {
    icon: "▣",
    title: "Photography & Video",
    courses: "52+ Courses",
    bg: "#FFF2D7",
  },
  {
    icon: "▣",
    title: "Personal Development",
    courses: "88+ Courses",
    bg: "#FFE6EA",
  },
  {
    icon: "↗",
    title: "Finance & Investing",
    courses: "70+ Courses",
    bg: "#E7F6F3",
  },
  {
    icon: "⌨",
    title: "App Development",
    courses: "65+ Courses",
    bg: "#F2E7FF",
  },
];

function CategoryCard({ item }) {
  return (
    <Link
      href="/courses"
      className="group flex h-[66px] w-[260px] shrink-0 cursor-pointer items-center gap-3 rounded-full border border-[#EEE8EA] bg-white px-5 shadow-[0_5px_20px_rgba(79,55,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFCBD1] hover:shadow-[0_10px_25px_rgba(79,55,75,0.12)] sm:w-[280px]"
    >
      
      {/* Icon */}
      <div
        style={{ backgroundColor: item.bg }}
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-[15px] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
      >
        {item.icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[12px] font-bold leading-[1.2] text-[#181B2E] sm:text-[13px]">
          {item.title}
        </h3>

        <p className="mt-[2px] text-[10px] text-[#7B6A72]">
          {item.courses}
        </p>
      </div>
    </Link>
  );
}

export default function Categories() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8FF] py-20">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-80px] top-[40px] h-[180px] w-[180px] rounded-full bg-[#B7F5D0] opacity-20 blur-[55px]" />

      <div className="relative">
        
        {/* Heading */}
        <div className="mx-auto mb-14 px-5 text-center">
          
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBD3] px-4 py-2 text-[10px] font-bold text-[#8A5200]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#FFB23F]" />
            COURSE CATEGORIES
          </div>

          <div className="relative mx-auto w-fit">
            <h2 className="text-[30px] font-bold tracking-[-1px] text-[#181B2E] sm:text-[36px]">
              Explore Our Top Categories
            </h2>

            {/* Red dot */}
            <span className="absolute -right-8 top-[60%] hidden h-[11px] w-[11px] rounded-full bg-[#FF6673] sm:block" />
          </div>

          <p className="mx-auto mt-3 max-w-[630px] text-[13px] leading-[1.6] text-[#714D58] sm:text-[14px]">
            Choose from our wide range of popular subjects and start your
            journey toward mastering
            <br className="hidden sm:block" /> new in-demand skills.
          </p>
        </div>

        {/* MARQUEES */}
        <div className="relative space-y-6">
          
          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[80px] bg-gradient-to-r from-[#FAF8FF] to-transparent sm:w-[160px]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[80px] bg-gradient-to-l from-[#FAF8FF] to-transparent sm:w-[160px]" />

          {/* ROW 1: RIGHT -> LEFT */}
          <div className="overflow-hidden py-1">
            <div className="category-marquee-left flex w-max gap-5">
              {[...topCategories, ...topCategories].map((item, index) => (
                <CategoryCard
                  key={`${item.title}-${index}`}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* ROW 2: LEFT -> RIGHT */}
          <div className="overflow-hidden py-1">
            <div className="category-marquee-right flex w-max gap-5">
              {[...bottomCategories, ...bottomCategories].map(
                (item, index) => (
                  <CategoryCard
                    key={`${item.title}-${index}`}
                    item={item}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Orange decorative dot */}
      <span className="absolute bottom-[55px] left-[4%] h-[11px] w-[11px] rounded-full bg-[#FFB23F]" />
    </section>
  );
}