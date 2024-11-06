import rec1 from "../assets/images/rec1.jpg";
import rec2 from "../assets/images/rec2.jpg";
import rec3 from "../assets/images/rec3.jpg";
import rec4 from "../assets/images/rec4.jpg";
import rec5 from "../assets/images/rec5.jpg";
import rec6 from "../assets/images/rec6.jpg";

export default function Record() {
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
          Record Console
        </h1>

        <img src={rec6} className="w-10/12 my-4"></img>

        <p className="font-roboto text-md md:text-xl font-medium w-4/5 mt-10 mb-8">
          • Walnut <br />
          • 6 compartments
          <br />• Holds 200+ records
        </p>
        <img src={rec1} className="w-10/12 my-4"></img>
        <img src={rec2} className="w-10/12 my-4"></img>
        <img src={rec5} className="w-10/12 my-4"></img>
        <img src={rec3} className="w-10/12 my-4"></img>
        <img src={rec4} className="w-10/12 my-4"></img>
      </div>
    </>
  );
}
