import React from "react";
import "./../App.css";

import HeroBannerImage from "../assets/images/hero-banner-image.png";

function Hero() {
  return (
    <>
      <div className="flex flex-row justify-start w-full h-full gap-2 section-padding section-margin">
        <div className="flex flex-col justify-center w-full">
          <h1 className="py-1 md:py-2 slate mb-2 text-4xl font-[600] lg:text-6xl">
            Ghouse K1
          </h1>
          <h2
            className="slate py-1 text-2xl font-[600] tracking-tight opacity-60 leading-normal
                         md:py-2 md:text-[2rem]  lg:text-5xl"
          >
            Software craftsman
          </h2>
          <br/>
          <p className="py-15 slate max-w-[50rem] opacity-90 leading-normal text-[1rem] md:text-[1.25rem]  lg:text-text-[1.7rem]">
            I’m a developer and computer science grad specialized in backend
            development and building software with exceptional performance and
            scalabilty. Currently, I’m focused on building skills, projects and
            contributing to opensource softwares.
          </p>
          {/* <a
            href="https://github.com/ghousek1?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="accent hover-btn hover-accent accent-border mt-8 w-full cursor-pointer rounded p-4 px-6 font-monospace text-[14px] md:w-fit"
          >
            Check out my work!
          </a> */}

        <div className="flex w-full py-4 pr-2 my-8 cursor-pointer md:pr-4 md:my-12 font-monospace md:w-fit">

        
       
          <a
            href="https://github.com/ghousek1"
            target="_blank"
            rel="noreferrer"
            className="py-2 pr-6 md:pr-8  text-[1.7rem] md:text-[2.4rem] font-[400] slate inline opacity-60 hover-displace translate-8"
          >
             <i
              className="fa-brands fa-github"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ghousek1/"
            target="_blank"
            rel="noreferrer"
            className="py-2 pr-6 md:pr-8  text-[1.7rem] md:text-[2.4rem] font-[400] slate inline opacity-60 hover-displace translate-8">
            <i
              className="fa-brands fa-linkedin"
            ></i>
          </a>
          <a
            href="https://twitter.com/ghousek1ofcl"
            target="_blank"
            rel="noreferrer"
            className="py-2 pr-6 md:pr-8  text-[1.7rem] md:text-[2.4rem] font-[400] slate inline opacity-60 hover-displace translate-8">
            <i
              className="fa-brands fa-twitter"
            ></i>
          </a>
          <a
            href="https://leetcode.com/ghousek1/"
            target="_blank"
            rel="noreferrer"
            className="py-2 pr-6 md:pr-8  text-[1.7rem] md:text-[2.4rem] font-[400] slate inline opacity-60 hover-displace translate-8">
             <i
              className="fa-solid fa-code"
            ></i>
          </a>

          <a
            href="mailto:ghousek1@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="py-2 pr-6 md:pr-8  text-[1.7rem] md:text-[2.4rem] font-[400] slate inline opacity-60 hover-displace translate-8">
             <i
              className="fa-solid fa-envelope"
            ></i>
          </a>


          </div>

        </div>
        <div className="hidden below-md:flex below-md:flex-col">
          <div>
            <img src={HeroBannerImage} alt="hero-banner" className="w-full " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
