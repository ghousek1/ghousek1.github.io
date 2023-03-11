import React, { useState } from "react";
import "./../App.css";

function Experience() {
  const experienceRecord = {
    "Senior Developer": {
      position: "Senior Backend Developer",
      organisation: "LTI Mindtree",
      url: "https://www.ltimindtree.com/",
      duration: "Jan 2023 - present",
      content: [
        "Played a crucial role in designing application workflow by identifying minimal API endpoints required",
        "Designed and implemented primary workflow of application which reduced the development time by 1/2 ",
        "Debugged and fixed performanence issues related to Memory and CPU with reduced resource consumption by 2X",
        "Developed a functionality to handle large file of 20K records with less memory resource and optimal response time  ",
        "Identified and implemented code using a fancy library to execute database queries with less lines of code ",
        "Reviewed design and code changes of fellow developers to identify the bugs and quality issues",
      ],
    },
    "Junior Developer": {
      position: "Junior Backend Developer",
      organisation: "LTI Mindtree",
      url: "https://www.ltimindtree.com/",
      duration: "March 2021 - Dec 2022",
      content: [
        "Understood the requirements of client and workflow of team very quickly",
        "Implemented crucial functionalities with accurate requirements and minimal bugs",
        "Developed a fast & accurate search functionality with reduction of 4X in response time ",
        "Developed a ETL job with reduction of 10X in execution time and consumption of less CPU and Memory resources ",
        "Written optimal database queries to reduce query exection time by 2X",
        "Refactored and improved code with readibility, modularity, extensability and minimal quality issues",
      ],
    },
  };

  const [work, setWork] = useState(experienceRecord);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div id="experience" className="flex flex-col text-left items-center w-full section-padding">
        <div className="flex items-center w-full header-line pb-8">
          <span className="accent mr-4 text-xl font-monospace">02.</span>
          <span className="text-[22px] whitespace-nowrap slate font-Poppins font-[600]">
            Experience
          </span>
        </div>
        <p className="dark-slate w-full mb-3 leading-7">
          As in 2023, I have almost 2.5 years of professional developer experience in building backend applications.
           Along side worked and contributed to prominent open-source projects.
        </p>
        {/* <p className="dark-slate w-full mb-4 leading-7">
          I've worked with Backend technologies such as <a href="">Spring boot framework</a>,
          <a href=""> SQL databases</a>,
          <a href=""> Advanced backend tools</a>,
          , and gained experience by building full stack web applications with variety of frameworks and tools
        </p> */}
        <div className="flex flex-col md:flex-row w-full mt-10 flex-start md:gap-20">
          <ul className="flex md:flex-col   text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-8 md:mb-0">
            {Object.keys(work).map((k, i) => {
              return (
                <li
                  onClick={() => setActiveTab(i)}
                  className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === i ? "active-item" : ""
                  }`}
                >
                  {k}
                </li>
              );
            })}
          </ul>
          <div className="p-2 ">
            {Object.keys(work).map((k, i) => {
              return (
                <div key={k} className={`${activeTab === i ? "" : "hidden"}`}>
                  <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                    <span className="slate mr-2">{work[k].position}</span>
                    <a href={work[k].url} className={"accent"} target="_blank">
                      @ {work[k].organisation}
                    </a>
                  </div>
                  <span className={"slate text-sm font-monospace"}>
                    {work[k].duration}
                  </span>
                  <ul className="flex flex-col bullet-list mt-4  slate-alt leading-6 text-sm">
                    {Object.values(work[k].content).map((v) => (
                      <li className={"mb-2"}>{v}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
