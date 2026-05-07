import { Link as RouterLink } from "react-router-dom"

export default function HeroV2({ skipAnimation = false }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-12 pt-16"
    >
      <h1 className={`font-display text-[clamp(3rem,10vw,7rem)] font-extrabold tracking-tight leading-none mb-4 overflow-hidden ${skipAnimation ? "" : "animate-wipe-in"}`}>
        Orion Cable
      </h1>

      <p className={`text-lg md:text-xl text-[#6B6B6B] mb-14 max-w-md ${skipAnimation ? "" : "animate-wipe-in-delay"}`}>
        Software engineer. I like to build things —<br className="hidden md:block" /> in code and with my hands.
      </p>

      <div className={`${skipAnimation ? "" : "animate-fade-up-delay"} flex items-center gap-10`}>
        <RouterLink
          to="/building"
          className="group flex flex-col gap-1.5"
        >
          <span className="inline-flex items-center gap-2 text-sm font-display font-semibold tracking-widest uppercase text-[#111111]">
            Building
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
          <span className="block h-[1.5px] bg-[#111111] w-0 group-hover:w-full transition-all duration-300 ease-out" />
        </RouterLink>
        <RouterLink
          to="/coding"
          className="group flex flex-col gap-1.5"
        >
          <span className="inline-flex items-center gap-2 text-sm font-display font-semibold tracking-widest uppercase text-[#111111]">
            Coding
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
          <span className="block h-[1.5px] bg-[#111111] w-0 group-hover:w-full transition-all duration-300 ease-out" />
        </RouterLink>
      </div>

      {/* Subtle index marker */}
      <span className="absolute bottom-8 left-6 md:left-12 text-xs text-[#C0C0C0] font-display tracking-widest select-none">
        01 / PORTFOLIO
      </span>
    </section>
  )
}
