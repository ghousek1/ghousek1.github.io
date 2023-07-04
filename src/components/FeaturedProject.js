import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function FeaturedProject({
  imageLight,
  imageDark,
  title,
  description,
  tags,
  links,
  orientation = 1,
}) {

  const [userThemeMode] = useContext(ThemeContext);
  return (
    <>
      <div  className={` ${ userThemeMode === "dark" ? "shadow-[#151515]" : "shadow-gray-400"}
                 flex items-center w-full relative h-[27rem] 
          mb-[6rem] border border-slate-700 md:border-0  drop-shadow md:drop-shadow-none`} >
        <div
          className={`md:max-w-[60%] absolute ${
            orientation ? "left-0" : "right-0"
          } h-full md:h-auto md:w-full `}
        >
      <a href={links[Object.keys(links)[1]]} target="_blank" rel="noreferrer">
      <img
            src={ userThemeMode==='dark' ? imageDark : imageLight}
            className={` h-full object-cover md:object-contain drop-shadow-2xl `}
            alt="project-image"
          />
      </a>

        </div>
        <div
          className={`flex flex-col p-8 md:p-0 z-10 ${
            orientation ? "ml-auto md:items-end" : "md:items-start"
          } w-full md:w-fit backdrop-blur-md `}
        >
          <span className="mb-2 text-base font-monospace accent">
            Featured Project
          </span>
          <a target="_blank" rel="noreferrer" href={Object.values(links)[0]}>
            <h3
              className={
                "cursor-pointer slate hover-accent text-2xl font-[600]"
              }
            >
              {title}
            </h3>
          </a>
          <p
            className={`bg-[#141618] rounded
            py-6 md:px-6 max-w-[34.5rem] text-[#c7d2f5] text-[0.94rem] ${
              orientation ? "md:text-right" : "md:text-left"
            } my-9 drop-shadow-xl`}
          >
            {description}
          </p>
          <ul
            className={
              "flex flex-wrap max-w-[34.5rem] items-center text-sm my-1 slate font-monospace whitespace-nowrap"
            }
          >
            {tags.map((t, i) => {
              return (
                <li
                  key={t}
                  className={`mr-5 md:mr-0 ${
                    orientation ? "md:ml-5" : `md:mr-5`
                  }`}
                >
                  {t}
                </li>
              );
            })}
          </ul>
          <div
            className={"flex flex-wrap items-center text-lg mt-4 slate"}
          >
            {Object.keys(links).map((l, i) => {
              return (
                <a
                  key={i}
                  href={links[l]}
                  target="_blank"
                  className={`hover-accent mr-6 ${l} ${
                    i === (!orientation ? 0 : Object.keys(links).length - 1)
                      ? "md:mr-0"
                      : "md:mx-6"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
