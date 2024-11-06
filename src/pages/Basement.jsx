import bas1 from "../assets/images/bas1.jpg";
import bas2 from "../assets/images/bas2.jpg";
import bas3 from "../assets/images/bas3.jpg";
import bas4 from "../assets/images/bas4.jpg";
import bas5 from "../assets/images/bas5.jpg";
import bas6 from "../assets/images/bas6.jpg";
import bas7 from "../assets/images/bas7.jpg";
import bas8 from "../assets/images/bas8.jpg";

export default function Basement() {
  return(
    <>
      <div className="flex flex-row justify-between navbar bg-base-100 sticky top-0">
        <a className="text-sm text-nowrap md:text-4xl ml-2 md:ml-12 font-bold">
          Orion Cable
        </a>
        <a href="/" className="font-roboto font-medium text-sm mr-2 ">
          Home
        </a>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-roboto font-bold mt-10 md:mt-40 mb-8 md:mb-10">
          Basement Remodel
        </h1>

        <img src={bas1} className="w-10/12 "></img>

        <p className="font-roboto text-md md:text-xl font-medium w-4/5 mt-10 mb-8">
          • 3 Rooms <br />
          • Insulated subfloor and walls
          <br />
          • Drywall ceilng and walls
          <br />• Vinyl flooring
        </p>
        <img src={bas2} className="w-10/12 my-4"></img>
        <img src={bas3} className="w-10/12 my-4"></img>
        <img src={bas4} className="w-10/12 my-4"></img>
        <img src={bas5} className="w-10/12 my-4"></img>
        <img src={bas6} className="w-10/12 my-4"></img>
        <img src={bas7} className="w-10/12 my-4"></img>
        <img src={bas8} className="w-10/12 my-4"></img>
      </div>
    </>
  );
}
