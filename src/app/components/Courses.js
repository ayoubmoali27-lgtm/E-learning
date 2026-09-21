import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Master Visual Design & Creative Fundamentals",
    image: "/images/courses/graphic-design.jpg",
    category: "Design",
    lessons: 24,
    rating: "4.9",
    color: "#8C74D9",
  },
  {
    id: "canva",
    title: "Canva",
    description: "Create Stunning Designs with Canva",
    image: "/images/courses/canva.jpg",
    category: "Design",
    lessons: 18,
    rating: "4.9",
    color: "#FF6673",
  },
  {
    id: "freelance",
    title: "Freelance",
    description: "Build Your Freelancing Career from Scratch",
    image: "/images/courses/freelance.jpg",
    category: "Business",
    lessons: 20,
    rating: "4.8",
    color: "#FFB23F",
  },
  {
    id: "trading",
    title: "Trading",
    description: "Learn Trading & Understand the Markets",
    image: "/images/courses/trading.jpg",
    category: "Finance",
    lessons: 30,
    rating: "4.9",
    color: "#8C74D9",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional Video Editing from Beginner to Pro",
    image: "/images/courses/video-editing.jpg",
    category: "Creative",
    lessons: 26,
    rating: "4.9",
    color: "#FF6673",
  },
  {
    id: "excel",
    title: "Excel",
    description: "Master Excel for Work, Data & Productivity",
    image: "/images/courses/excel.jpg",
    category: "Productivity",
    lessons: 22,
    rating: "4.8",
    color: "#FFB23F",
  },
];

function CourseCard({ course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group overflow-hidden rounded-[20px] border border-[#ECE6E9] bg-white shadow-[0_5px_20px_rgba(50,35,50,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(50,35,50,0.12)]"
    >
      {/* IMAGE */}
      <div className="relative h-[190px] overflow-hidden sm:h-[210px] lg:h-[190px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* CATEGORY */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[#5B5F75] shadow-sm backdrop-blur-sm">
          {course.category}
        </span>

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.03]" />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        
        {/* LESSONS + RATING */}
        <div className="flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-[#736A7A]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8C74D9"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M10 9l5 3-5 3V9z" />
            </svg>

            <span>{course.lessons} Lessons</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[#FFB23F]">★</span>
            <span className="font-bold text-[#181B29]">
              {course.rating}
            </span>
          </div>
        </div>

        {/* COURSE NAME */}
        <p
          style={{ color: course.color }}
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.7px]"
        >
          {course.title}
        </p>

        {/* TITLE */}
        <h3 className="mt-1 min-h-[48px] text-[16px] font-bold leading-[1.4] text-[#181B2E] transition-colors duration-300 group-hover:text-[#5F50BD]">
          {course.description}
        </h3>

        {/* DIVIDER */}
        <div className="my-4 h-px bg-[#F0ECEE]" />

        {/* BOTTOM */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: `${course.color}18` }}
              className="flex h-8 w-8 items-center justify-center rounded-full"
            >
              <span
                style={{ color: course.color }}
                className="text-[11px] font-bold"
              >
                {course.title.charAt(0)}
              </span>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#181B29]">
                Skill Course
              </p>
              <p className="text-[9px] text-[#9A909B]">
                Learn at your pace
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F1FF] text-[#5F50BD] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Courses() {
  return (
    <section className="w-full bg-[#FAF8FF] py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        
        {/* HEADING */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF6673]" />
              <span className="h-2 w-2 rounded-full bg-[#8C74D9]" />
              <span className="h-2 w-2 rounded-full bg-[#9DEBAF]" />
            </div>

            <h2 className="text-[30px] font-bold leading-tight tracking-[-1px] text-[#181B2E] sm:text-[36px]">
              Our Most{" "}
              <span className="text-[#8170DB]">
                Popular Courses
              </span>
            </h2>

            <p className="mt-2 text-[13px] text-[#756477]">
              Join our most popular classes and start building skills that
              matter.
            </p>
          </div>

          <Link
            href="/courses"
            className="group flex w-fit items-center gap-2 text-[13px] font-semibold text-[#8170DB] transition-colors hover:text-[#5F50BD]"
          >
            Explore Courses
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}