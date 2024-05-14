import React from "react";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from 'react-type-animation';
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Application Developer",
        
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />

    // <TypeAnimation
    //   sequence={[
    //     // Same substring at the start will only be typed out once, initially
    //     "Hello",
    //     1000,
    //     "I'm Muhammed Hisham ",
    //     1000,
    //     'Application Developer',
    //     1000,

    //   ]}
    //   wrapper="span"
    //   speed={45}
    //   cursor={false}
    //   deletionSpeed={{ type: "keyStrokeDelayInMs", value: 60 }}
    //   omitDeletionAnimation={false}
    //   style={{ fontSize: '3em', display: 'inline-block', color: 'white', fontFamily: "monospace" }}
    //   repeat={Infinity}
    // />
  );
}

export default Type;
