import headshot from "../assets/orion_headshot.jpg";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-40">About</h1>
      <div className="flex flex-row items-center ml-8 mt-24 mb-40">
        <img
          src={headshot}
          alt="headshot"
          className="w-1/4 rounded-full mr-14"
        />
        <p className="text-2xl text-center m-8">
          Hi, I'm Orion. I'm a software engineer
        </p>
      </div>
    </div>
  );
}
