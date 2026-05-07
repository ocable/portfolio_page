const LINKS = [
  { label: "Email", href: "mailto:orionfcable@gmail.com" },
  { label: "GitHub", href: "https://github.com/ocable" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/orioncable/" },
  { label: "Resume", href: "https://drive.google.com/file/d/18_0uOHoGrS8en4L5M1atCYGvwsNhaTwV/view?usp=sharing" },
]

export default function ContactV2() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-12">
          Contact
        </p>

        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-14 max-w-lg">
          Let's work<br />together.
        </h2>

        <div className="flex flex-wrap gap-3">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.15em] border border-[#111111] px-6 py-3 hover:bg-[#111111] hover:text-[#FAFAFA] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-24 pb-8 flex items-center justify-between">
        <p className="font-display text-[10px] uppercase tracking-widest text-[#BBBBBB]">
          © {new Date().getFullYear()} Orion Cable
        </p>
        <p className="font-display text-[10px] uppercase tracking-widest text-[#BBBBBB]">
          Design + Build
        </p>
      </div>
    </section>
  )
}
