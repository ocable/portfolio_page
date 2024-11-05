import van1 from "../assets/images/drone_van.jpg";
import van2 from "../assets/images/co_van.jpg";
import van3 from "../assets/images/van1.jpg";
import van4 from "../assets/images/van2.jpg";
import van5 from "../assets/images/van3.jpg";
import van6 from "../assets/images/van4.jpg";
import van7 from "../assets/images/van5.jpg";
import van8 from "../assets/images/van6.jpg";
import van9 from "../assets/images/van7.jpg";
import van10 from "../assets/images/van8.jpg";

export default function Van() {
  return (
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
          Van Conversion
        </h1>

        <img src={van2} className="w-10/12 "></img>

        <p className="font-roboto text-md md:text-xl font-medium w-4/5 mt-10 mb-8">
          • Modular bed folds away for cargo space <br />
          • Fully insulated with a diesel heater
          <br />
          • Ceiling fan for air flow
          <br />
          • Sink with gray water catch
          <br />
          • 100W solar panel and 100Ah battery
          <br />
          • 1000W inverter
          <br />
        </p>
        <img src={van1} className="w-10/12 my-4"></img>
        <img src={van6} className="w-10/12 my-4"></img>
        <img src={van7} className="w-10/12 my-4"></img>
        <img src={van5} className="w-10/12 my-4"></img>
        <img src={van4} className="w-10/12 my-4"></img>
        <img src={van8} className="w-10/12 my-4"></img>
        <img src={van9} className="w-10/12 my-4"></img>
        <img src={van3} className="w-10/12 my-4"></img>
        <img src={van10} className="w-10/12 my-4"></img>
      </div>
    </>
  );
}
