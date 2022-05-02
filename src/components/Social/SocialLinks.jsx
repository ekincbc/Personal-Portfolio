import React from "react";
import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as LinkedinIcon } from "../../img/linkedin.svg";

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://github.com/ekincbc"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        data-aos="flip-down"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ekincebeci/"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        data-aos="flip-down"
      >
        <LinkedinIcon />
      </a>
    </>
  );
};

export default SocialLinks;
