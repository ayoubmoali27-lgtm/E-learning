import Hero from "./components/HeroSection";
import Categories from "./components/Category";
import Courses from "./components/Courses";
import LearningAction from "./components/LearningAction";
import About from "./components/About";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full bg-[#FAF8FF]">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[6%]">

        {/* HERO */}
        <ScrollReveal direction="up" duration={800}>
          <Hero />
        </ScrollReveal>

        {/* CATEGORIES */}
        <ScrollReveal direction="up" duration={800}>
          <Categories />
        </ScrollReveal>

        {/* COURSES */}
        <ScrollReveal direction="up" duration={800}>
          <Courses />
        </ScrollReveal>

        {/* LEARNING ACTION */}
        <ScrollReveal direction="left" duration={850}>
          <LearningAction />
        </ScrollReveal>

        {/* ABOUT */}
        <ScrollReveal direction="right" duration={850}>
          <About />
        </ScrollReveal>

      </div>
    </main>
  );
}