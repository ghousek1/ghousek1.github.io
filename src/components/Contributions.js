import React, { useState } from "react";
import SourceRepo from "./SourceRepo";
import "./../App.css";


function Contributions() {
    const contributedRepoList = [
        {
    
          title: "Meilisearch Java",
          description: "Java client for meilisearch search engine(open source alternative to elastic search)",
          links: {
            "fab fa-github": "https://github.com/meilisearch/meilisearch",
            "fab fa-github": "https://github.com/meilisearch/meilisearch-java",
          },
          tags: ["Meilisearch:34536 stars ", "Meilisearch-java:104 stars"],
        },
        {
          title: "Ryze project",
          description: "Ryze private project",
          links: {
            "fab fa-github": "https://github.com/ghousek1/ryze",
          },
          tags: ["Ryze project:(unknown) stars"],
        }
      ];
    
      const[contributedRepos,setContributedRepoList] = useState(contributedRepoList);
  return (
    <>
    <div id="contributions" className="flex flex-col items-center w-full section-padding">
      <div className="flex items-center w-full header-line pb-16">
        <span className="accent mr-4 text-xl font-monospace">04.</span>
        <h3 className="text-2xl whitespace-nowrap slate font-[600]">
          Open-source <span className="block md:inline">contributions</span>
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4 w-full">
    
    {contributedRepos.map((p, i) => {
      return (
        <SourceRepo
          title={p.title}
          description={p.description}
          tags={p.tags}
          links={p.links}
        />
      );
    })}
     
    </div>
    </div>

  </>
  )
}

export default Contributions