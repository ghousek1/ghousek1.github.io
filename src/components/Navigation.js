import React, { useState } from "react";
import { Link } from 'react-scroll'

function Navigation() {
  const [sideMenu, setSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
   
  const navlinks = [
    { id:"01", name: "skills", url: "skills" },
    { id:"02", name: "experience", url: "experience" },
    { id:"03", name: "projects", url: "projects" },
    { id:"04", name: "contributions", url: "contributions" },
  ];

  return (
    <nav
      id="navigation"
      className="flex w-full h-[6.25rem] px-4 items-center justify-between 
                 md:px-8 "
    >
      <a href="/" className="z-[100] text-3xl cursor-pointer">
        <span className="accent">K1</span>
      </a>
      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        flex-col p-8  w-full h-full fixed  top-0 left-0 backdrop-blur-sm bg-[rgba(0,0,0,0.8)] md:bg-transparent items-end justify-center z-[100] 
        md:p-0 md:w-auto md:h-auto md:relative md:flex-row md:items-center md:justify-center`}
      >

        <ul className="flex flex-col slate font-monospace text-2xl mr-4 tracking-wide
                       md:flex-row md:text-[0.95rem]">
          {navlinks.map((navLink, key) => (
            <li key={key} className="py-3 md:px-4 md:py-0">
              <Link onClick={toggleSideMenu} className="hover-accent"  to={navLink.url} 
              spy={true} smooth={true} offset={50} duration={1000}>
                <span className="mr-2 accent">{navLink.id}</span>
                <span className="capitalize ">{navLink.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <i
        onClick={toggleSideMenu}
        className={`fas fa-${sideMenu ? "close" : "bars-staggered"} 
                    cursor-pointer z-[100] w-[1.25rem] text-center text-xl md:hidden`}
      />
    </nav>
  );
}

export default Navigation;
