import React from "react";

import { TypeAnimation } from 'react-type-animation';
function Type() {
  return (


    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Mobile App Developer",
        1000,
        "Technology Enthusiast ",
        1000,
       

      ]}
      wrapper="span"
      speed={45}
      cursor={false}
      deletionSpeed={{ type: "keyStrokeDelayInMs", value: 60 }}
      omitDeletionAnimation={false}
      style={{ fontSize: '3em', display: 'inline-block', fontFamily:"inherit",color:'#3a86eb',fontWeight:'bold'  }}
      repeat={Infinity}
    />
  );
}

export default Type;
