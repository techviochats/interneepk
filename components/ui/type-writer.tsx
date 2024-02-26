"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const TypeWriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "Got a competitive Job",
          "On Your desired domain",
          "Gives hands on Experience",
        ],
        delay: 50,
        deleteSpeed: 40,
        cursorClassName: "text-internee-theme/90 w-0.5",
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
