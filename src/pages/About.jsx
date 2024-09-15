import React from "react";
import headshot from "../assets/orion_headshot.jpg";
import JsSvg from "../assets/svg/JsSvg.jsx";
import ReactSvg from "../assets/svg/React.jsx";
import NodeSvg from "../assets/svg/NodeSvg.jsx";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-center p-10 md:p-20">
      <h1 className="text-4xl md:text-5xl font-bold mt-8 md:mt-40">About</h1>

      <div className="flex flex-col md:flex-row justify-center items-center mx-2 md:mx-8 mt-12 md:mt-24 md:mb-30">
        <img
          src={headshot}
          alt="headshot"
          className="w-1/2 md:w-1/4 rounded-full md:mr-14"
        />
        <p className="text-md my-8 md:text-xl text-center">
          I am a software engineer with a curiousity for how things work. After
          graduating from Full Stack Academy, I've become skilled in
          technologies like JavaScript, React, Redux, Node.js, Express, and
          PostgreSQL. When I'm not at my computer, you can find me playing
          Ultimate frisbee, mountain biking, skiing, or exploring the outdoors.
        </p>
      </div>

      {/* <section className="flex flex-row justify-center items-center">
        <JsSvg />
        <ReactSvg />
        <NodeSvg />
      </section> */}

    </div>
  );
}
