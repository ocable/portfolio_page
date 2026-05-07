import { Link } from "react-router-dom"
import { buildingWorks } from "../../data/works"

export default function BuildingGridV2() {
  return (
    <section id="building" className="py-24 md:py-32 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-12">
          Building Projects
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {buildingWorks.map((work) => (
            <Link
              key={work.slug}
              to={`/v2/works/${work.slug}`}
              className="group block"
            >
              {/* Image / placeholder */}
              <div className="aspect-square bg-[#EBEBEB] overflow-hidden mb-3 relative">
                {work.coverImage ? (
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-end p-3">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-[#AAAAAA]">
                      {work.title}
                    </span>
                  </div>
                )}
              </div>

              <p className="font-display text-sm font-semibold tracking-tight group-hover:opacity-50 transition-opacity duration-200">
                {work.title}
              </p>
              <p className="text-xs text-[#999999] mt-0.5">
                {work.tags.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
