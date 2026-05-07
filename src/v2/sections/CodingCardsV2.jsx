import { codingWorks } from "../../data/works"

export default function CodingCardsV2() {
  return (
    <section id="coding" className="py-24 md:py-32 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-12">
          Coding Projects
        </p>

        <div className="grid md:grid-cols-2 gap-0">
          {codingWorks.map((work, i) => (
            <div
              key={work.slug}
              className={`group py-8 px-0 md:px-6 border-t border-[#E5E5E5] ${
                i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              }`}
            >
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:opacity-50 transition-opacity duration-200">
                {work.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#555555] mb-4">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-display text-[10px] font-semibold uppercase tracking-[0.15em] border border-[#DEDEDE] px-2.5 py-1 text-[#777777]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {work.links.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest hover:opacity-50 transition-opacity duration-200"
                  >
                    {label}
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
