import React , {useContext} from "react";
import MeilisearchIcon from "../assets/icons/svg/meilisearch.svg";
import { ThemeContext } from "../context/ThemeContext";

function SourceRepo({ title, description, links, tags }) {
  const [userThemeMode,] = useContext(ThemeContext);
  return (
    <>
      <div className={` ${ userThemeMode === "dark" ? "shadow-[#292c31]" : "shadow-gray-400"}
        flex flex-col p-8 rounded shadow-2xl div-back `}>
        <div className="flex items-center justify-between">
          <i className="text-3xl fa-brands fa-osi accent" />
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

export default SourceRepo;
