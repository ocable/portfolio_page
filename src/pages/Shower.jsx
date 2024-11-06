import sho1 from "../assets/images/sho1.jpg";
import sho2 from "../assets/images/sho2.jpg";
import sho3 from "../assets/images/sho3.jpg";
import sho4 from "../assets/images/sho4.jpg";
import sho5 from "../assets/images/sho5.jpg";
import sho6 from "../assets/images/sho6.jpg";
import sho7 from "../assets/images/sho7.jpg";
import sho8 from "../assets/images/sho8.jpg";

export default function Shower() {
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
          Outdoor Shower
        </h1>

        <img src={sho5} className="w-10/12 my-4"></img>

        <p className="font-roboto text-md md:text-xl font-medium w-4/5 mt-10 mb-8">
          • Cedar <br />
          • Hot and Cold water
          <br />
          • Custom shower pan and drain
          <br />• Custom copper piping
        </p>
        <img src={sho1} className="w-10/12 my-4"></img>
        <img src={sho2} className="w-10/12 my-4"></img>
        <img src={sho6} className="w-10/12 my-4"></img>
        <img src={sho4} className="w-10/12 my-4"></img>
        <img src={sho3} className="w-10/12 my-4"></img>
        <img src={sho7} className="w-10/12 my-4"></img>
        <img src={sho8} className="w-10/12 my-4"></img>
      </div>
    </>
  );
}
