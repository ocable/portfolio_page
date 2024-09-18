import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

import { Link, Element } from "react-scroll";

function Navbar() {
  return (
   
    <div className="flex flex-row justify-between navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <a className="text-sm text-nowrap md:text-4xl md:ml-12 font-bold">Orion Cable</a>
      </div>

      <div className="flex flex-row sm:hidden"></div>

      <ul className="menu menu-horizontal flex-nowrap px-1 invisible md:visible md:mr-8">
        <li >
          <Link to="landing" smooth={true} duration={1000} className="md:hover:bg-blue-100">
            Home
          </Link>
        </li>{" "}
        <li>
          <Link to="about" smooth={true} duration={1000} className="md:hover:bg-blue-100">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={1000} className="md:hover:bg-blue-100">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000} className="md:hover:bg-blue-100">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;


