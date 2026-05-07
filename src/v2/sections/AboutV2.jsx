import headshot from "../../assets/orion_headshot.jpg"

export default function AboutV2() {
  return (
    <section id="about" className="py-24 md:py-32">
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
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center md:pt-4">
            <p className="text-base md:text-lg leading-relaxed text-[#333333]">
              Software engineer with a curiosity for how things work. I build across the
              full stack — JavaScript, React, Node.js, Python, and more — and stay at the
              edge of what's possible with AI-assisted development. When I'm not at my
              computer, you can find me playing Ultimate frisbee on the US national team,
              racing mountain bikes, skiing, or exploring the outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
