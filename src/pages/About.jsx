import React from "react";
import headshot from "../assets/orion_headshot.jpg";
import JsSvg from "../assets/svg/JsSvg.jsx";
import ReactSvg from "../assets/svg/React.jsx";
import NodeSvg from "../assets/svg/NodeSvg.jsx";
import PythonSvg from "../assets/svg/Python.jsx";
import CPlusPlusSvg from "../assets/svg/C++.jsx";
import PostgresSvg from "../assets/svg/Postgresql.jsx";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-center p-10 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold mt-4 md:mt-32">About</h1>

      <div className="flex flex-col md:flex-row justify-center items-center mx-2 md:mx-8 mt-12 md:mt-10 md:mb-20">
        <img
          src={headshot}
          alt="headshot"
          className="w-1/2 md:w-1/4 rounded-full md:mr-14"
        />
        <p className="text-md my-8 md:mx-4 md:text-xl/10 text-center leading-10">
          I am a software engineer with a curiousity for how things work. After
          graduating from Full Stack Academy, I've become skilled in
          technologies like JavaScript, React, Redux, Node.js, Express, and
          PostgreSQL. When I'm not at my computer, you can find me playing
          Ultimate frisbee, mountain biking, skiing, or exploring the outdoors.
        </p>
      </div>

      <section className="flex flex-row justify-center items-center h-auto">
        <JsSvg />
        <ReactSvg />
        <NodeSvg />
        <PythonSvg />
        <CPlusPlusSvg />
        <PostgresSvg />
      </section>
    </div>
  );
}
