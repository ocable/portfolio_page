import { Element } from "react-scroll"
import HeroV2 from "./sections/HeroV2"
import AboutV2 from "./sections/AboutV2"
import BuildingGridV2 from "./sections/BuildingGridV2"
import CodingCardsV2 from "./sections/CodingCardsV2"
import ContactV2 from "./sections/ContactV2"

export default function HomeV2() {
  return (
    <main className="relative">
      <Element name="hero"><HeroV2 /></Element>
      <Element name="about"><AboutV2 /></Element>
      <Element name="building"><BuildingGridV2 /></Element>
      <Element name="coding"><CodingCardsV2 /></Element>
      <Element name="contact"><ContactV2 /></Element>
    </main>
  )
}
