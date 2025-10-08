import React, { useState, useEffect } from "react";

import styleGn from '../styles/StyleGr.module.css'

const Typewriter = ({ text, speed = 100, loop = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, loop]);

  return (
    <h1 className={styleGn.typewriter}>
      {displayedText}
      <span className={styleGn.cursor}>|</span>
    </h1>
  );
};

export default Typewriter;
