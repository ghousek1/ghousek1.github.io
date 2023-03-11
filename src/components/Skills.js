import React from "react";
import "./../App.css";
import JavaIcon from "../assets/icons/svg/java.svg";
import GoLangIcon from "../assets/icons/svg/golang.svg";
import SpringIcon from "../assets/icons/svg/spring.svg";
// import GoFiberIcon from "../assets/icons/svg/go-fiber.svg";
import ReactJsIcon from "../assets/icons/svg/reactjs.svg";
import PostgresIcon from "../assets/icons/svg/postgresql.svg";
import MongoDbIcon from "../assets/icons/svg/mongodb.svg";
import RedisIcon from "../assets/icons/svg/redis.svg";
import KafkaIcon from "../assets/icons/svg/kafka.svg";
import MeilisearchIcon from "../assets/icons/svg/meilisearch.svg";
import GraphqlIcon from "../assets/icons/svg/graphql.svg";
import DockerIcon from "../assets/icons/svg/docker.svg";
import KubernetesIcon from "../assets/icons/svg/kubernetes.svg";

function Skills() {
  const skillList = [
    {
      name: "java",
      imageLink: JavaIcon,
    },
    {
      name: "go",
      imageLink: GoLangIcon,
    },
    {
      name: "spring",
      imageLink: SpringIcon,
    },
    {
      name: "react",
      imageLink: ReactJsIcon,
    },
    {
      name: "postgres",
      imageLink: PostgresIcon,
    },
    {
      name: "mongodb",
      imageLink: MongoDbIcon,
    },
    {
      name: "redis",
      imageLink: RedisIcon,
    },
    {
      name: "kafka",
      imageLink: KafkaIcon,
    },
    {
      name: "graphql",
      imageLink: GraphqlIcon,
    },
    ,
    {
      name: "meilisearch",
      imageLink: MeilisearchIcon,
    },
    {
      name: "docker",
      imageLink: DockerIcon,
    },
    {
      name: "kubernetes",
      imageLink: KubernetesIcon,
    },
  ];

  return (
    <>
      <div id="skills" className="flex flex-col items-center w-full section-padding">
        <div className="flex items-center w-full header-line pb-8">
          <span className="accent mr-4 text-xl font-monospace">01.</span>
          <h3 className="text-2xl whitespace-nowrap slate font-[600]">
            Skills
          </h3>
        </div>
        <div className="flex flex-row w-full flex-wrap items-center justify-items-end md:justify-evenly  ">
          {skillList.map((skill, key) => (
            <div
              key={key}
              className="text-center p-2 mb-6 md:p-6 md:mb-10 flex-1"
            >
              <img
                src={skill.imageLink}
                className="mx-auto mb-1 w-6 h-6 md:mb-2 md:w-16 md:h-16 grayscale hover:grayscale-0"
                alt={skill.name}
              />
              <div className="slate text-xs md:text-sm font-monospace capitalize">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
