import React from "react";
import axios from "axios";

const PullRequest = (props) => {
  axios
    .get(
      "https://api.github.com/repos/" + props.user + "/" + props.repo + "/pulls"
    )
    .then((repo) => {
      console.log("repo", repo);
    });
  return (
    <div className="bg-red-500 w-full h-3/4">
      <p>Nome do repositório: {props.repo}</p>
      <p>Nome do usuário: {props.user}</p>
    </div>
  );
};

export default PullRequest;