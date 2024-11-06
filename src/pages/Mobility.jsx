import mob1 from "../assets/images/mob1.jpg";
import mob2 from "../assets/images/mob2.jpg";
import mob3 from "../assets/images/mob3.jpg";
import mob4 from "../assets/images/mob4.jpg";
import mob5 from "../assets/images/mob5.jpg";
import mob6 from "../assets/images/mob6.jpg";

export default function Mobility() {
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
          Mobility Scooter
        </h1>

        <img src={mob1} className="w-10/12 "></img>

        <p className="font-roboto text-md md:text-xl font-medium w-4/5 mt-10 mb-8">
          • 125cc pit bike motor <br />
          • 4-speed manual transmission
          <br />
          • Paddle shifters
          <br />• Live rear axle
        </p>
        <img src={mob2} className="w-10/12 my-4"></img>
        <img src={mob3} className="w-10/12 my-4"></img>
        <img src={mob4} className="w-10/12 my-4"></img>
        <img src={mob5} className="w-10/12 my-4"></img>
        <img src={mob6} className="w-10/12 my-4"></img>
      </div>
    </>
  );
}
