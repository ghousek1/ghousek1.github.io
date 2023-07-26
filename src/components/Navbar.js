import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

  const [userThemeMode, toggleUserThemeMode] = useContext(ThemeContext);

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  
  const toggleTheme = () => {
    toggleUserThemeMode();
  };

  const navlinks = [
    { id: "01", name: "Skills", url: "skills" },
    { id: "02", name: "Experience", url: "experience" },
    { id: "03", name: "Projects", url: "projects" },
    { id: "04", name: "Contributions", url: "contributions" },
  ];

  return (
    <nav
      id="navigation"
      className="flex h-[6.25rem] w-full items-center justify-between px-4 md:px-8 "
    >
      <a href="/" className="z-[100] cursor-pointer text-3xl">
        <span className="accent bold text-4xl font-[600] font-Poppins">K1</span>
      </a>
      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        fixed top-0  left-0 z-[100] h-full  w-full flex-col items-end justify-center
        p-8 backdrop-blur-md md:relative 
        md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0`}
      >
        <ul
          className="slate font-[410] mr-4 flex flex-col font-monospace 
                       text-[1.2rem] leading-8 tracking-[0.15rem]
                       md:flex-row md:text-[0.9rem] md:leading-6"
        >
          {navlinks.map((navLink) => (
            <li key={navLink.id} className="px-5 py-3 md:px-4 md:py-0">
              <Link
                onClick={toggleSideMenu}
                className="hover-accent"
                to={navLink.url}
                spy={true}
                smooth={true}
                duration={1000}
              >
                <span className="mr-2 accent bold">{navLink.id}</span>
                <span className="bold">{navLink.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <i
              onClick={toggleTheme}
              className="text-[1.5rem] fa-solid fa-circle-half-stroke fa-flip-horizontal px-5 py-3 md:px-2 md:py-0"
            ></i>
          </li>
        </ul>
      </div>
      <i
        onClick={toggleSideMenu}
        className={`fas fa-${sideMenu ? "close" : "bars-staggered"} 
                    z-[100] w-[1rem] cursor-pointer text-center text-xl md:hidden accent`}
      />
    </nav>
  );
}

export default Navbar;
