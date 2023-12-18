import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front-end Developer.", "Web Developer.", "Mobile Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kaushalya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#9b9b9e"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A passionate frontend developer and React.js enthusiast. Here, you'll find a collection of my journeys in crafting seamless and delightful digital experiences. With a knack for turning ideas into interactive realities, I specialize in building user-friendly web applications that leave a lasting impression. Whether you're here to explore my projects, discover the latest in frontend tech, or discuss potential collaborations, I'm thrilled to have you on board. Let's embark on a coding adventure together!
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner