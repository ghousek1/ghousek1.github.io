import React from "react";
import "./../App.css";

function Project({ title, description, links, tags }) {
  return (
    <>
      <div className="flex flex-col p-8 rounded div-back drop-shadow-2xl hover-displace translate-8">
        <div className="flex items-center justify-between">
          <i className="text-3xl far fa-folder accent" />
          <div className="flex items-center dark-slate">
            {Object.keys(links).map((l, i) => {
              return (
                <a
                  key={i}
                  href={links[l]}
                  target="_blank" rel="noreferrer" 
                  className={`hover-accent ${l} ${
                    i === Object.keys(links).length - 1 ? "" : "mx-6"
                  }`}
                />
              );
            })}
          </div>
        </div>
        <h4 className="slate pt-6 cursor-default font-[600]">{title}</h4>
        <p className={`dark-slate pt-2 text-sm cursor-default`}>
          {description}
        </p>
        <ul className="flex flex-wrap items-center mt-6 text-sm cursor-default dark-slate opacity-60 font-monospace">
          {tags.map((t, i) => {
            return (
              <li key={i} className="mr-5 whitespace-nowrap">
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Project;
