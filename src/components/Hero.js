import React , {useContext} from "react";
import "./../App.css";

import { ThemeContext } from "../context/ThemeContext";

import HeroBannerLightImage from "../assets/images/hero-banner-image-light.png";
import HeroBannerDarkImage from "../assets/images/hero-banner-image-dark.png";

function Hero() {
  const [userThemeMode, ] = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-row justify-start w-full h-full gap-2 mt-1 md:mt-3 section-padding section-margin">
        <div className="flex flex-col justify-center w-full  ">
          <div className="flex flex-row items-center justify-start ">
          <h1 className="inline-block slate mb-2 mt-6 md:mt-16 py-1 text-4xl font-[600] md:py-2 lg:text-6xl">
            Ghouse K1
          </h1>
          <div className="text-lg font-normal slate">(one)</div>
          </div>
         
          <h2
            className="slate py-1 mb-4 text-[1.6rem] font-[600] leading-normal tracking-tight opacity-60
                          md:py-2 md:text-[1.8rem]  lg:text-4xl"
          >
            Software craftsman
          </h2>
          <br />
          <p className="py-15 slate lg:text-text-[1.7rem] max-w-[50rem] text-[1rem] leading-normal opacity-90  md:text-[1.25rem]">
            I’m a developer and computer science grad specialized in backend
            development and building software with exceptional performance and
            scalabilty. Currently, I’m focused on building skills, projects and
            contributing to opensource softwares.
          </p>

          <div className="flex w-full py-4 pr-2 my-8 cursor-pointer font-monospace md:my-12 md:w-fit md:pr-4">
            <a
              href="https://github.com/ghousek1"
              target="_blank"
              rel="noreferrer"
              className="slate inline py-2 pr-6 text-[1.7rem] font-[400] opacity-60 md:pr-8 md:text-[2.4rem]"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ghousek1/"
              target="_blank"
              rel="noreferrer"
              className="slate  inline py-2 pr-6 text-[1.7rem] font-[400] opacity-60 md:pr-8 md:text-[2.4rem]"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/ghousek1ofcl"
              target="_blank"
              rel="noreferrer"
              className="slate  inline py-2 pr-6 text-[1.7rem] font-[400] opacity-60 md:pr-8 md:text-[2.4rem]"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://leetcode.com/ghousek1/"
              target="_blank"
              rel="noreferrer"
              className="slate  inline py-2 pr-6 text-[1.7rem] font-[400] opacity-60 md:pr-8 md:text-[2.4rem]"
            >
              <i className="fa-solid fa-code"></i>
            </a>

            <a
              href="mailto:ghousek1@outlook.com"
              target="_blank"
              rel="noreferrer"
              className="slate  inline py-2 pr-6 text-[1.7rem] font-[400] opacity-60 md:pr-8 md:text-[2.4rem]"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hidden below-md:flex below-md:flex-col   justify-center ">
         
            <img src={`${userThemeMode === "dark" ? HeroBannerDarkImage : HeroBannerLightImage}`}  alt="hero-banner" className="   " />
            
        </div>
      </div>
    </>
  );
}

export default Hero;
