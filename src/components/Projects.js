import React from "react";
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
        "fab fa-github":
          "https://github.com/ghousek1/legion-multithreaded-server",
      },
      tags: ["Java", "Spring", "Redis"],
    },
    {
      title: "Tern monitoring tool",
      description: "Monitoring tool to observe apps in environments",
      links: {
        "fab fa-github": "https://github.com/ghousek1/tern-monitoring-tool",
      },
      tags: ["Java", "Spring", "Postgres", "Kafka"],
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="section-padding section-margin flex w-full flex-col items-center  "
      >
        <div className="header-line flex w-full items-center pb-16 ">
          <span className="accent mr-4 font-monospace text-xl">03.</span>
          <h3 className="slate whitespace-nowrap text-2xl font-[600]">
            Featured Projects
          </h3>
        </div>
        {featuredProjectList.map((p, i) => {
          return (
            <FeaturedProject
              key={p.name}
              image={p.image}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}

        <div className="flex w-full flex-col items-center ">
          <div className="flex w-full flex-col items-center justify-center pb-8">
            <h3 className="slate mb-[0.3rem] text-2xl font-[600]">
              Other Projects
            </h3>
            <a
              href="https://github.com/ghousek1?tab=repositories"
              className={"accent font-monospace text-sm"}
            >
              view github archive
            </a>
          </div>
          <div className="grid w-full gap-4 md:grid-cols-3">
            {otherProjectList.map((p) => {
              return (
                <Project
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  links={p.links}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
