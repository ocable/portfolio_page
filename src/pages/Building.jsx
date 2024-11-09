export default function Building() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-roboto font-bold mt-10 md:mt-40 mb-8 md:mb-10">
        Building Projects
      </h1>
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 md:grid-flow-rows md:items-start mb-20 md:mb-20">
        <div className="group/card dark:md:hover:bg-gray-700 md:hover:bg-blue-100 mx-10 md:mx-4 md:p-4 rounded-2xl flex flex-row items-start my-10 w-auto">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Van Conversion
            </h2>
            <p className="my-2">
              Built out interior of my 2015 Ford Transit Connect. Equipped with
              a solar panel, inverter, sink, vent and diesel heater.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Carpentry
              </h3>
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Electrical
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="./van">See more</a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500 dark:fill-white"
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
        <div className="group/card dark:md:hover:bg-gray-700 md:hover:bg-blue-100 mx-10 md:mx-4 md:p-4 rounded-2xl flex flex-row items-start my-10">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Mobility Scooter
            </h2>
            <p className="my-2">
              Convereted electric mobility scooter to a 125cc 4 speed manual
              with a top speed of 55mph.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Welding
              </h3>
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Electrical
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row">
              <section className="group/link flex flex-row text-nowrap w-min mr-4">
                <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                  <a href="/mobility">See more</a>
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500 dark:fill-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </section>
            </div>
          </section>
        </div>

        <div className="group/card dark:md:hover:bg-gray-700 md:hover:bg-blue-100 mx-10 md:mx-4 md:p-4 rounded-2xl flex flex-row items-start my-10">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Basement Renovation
            </h2>
            <p className="my-2 mr-10">
              Finished basement with two bedrooms and living room. Constructed
              subfloor, framed walls, installed drywall and painted.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Carpentry
              </h3>
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Framing
              </h3>
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Drywall
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="./basement">See more</a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500 dark:fill-white"
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

        <div className="group/card dark:md:hover:bg-gray-700 md:hover:bg-blue-100 mx-10 md:mx-4 md:p-4 rounded-2xl flex flex-row items-start my-10">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Record Console
            </h2>
            <p className="my-2">
              Mid Century walnut record storage cabinet. Holds 200+ records.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Carpentry
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="./record">See more</a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500 dark:fill-white"
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

        <div className="group/card dark:md:hover:bg-gray-700 md:hover:bg-blue-100 rounded-2xl flex flex-row items-start my-10 mx-10 md:mx-4 md:p-4">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Minibike Suspension
            </h2>
            <p className="my-2">
              Added rear suspension to minibike frame. Fabricated swingarm and
              shock mounts.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Welding
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="./minibike">See more</a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500 dark:fill-white"
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

        <div className="group/card dark:md:hover:bg-gray-700 md:hover:bg-blue-100 rounded-2xl flex flex-row items-start my-10 mx-10 md:mx-4 md:p-4">
          <section className=" flex flex-col">
            <h2 className="text-3xl font-bold text-nowrap mr-10 group-hover/card:text-blue-500">
              Outdoor Shower
            </h2>
            <p className="my-2">
              Cedar outdoor shower with custom shower pan and plumbing. Hot and
              cold water.
            </p>
            <div className="flex flex-row">
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Carpentry
              </h3>
              <h3 className="max-w-min font-bold dark:bg-gray-700 bg-blue-100 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                Welding
              </h3>
            </div>
            <section className="group/link flex flex-row text-nowrap w-min">
              <h4 className="text-xl font-bold mt-2 hover:text-blue-500">
                <a href="/shower">See more</a>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 ml-0.5 mb-0.5 self-end group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:fill-blue-500 dark:fill-white"
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
    </>
  );
}
