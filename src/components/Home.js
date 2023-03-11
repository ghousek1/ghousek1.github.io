import React from "react";
import "./../App.css";

function Home() {
  return (
    <>
      <div className="flex flex-col h-full mt-6 mb-24 justify-center w-full section-padding">
        <h1 className="text-4xl font-[600] slate mb-3 lg:text-6xl">
          Ghouse K1
        </h1>
        <h2
          className="text-2xl font-[600] opacity-60 slate tracking-tight py-1
                        md:text-3xl md:py-1 lg:text-6xl"
        >
          Software craftsman
        </h2>
        <p className="py-10 slate text-lg leading-7 opacity-70 max-w-[800px]">
          I’m a developer and computer science grad specialized in backend
          development and building software with exceptional performance and
          scalabilty. Currently, I’m focused on building skills, projects and
          contributing to opensource softwares.
        </p>
        <a
          href="https://github.com/ghousek1?tab=repositories"
          target="_blank"
          className="accent md:w-fit w-full hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace p-4 px-6 mt-4"
        >
          Check out my work!
        </a>
      </div>
    </>
  );
}

export default Home;
