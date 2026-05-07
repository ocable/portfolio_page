import headshot from "../../assets/orion_headshot.jpg"

const SKILLS = ["JavaScript", "React", "Node.js", "Python", "C++", "PostgreSQL"]

export default function AboutV2() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-12">
          About
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Headshot */}
          <div className="relative">
            <img
              src={headshot}
              alt="Orion Cable"
              className="w-full aspect-square object-cover grayscale"
            />
          </div>

          {/* Bio + skills */}
          <div className="flex flex-col justify-center md:pt-4">
            <p className="text-base md:text-lg leading-relaxed text-[#333333] mb-10">
              Software engineer with a curiosity for how things work. Skilled in
              JavaScript, React, Node.js, and more. When I'm not at my computer, you can
              find me playing Ultimate frisbee on the US national team, racing mountain
              bikes, skiing, or exploring the outdoors.
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="font-display text-[10px] font-semibold uppercase tracking-[0.15em] border border-[#CCCCCC] px-3 py-1.5 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
