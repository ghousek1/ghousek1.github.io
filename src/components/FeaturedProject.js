import React from "react";

function FeaturedProject({
  image,
  title,
  description,
  tags,
  links,
  orientation = 1,
}) {
  return (
    <>
      <div className="flex items-center w-full relative h-[436px] mb-[100px] border border-slate-700 md:border-0 drop-shadow md:drop-shadow-none">
        <div
          className={`md:max-w-[60%] absolute ${
            orientation ? "left-0" : "right-0"
          } h-full md:h-auto md:w-full`}
        >
          <div className="w-full h-full absolute top-0 bg-black opacity-40 brightness-50 hover:hidden z-10" />
          <img
            src={image}
            className={`blur-sm brightness-50 h-full md:brightness-100 md:blur-0 object-cover md:object-contain drop-shadow-2xl`}
            alt="Hal"
          />
        </div>
        <div
          className={`flex flex-col p-8 md:p-0 z-10 ${
            orientation ? "ml-auto md:items-end" : "md:items-start"
          } w-full md:w-fit`}
        >
          <span className="font-monospace text-sm cursor-default accent mb-2">
            Featured Project
          </span>
          <a target="_blank" href={Object.values(links)[0]}>
            <h3
              className={
                "cursor-pointer slate hover-accent text-2xl font-[600]"
              }
            >
              {title}
            </h3>
          </a>
          <p
            className={`cursor-default md:bg-[#112240] rounded py-6 md:px-6 max-w-[500px] dark-slate text-[15px] ${
              orientation ? "md:text-right" : "md:text-left"
            } my-4 drop-shadow-xl`}
          >
            {description}
          </p>
          <ul
            className={
              "flex flex-wrap cursor-default max-w-[500px] items-center text-sm my-1 dark-slate font-monospace whitespace-nowrap"
            }
          >
            {tags.map((t, i) => {
              return (
                <li
                  key={i}
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
            className={"flex flex-wrap items-center text-lg mt-4 dark-slate"}
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
