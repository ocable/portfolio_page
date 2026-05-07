import { Link } from "react-scroll"

export default function HeroV2() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-12 pt-16"
    >
      {/* Wipe-in reveal on the name */}
      <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-extrabold tracking-tight leading-none mb-4 animate-wipe-in overflow-hidden">
        Orion Cable
      </h1>

      <p className="text-lg md:text-xl text-[#6B6B6B] mb-14 max-w-md animate-wipe-in-delay">
        Software engineer. I like to build things —<br className="hidden md:block" /> in code and with my hands.
      </p>

      <div className="animate-fade-up-delay flex items-center gap-6">
        <Link
          to="about"
          smooth
          duration={800}
          offset={-64}
          className="inline-flex items-center gap-2 text-sm font-medium border border-[#111111] px-6 py-3 cursor-pointer hover:bg-[#111111] hover:text-[#FAFAFA] transition-colors duration-200"
        >
          View my work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v16M12 20l-6-6M12 20l6-6" />
          </svg>
        </Link>
      </div>

      {/* Subtle index marker */}
      <span className="absolute bottom-8 left-6 md:left-12 text-xs text-[#C0C0C0] font-display tracking-widest select-none">
        01 / PORTFOLIO
      </span>
    </section>
  )
}
