import min1 from "../assets/images/min1.jpg";
import min2 from "../assets/images/min2.jpg";
import min3 from "../assets/images/min3.jpg";
import min4 from "../assets/images/min4.jpg";
import min5 from "../assets/images/min5.jpg";
import min6 from "../assets/images/min6.jpg";

export default function MiniBike() {
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
          MInibike Suspension
        </h1>

        <img src={min1} className="w-10/12 "></img>

        <p className="font-roboto text-md md:text-xl font-medium w-4/5 mt-10 mb-8">
          • fmodified frame to add rear swing arm <br />
          • Custom chain tensioner
          <br />• Installed torque converter
        </p>
        <img src={min2} className="w-10/12 my-4"></img>
        <img src={min3} className="w-10/12 my-4"></img>
        <img src={min5} className="w-10/12 my-4"></img>
        <img src={min6} className="w-10/12 my-4"></img>
        <img src={min4} className="w-10/12 my-4"></img>
      </div>
    </>
  );
}
