import { useEffect } from "react"
import { codingWorks } from "../../data/works"

export default function CodingPageV2() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-12">
          Coding Projects
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {codingWorks.map((work, i) => (
            <a
              key={work.slug}
              href={work.links[0]?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#F4F4F4] hover:bg-[#EFEFEF] transition-colors duration-300 p-6 flex flex-col cursor-pointer"
            >
              {/* Index + tags row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-[#E4E4E4] group-hover:bg-[#DADADA] transition-colors duration-300 px-2 py-0.5 text-[#666666] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[11px] text-[#BBBBBB] ml-4 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:opacity-60 transition-opacity duration-200">
                {work.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#555555] mb-6 flex-1">
                {work.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {work.links.map(({ label, url }) => (
                  <span
                    key={url}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#444444] group-hover:text-[#111111] transition-colors duration-200"
                  >
                    <span className="text-[#AAAAAA]">~/</span>{label}
                    <svg width="9" height="9" viewBox="0 0 20 20" fill="currentColor" className="opacity-50">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
