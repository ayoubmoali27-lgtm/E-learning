"use client";

import { useRef, useState } from "react";

const stats = [
  {
    value: "320+",
    label: "Courses",
    color: "#FF6673",
  },
  {
    value: "100%",
    label: "Flexible Learning",
    color: "#8C74D9",
  },
  {
    value: "20K+",
    label: "Happy Students",
    color: "#FF6673",
  },
  {
    value: "980+",
    label: "5-Star Reviews",
    color: "#8C74D9",
  },
];

export default function LearningAction() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative w-full bg-[#FFFDFC] py-20 sm:py-24">
      
      {/* Decorative dots */}
      <span className="absolute left-[7%] top-[45%] hidden h-[9px] w-[9px] rounded-full bg-[#9DEBAF] lg:block" />
      <span className="absolute right-[25%] top-[9%] h-[9px] w-[9px] rounded-full bg-[#FFB23F]" />

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[6%]">
        
        {/* HEADER */}
        <div className="mx-auto mb-14 text-center">
          
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBD3] px-4 py-2 text-[10px] font-bold tracking-[0.2px] text-[#8A5200]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#8C74D9]" />
            DISCOVER OUR PLATFORM
            <span className="h-[6px] w-[6px] rounded-full bg-[#FFB23F]" />
          </div>

          <h2 className="text-[30px] font-bold tracking-[-1px] text-[#181B2E] sm:text-[36px]">
            See Learning in Action
          </h2>

          <p className="mx-auto mt-2 max-w-[650px] text-[13px] leading-[1.6] text-[#718096] sm:text-[14px]">
            Discover how our platform helps learners build valuable skills and
            achieve their ambitions.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:gap-10">
          
          {/* VIDEO */}
          <div className="group relative overflow-hidden rounded-[20px] bg-[#EAE7EA] shadow-sm">
            <video
              ref={videoRef}
              src="/videos/platform-overview.mp4"
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="aspect-video w-full object-cover"
            />

            {/* Video dark overlay */}
            {!playing && (
              <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/5" />
            )}

            {/* PLAY BUTTON */}
            {!playing && (
              <button
                type="button"
                onClick={toggleVideo}
                aria-label="Play platform overview"
                className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF6673] text-white shadow-[0_10px_30px_rgba(255,102,115,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#F45262] active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}

            {/* Click video to pause */}
            {playing && (
              <button
                type="button"
                onClick={toggleVideo}
                aria-label="Pause platform overview"
                className="absolute inset-0 z-10 cursor-pointer"
              />
            )}

            {/* VIDEO LABEL */}
            <div className="pointer-events-none absolute bottom-3 left-4 z-20 flex items-center gap-1.5 rounded-full bg-[#25242A]/85 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur-sm">
              <span className="h-[5px] w-[5px] rounded-full bg-[#9DEBAF]" />
              Platform Overview
            </div>
          </div>

          {/* STATS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex min-h-[105px] items-center rounded-[16px] border border-[#EEE6E8] bg-white px-6 shadow-[0_4px_15px_rgba(60,40,50,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(60,40,50,0.09)]"
              >
                {/* Color line */}
                <span
                  style={{ backgroundColor: stat.color }}
                  className="mr-4 h-[43px] w-[4px] rounded-full transition-all duration-300 group-hover:h-[55px]"
                />

                <div>
                  <p className="text-[27px] font-bold leading-none tracking-[-1px] text-[#08142F] sm:text-[30px]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[11px] text-[#76839A]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}