import React from "react";
import SecundusBrainDarkBanner from "../assets/images/projects/secundusbrain-banner-dark.png";
import SecundusBrainLightBanner from "../assets/images/projects/secundusbrain-banner-light.png";
import SocialRavenDarkBanner from "../assets/images/projects/socialraven-banner-dark.png";
import SocialRavenLightBanner from "../assets/images/projects/socialraven-banner-light.png";
import ViscodyDarkBanner from "../assets/images/projects/viscody-banner-dark.png";
import ViscodyLightBanner from "../assets/images/projects/viscody-banner-light.png";
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
        "fab fa-github": "https://github.com/ghousek1/secundus-brain",
        "fas fa-external-link": "https://secundusbrain.ghousek1.com",
      },
      imageLight: SecundusBrainLightBanner,
      imageDark: SecundusBrainDarkBanner,
    },
    {
      name: "Social Raven - Social media management tool",
      description:
        "Social media management tool that helps in scheduling posts, analyse traffic for social media accounts",
      tags: ["SpringBoot", "React", "Postgres", "KeyCloak", "Kafka", "Redis"],
      links: {
        "fab fa-github": "https://github.com/ghousek1/social-raven",
        "fas fa-external-link": "https://socialraven.ghousek1.com",
      },
      imageLight: SocialRavenLightBanner,
      imageDark: SocialRavenDarkBanner,
    },
    {
      name: "Viscody - Data visualization tool",
      description:
        "Data visualization tool that helps in visualizing Json, Yaml, Xml, Csv etc",
      tags: ["React", "Tailwind", "ReactFlow", "CodeEditor"],
      links: {
        "fab fa-github": "https://github.com/ghousek1/viscody",
        "fas fa-external-link": "https://viscody.ghousek1.com",
      },
      imageLight: ViscodyLightBanner,
      imageDark: ViscodyDarkBanner,
    },
  ];

  const otherProjectList = [
    {
      title: "Regel - Regular Expression helper tool",
      description: "Regular Expression helper tool written in javascript",
      links: {
        "fab fa-github": "https://github.com/ghousek1/regel",
        "fas fa-external-link": "https://regel.ghousek1.com",
      },
      tags: ["Javascript", "React"],
    },
    {
      title: "Knight - Auth server",
      description: "Authenticaion & Authorization server to handle config",
      links: {
        "fab fa-github": "https://github.com/ghousek1/knight-auth-server",
      },
      tags: ["Java", "Spring", "Keycloak", "Postgres"],
    },
    {
      title: "Tern - Monitoring tool",
      description: "Monitoring tool to observe apps in environments",
      links: {
        "fab fa-github": "https://github.com/ghousek1/tern-monitoring-tool",
        "fas fa-external-link": "https://tern.ghousek1.com",
      },
      tags: ["Java", "Spring", "Postgres", "Kafka"],
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center w-full section-padding section-margin "
      >
        <div className="flex items-center w-full pb-16 header-line ">
          <span className="mr-4 text-xl accent font-monospace">03.</span>
          <h3 className="slate whitespace-nowrap text-2xl font-[600]">
            Featured Projects
          </h3>
        </div>
        {featuredProjectList.map((p, i) => {
          return (
            <FeaturedProject
              key={p.name}
              imageLight={p.imageLight}
              imageDark={p.imageDark}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}

        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-col items-center justify-center w-full pb-8">
            <h3 className="slate mb-[0.3rem] text-2xl font-[600]">
              Other Projects
            </h3>
            <a
              href="https://github.com/ghousek1?tab=repositories"
              className={"accent font-monospace text-sm"}
            >
              view github repos
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
