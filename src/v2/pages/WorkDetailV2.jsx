import { useParams, Link } from "react-router-dom"
import { getWorkBySlug, works } from "../../data/works"

function OtherWorks({ current }) {
  const others = works
    .filter((w) => w.slug !== current.slug && w.category === current.category)
    .slice(0, 4)

  if (others.length === 0) return null

  return (
    <section className="py-16 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">
          Other Works
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {others.map((work) => (
            <Link key={work.slug} to={`/v2/works/${work.slug}`} className="group block">
              <div className="aspect-square bg-[#EBEBEB] overflow-hidden mb-2">
                {work.coverImage ? (
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-end p-2.5">
                    <span className="font-display text-[9px] font-semibold uppercase tracking-widest text-[#AAAAAA]">
                      {work.title}
                    </span>
                  </div>
                )}
              </div>
              <p className="font-display text-xs font-semibold tracking-tight group-hover:opacity-50 transition-opacity duration-200">
                {work.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WorkDetailV2() {
  const { slug } = useParams()
  const work = getWorkBySlug(slug)

  if (!work) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 gap-4">
        <p className="font-display text-sm text-[#6B6B6B] uppercase tracking-widest">Project not found</p>
        <Link to="/v2" className="text-xs underline underline-offset-4 hover:opacity-50 transition-opacity">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero image — full bleed */}
      <div className="w-full bg-[#E5E5E5] aspect-video md:aspect-[21/8]">
        {work.coverImage ? (
          <img
            src={work.coverImage}
            alt={work.title}
            className="w-full h-full object-cover grayscale"
          />
        ) : (
          <div className="w-full h-full flex items-end p-8 md:p-12">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#AAAAAA]">
              {work.title} — images coming
            </span>
          </div>
        )}
      </div>

      {/* Metadata block */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
              {work.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#555555] max-w-2xl">
              {work.description}
            </p>
          </div>

          {/* Tags — right column on desktop */}
          <div className="flex flex-wrap md:flex-col gap-2 md:items-end">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="font-display text-[10px] font-semibold uppercase tracking-[0.15em] border border-[#CCCCCC] px-3 py-1.5 text-[#777777]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Specs — building projects */}
        {work.specs.length > 0 && (
          <ul className="mt-12 flex flex-col gap-3 border-t border-[#E5E5E5] pt-10">
            {work.specs.map((spec) => (
              <li key={spec} className="flex items-center gap-4 text-sm md:text-base text-[#333333]">
                <span className="block w-5 h-[1px] bg-[#BBBBBB] flex-shrink-0" />
                {spec}
              </li>
            ))}
          </ul>
        )}

        {/* Links — coding projects */}
        {work.links.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3 border-t border-[#E5E5E5] pt-10">
            {work.links.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.15em] border border-[#111111] px-6 py-3 hover:bg-[#111111] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Additional images */}
      {work.images.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16 flex flex-col gap-5">
          {work.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${work.title} ${i + 1}`}
              className="w-full object-cover grayscale"
            />
          ))}
        </div>
      )}

      <OtherWorks current={work} />
    </div>
  )
}
