import wave_graph from "../assets/wave_graph.jpg";
import fingerprint from "../assets/fingerprint.jpg";
import arduinoMicro from "../assets/arduinoMicro.jpg";
import headlight from "../assets/headlight.jpg";
import keyboard from "../assets/keyboard.jpg";

export default function Projects() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mt-20 md:mt-40 mb-8 md:mb-20">Projects</h1>

      {/* CPSC DATABASE */}
      <div className="container mx-auto flex flex-col md:grid-cols-2 md:grid-flow-rows md:items-center mb-20 md:mb-40">

        <div className="group/card hover:bg-blue-100 mx-10 md:mx-12 md:p-4 rounded-2xl flex flex-row items-start my-10">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              CPSC database
            </h2>
            <p className="my-2">
              Fullstack web app allowing users to search through a database of
              product recalls and consumer incident reports via UPC.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                React
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                PostrgreSQL
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                Prisma
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="https://github.com/ocable/product_safety" target="_blank">
                  View on GitHub
                </a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </section>
          </section>
        </div>

        {/* NBDC VISUALIZER */}
        <div className="group/card hover:bg-blue-100 mx-10 md:mx-12 md:p-4 rounded-2xl flex flex-row items-start my-10">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Buoy Data Visualizer
            </h2>
            <p className="my-2">
              A web app that visualizes raw spectral buoy data from the NBDC and
              calculates significant wave height and period for each swell
              component.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Python
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="https://github.com/ocable/wave_math" target="_blank">
                  View on GitHub
                </a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </section>
          </section>
        </div>

        <div className="group/card hover:bg-blue-100 mx-10 md:mx-12 md:p-4 rounded-2xl flex flex-row items-start my-10">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              ESP32 IOT
            </h2>
            <p className="my-2">
              Fullstack app template that connects to ESP32 microcontroller via
              a websocket for low latency control.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                React
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                Express
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                C++
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                Socket.IO
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="https://github.com/ocable/ESP32-IOT" target="_blank">
                  View on GitHub
                </a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </section>
          </section>
        </div>

        <div className="group/card hover:bg-blue-100 flex flex-row items-start my-10 mx-10 md:mx-12 md:p-4 rounded-2xl">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Fingerprint Doorlock
            </h2>
            <p className="my-2">
              Biometric doorlock using arduino and fingerprint scanner from
              adafruit.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                C++
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                Arduino
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a
                  href="https://github.com/ocable/fingerprint-doorlock"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </section>
          </section>
        </div>

        <div className="group/card hover:bg-blue-100 rounded-2xl flex flex-row items-start my-10 mx-10 md:mx-12 md:p-4">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Moped Speedometer
            </h2>
            <p className="my-2">
              A retrofit speedometer for a moped using an arduino micro and hall
              effect sensor to track trip distance and monitor gas consumption.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                C++
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                Arduino
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a
                  href="https://github.com/ocable/micro_sped/tree/upload"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </section>
          </section>
        </div>

        <div className="group/card hover:bg-blue-100 rounded-2xl flex flex-row items-start my-10 mx-10 md:mx-12 md:p-4">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Sofle Choc{" "}
            </h2>
            <p className="my-2">
              Split keyboard soldered and built from scratch powered by an
              Arduino micro and QMK firmware.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                C++
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                Arduino
              </h3>
              <h3 className="max-w-min font-bold bg-blue-100 m-1 px-2 py-0.5 rounded-2xl">
                QMK
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="https://github.com/ocable/Sofle-Choc" target="_blank">
                  View on GitHub
                </a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </section>
          </section>
        </div>
      </div>

      {/* <h1 className="text-3xl font-bold mt-20 mb-32">More Projects</h1> */}
    </>
  );
}
