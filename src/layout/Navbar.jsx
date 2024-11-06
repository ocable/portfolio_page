import { useEffect, useMemo, useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { useClickAway } from "react-use";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

import { Link, Element } from "react-scroll";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div className="flex flex-row justify-between navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <a className="text-sm text-nowrap md:text-4xl ml-2 md:ml-12 font-bold">
          Orion Cable
        </a>
      </div>

      {/* <div ref={ref} className="sm:hidden ml-64">
        <Hamburger
          size={20}
          direction="right"
          toggled={isOpen}
          toggle={setOpen}
        />
        {isOpen && (
          <div>
            <ul>
              <li>
                <Link
                  to="landing"
                  smooth={true}
                  duration={1000}
                  className="md:hover:bg-blue-100"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div> */}

      <ul className="menu menu-horizontal flex-nowrap px-1 invisible md:visible md:mr-8">
        <li>
          <Link
            to="landing"
            smooth={true}
            duration={1000}
            className="md:hover:bg-blue-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="md:hover:bg-blue-100"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="md:hover:bg-blue-100"
          >
            Coding
          </Link>
        </li>
        <li>
          <Link
            to="building"
            smooth={true}
            duration={1000}
            className="md:hover:bg-blue-100"
          >
            Building
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="md:hover:bg-blue-100"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
