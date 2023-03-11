import React from "react";

function SourceRepo({ title, description, links, tags }) {
  return (
    <>
      <div className="div-back rounded flex flex-col drop-shadow-2xl p-8 hover-displace translate-8">
        <div className="flex items-center justify-between">
          <i className="far fa-star accent text-3xl" />
          <div className="flex items-center dark-slate">
            {Object.keys(links).map((l, i) => {
              return (
                <a
                  key={i}
                  href={links[l]}
                  target="_blank"
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
        <ul className="flex cursor-default items-center flex-wrap text-sm mt-6 dark-slate opacity-60 font-monospace">
          {tags.map((t, i) => {
            return (
              <li key={i} className="whitespace-nowrap mr-5">
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SourceRepo;
