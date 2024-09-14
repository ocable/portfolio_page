import headshot from "../assets/orion_headshot.jpg";
import jsSvg from "../assets/svg/js.svg";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-center p-20">
      <h1 className="text-5xl font-bold mt-40">About</h1>
      <div className="flex flex-row justify-center items-center mx-8 mt-24 mb-30">
        <img
          src={headshot}
          alt="headshot"
          className="w-1/4 rounded-full mr-14"
        />
        <p className="text-xl text-center">
          I am a software engineer with a curiousity for how things work. After graduating from Full Stack Academy, I've become skilled in technologies like JavaScript, React, Redux, Node.js, Express, and PostgreSQL. When I'm not at my computer, you can find me plying Ultimate frisbee, mountain biking, skiing, or exploring the outdoors. 
        </p>

      </div>
      <img src={jsSvg} alt="js" className="w-12 ml-14" />

    </div>
  );
}
