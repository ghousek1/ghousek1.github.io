import React, { useState } from "react";
import SecundusBrainBanner from "../assets/images/projects/secundusbrain-banner.png";
import SocialRavenBanner from "../assets/images/projects/socialraven-banner.png";
import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
import "./../App.css";

function Projects() {
  const featuredProjectList = [
    {
      name: "Secundus Brain - Works as second brain",
      description:
        "A knowledge management tool which handles data like human brain",
      tags: ["SpringBoot", "React", "Postgres", "MeiliSearch", "Redis"],
      links: {
        "fab fa-github": "https://github.com/ghousek1/secundusbrain",
        "fas fa-external-link": "https://ghousek1.com/secundusbrain",
      },
      image: SecundusBrainBanner,
    },
    {
      name: "Social Raven - Social media management tool",
      description:
        "Social media management tool that helps in scheduling posts, analyse traffic for social media accounts",
      tags: ["SpringBoot", "React", "Postgres", "KeyCloak", "Kafka", "Redis"],
      links: {
        "fab fa-github": "https://github.com/ghousek1/socialraven",
        "fas fa-external-link": "https://ghousek1.com/socialraven",
      },
      image: SocialRavenBanner,
    },
  ];

  const otherProjectList = [
    {

      title: "Knight authorization server",
      description: "Authorization server to handle auth config",
      links: {
        "fab fa-github": "https://github.com/ghousek1/knight-auth-server",
      },
      tags: ["Java", "Spring", "Keycloak", "Postgres"],
    },
    {
      title: "Legion multithreaded server",
      description: "Multithreaded web server written in java",
      links: {
        "fab fa-github": "https://github.com/ghousek1/legion-multithreaded-server",
      },
      tags: ["Java", "Spring", "Redis"],
    },{
      title: "Tern monitoring tool",
      description: "Monitoring tool to observe apps in environments",
      links: {
        "fab fa-github": "https://github.com/ghousek1/tern-monitoring-tool",
      },
      tags: ["Java", "Spring", "Postgres","Kafka"],
    }
  ];

  const[featuredProjects,setFeaturedProjects] = useState(featuredProjectList);
  const[otherProjects,setOtherProjects] = useState(otherProjectList);

  return (
    <>
      <div id="projects" className="flex flex-col items-center w-full section-padding">
        <div className="flex items-center w-full header-line pb-16">
          <span className="accent mr-4 text-xl font-monospace">03.</span>
          <h3 className="text-2xl whitespace-nowrap slate font-[600]">
            Featured Projects
          </h3>
        </div>
        {featuredProjects.map((p, i) => {
          return (
            <FeaturedProject
              image={p.image}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center w-full px-8 md:px-16">
        <div className="flex flex-col items-center justify-center w-full pb-8">
          <h3 className="text-2xl slate mb-[0.3rem] font-[600]">
            Other Projects
          </h3>
          <a
            href="https://github.com/ghousek1?tab=repositories"
            className={"accent text-sm font-monospace"}
          >
            view github archive
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-4 w-full">
      
        {otherProjects.map((p, i) => {
          return (
            <Project
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
  );
}

export default Projects;
