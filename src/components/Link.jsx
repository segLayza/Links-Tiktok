import React from "react";
import styleGn from "../styles/StyleGr.module.css";

function Link({ name, url }) {
  return (
    <>
    <div className={styleGn.linkBox}>

      <a
        className={
          name == "youTube"
          ? styleGn.linkURLYoutube
          : name == "kick"
          ? styleGn.linkURKick
          : name == "twitch"
          ? styleGn.linkURLTwitch
          : name == "tiktok"
          ? styleGn.linkURLTikTok
          : styleGn.linkURLGitHub
        }
        href={url}
        >
        {name}
      </a>
        </div>
    </>
  );
}

export default Link;
