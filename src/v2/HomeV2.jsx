import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import { Element } from "react-scroll"
import HeroV2 from "./sections/HeroV2"
import AboutV2 from "./sections/AboutV2"
import ContactV2 from "./sections/ContactV2"

export default function HomeV2() {
  const location = useLocation()

  useLayoutEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "instant" })
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [location.hash])

  const skipAnimation = !!location.hash

  return (
    <main className="relative">
      <Element name="hero"><HeroV2 skipAnimation={skipAnimation} /></Element>
      <Element name="about"><AboutV2 /></Element>
      <Element name="contact"><ContactV2 /></Element>
    </main>
  )
}
