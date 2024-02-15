import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Artificial Intelligence.", "Machine Learning.","Web Development."],
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
          Hi, I'm <span className="text-designColor capitalize">Sanduni</span>
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
        Self-motivated and adaptable professional with a strong track record in navigating diverse technology stacks. Thrives in problem-solving and interpersonal skills, excelling under pressure. Enthusiastically embraces new challenges, always seeking opportunities for learning and growth.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner