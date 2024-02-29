import React from 'react'
import Typewriter from "typewriter-effect";

function Home3() {
  return (
    <Typewriter
    options={{
      strings: [
        "MEARN Stack Developer",
        "Web Developer",
        "React Developer",
        "Freelancer",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  )
}

export default Home3